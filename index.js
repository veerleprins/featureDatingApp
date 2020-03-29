// Import packages:
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongo = require('mongodb').MongoClient;
const slug = require('slug');
const app = express();
require('dotenv').config();

//Setting the global variables: 
const DB_PORT = process.env.DB_PORT;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
let idThisUser = 1;
let db = null;
let url = DB_HOST + ':' + DB_PORT;

//Connecting to the database:
mongo.connect(url, { useUnifiedTopology: true }, function (err, client){
  if (err) {
    throw err
  }
  db = client.db(DB_NAME);
  console.log('Database is connected...');
});

//Setting and using the middleware:
app.set('view engine', 'ejs');
app.set('views', 'view-ejs');
app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));

//Getting all the paths and calling the functions:
app.get('/', home);
app.get('/filters', filters);
app.post('/', post);
app.get('/*', error);

//Listen to the server:
app.listen(DB_PORT, connected);

async function home(req, res, next) {
  //Displays the index page with all the users from the database
  //except the logged in user:
  console.log(req.session.movies);
  try {
    let users = await db.collection('datingUsers').find({id: {$ne: idThisUser}}).toArray()
    await res.render('index.ejs', {users : users});
  } catch (err) {
    next(err);
  }
};

async function updatePreferences (gender, movie) {
  //Updates the database with the information form the form:
  try {
    await db.collection('datingUsers').updateOne(
      {id: idThisUser},
      {$set: { prefGender: gender, prefMovies: movie}}
    );
  } catch {
    next(err);
  }
}

async function post (req, res, next) {
  //Searches for users that match the logged-in user's preferences
  // and show the index page with these filtered users:
  req.session.gender = req.body.gender;
  req.session.movies = req.body.movies;
  console.log(req.session.movies);
  try {
    let prefgender = slug(req.body.gender);
    let prefmovie = slug(req.body.movies);

    updatePreferences(prefgender, prefmovie);
    let allUsers = await db.collection('datingUsers').find({id: {$ne: idThisUser}}).toArray();
    let loggedIn = await db.collection('datingUsers').find({id: idThisUser}).toArray();
    let showUsers = await db.collection('datingUsers').find({$and : [{gender : prefgender}, {movies : prefmovie}]}).toArray();
    let noMovies = await db.collection('datingUsers').find({$and : [{id: {$ne: idThisUser}}, {gender : prefgender}]}).toArray();
    let everyone = await db.collection('datingUsers').find({$and : [{$or : [{gender : prefgender}, {movies : prefmovie}]}, {id: {$ne: idThisUser}}]}).toArray();
    if (loggedIn[0].prefMovies === "" && loggedIn[0].prefGender === "Everyone") {
      res.render('index.ejs', {users : allUsers});
    } else if (loggedIn[0].prefMovies === "") {
      res.render('index.ejs', {users: noMovies});
    } else if (loggedIn[0].prefGender === "Everyone") {
      res.render('index.ejs', {users: everyone});
    } else {
      res.render('index.ejs', {users: showUsers});
    }
  } catch (err) {
    next(err);
  }
}

function filters(req, res) {
  //Displays the filter page:
  res.render('filters', {gender : req.session.gender});
};

function error(req, res) {
  //Displays the error page:
 res.render('404');
};

function connected() {
  //Server listening on given port:
  console.log(`Server is listening on port ${DB_PORT}`);
}