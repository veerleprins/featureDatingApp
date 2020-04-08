// Import packages:
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const mongo = require("mongodb").MongoClient;
const slug = require("slug");
const app = express();
require("dotenv").config();

//Setting the global variables: 
const DB_PORT = process.env.PORT || process.env.DB_PORT;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
let url = DB_HOST + ":" + DB_PORT;
let db = null;

//This will be the variable taken from the login
//in the total dating app:
let idThisUser = 1;

//Connecting to the database:
mongo.connect(url, { useUnifiedTopology: true }, connectDB);

//Setting and using the middleware:
app.set("view engine", "ejs");
app.set("views", "view-ejs");
app.use(express.static("static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));

//Getting all the paths and calling the functions:
app.get("/", home);
app.get("/filters", filters);
app.post("/", postPreferences);
app.get("/*", error);

//Listen to the server:
app.listen(DB_PORT, connected);

async function connectDB(err, client) {
  //Makes a connection to the database and logs if database
  // is connected.
  try {
    db = await client.db(DB_NAME);
    console.log("Database is connected...");
  } catch {
    console.log(err);
  }
};

async function home(req, res, next) {
  //Shows the index page with the filtered users and stores this
  //user's preferences as a session.
  try {
    const datingUsers = await db.collection("datingUsers").find().toArray();
    let usersWithoutOwn =  datingUsers.filter(removeOwn);
    let thisUser = datingUsers.filter(getOwn);
    req.session.gender = thisUser[0].prefGender;
    req.session.movie = thisUser[0].prefMovies;
    let filtered = await testFilter(usersWithoutOwn, thisUser);
    // console.log(testie);
    // let filtered = filterPreferences(usersWithoutOwn, thisUser[0].prefGender, thisUser[0].prefMovies);
    res.render("index.ejs", {users: filtered});
  } catch (err) {
    next(err);
  }
}

function removeOwn(user) {
  //Returns all users who do not have the same ID as this user's ID:
  return user.id !== idThisUser;
}

function getOwn(user) {
  //Returns the user whose ID is the same as this user's ID:
  return user.id === idThisUser;
}

function filterPreferences(users, prefgender, prefmovie) {
  //Filters the users by gender and movie preferences and returns
  //a boolean if the conditions are correct:
  return users.filter(function (user) {
    //Checking is the prefGender from other user is the same: (NOT WORKING YET)
    if (((user.gender === prefgender && user.prefGender !== prefgender) || prefgender === "everyone") && prefmovie === "") {
      return true;
    } else if ((user.gender === prefgender || prefgender === "everyone") && prefmovie !== "") {
      //&& (user.prefGender !== prefgender || user.prefGender === "everyone")
      return user.movies.find(function (movie){
        return movie === prefmovie;
      });
    }
  });
}

function testFilter(users, loggedIn) {
  return users.filter(function (user) {
    if ((loggedIn[0].prefGender === user.gender && loggedIn[0].gender === user.prefGender) 
    || (user.prefGender === "everyone" && loggedIn[0].prefGender === "everyone") 
    || (user.prefGender === "everyone" && user.gender === loggedIn[0].prefGender) 
    || (loggedIn[0].prefGender === "everyone" && user.prefGender === loggedIn[0].gender)) {
      if (loggedIn[0].prefMovies === "") {
        return true;
      } else if (loggedIn[0].prefMovies !== "") {
        return user.movies.find(function (movie){
          return movie === loggedIn[0].prefMovies;
        });
      }
    }
  })
}


function filters(req, res) {
  //Displays the filter page:
  res.render("filters", {gender : req.session.gender, movie: req.session.movie});
}

async function postPreferences(req, res, next) {
  //Retrieves the entered preferences and sends them to the 
  //updatePreferences function. After this the index page is 
  //redirected again:
  try {
    if (req.body.remove) {
      req.session.destroy();
      await updatePreferences("everyone", "");
    } else {
      let genderPreference = slug(req.body.gender);
      let moviePreference = slug(req.body.movies);
      await updatePreferences(genderPreference, moviePreference);
    }
    res.redirect("/");
  } catch (err) {
    next(err);
  }
}

async function updatePreferences (genderPreference, moviePreference) {
  //Updates the database with the new preferences from the form:
  try {
    await db.collection("datingUsers").updateOne(
      {id: idThisUser},
      {$set: { prefGender: genderPreference, prefMovies: moviePreference}}
    );
  } catch {
    next(err);
  }
}

function error(req, res) {
  //Displays the error page:
 res.render("404");
};

function connected() {
  //Server listening on given port:
  console.log(`Server is listening on port ${DB_PORT}`);
}