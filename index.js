// Import packages:
const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser');
const mongo = require('mongodb').MongoClient;
const slug = require('slug');
const dotenv = require('dotenv').config();
const app = express();
const PORT = 3000;

//Setting the global variables: 
let idThisUser = 1;
let db = null;

//Connecting to the database:
let url = process.env.DB_HOST + ':' + process.env.DB_PORT;
mongo.connect(url, { useUnifiedTopology: true }, function (err, client){
  if (err) {
    throw err
  }
  db = client.db(process.env.DB_NAME);
  console.log('Database is connected...');
});

//Setting and using the middleware:
app.set('view engine', 'ejs');
app.set('views', 'view-ejs');
app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
}));

//Getting all the paths and calling the functions:
app.get('/', home);
app.get('/filters', filters);
app.post('/', post);
app.get('/*', error);

//Listen to the server:
app.listen(PORT, connected);

async function home(req, res, next) {
  //Displays the index page with all the users from the database
  //except the logged in user:
  try {
    let users = await db.collection('datingUsers').find({id: {$ne: idThisUser}}).toArray()
    await res.render('index.ejs', {users : users});
  } catch (err) {
    next(err);
  }
};

async function post (req, res, next) {
  //Updates the database with the information from the form and then searches
  // for users that match the logged-in user's preferences. Finally, the index
  // page is shown with the filtered users:
  let prefgender = slug(req.body.gender);
  let prefmovie = slug(req.body.movies);
  try {
    await db.collection('datingUsers').updateOne(
      {id: idThisUser},
      {$set: { prefGender: prefgender, prefMovies: prefmovie}}
    );
    let allUsers = await db.collection('datingUsers').find({id: {$ne: idThisUser}}).toArray();
    let loggedIn = await db.collection('datingUsers').find({id: idThisUser}).toArray();
    let showUsers = await db.collection('datingUsers').find({$and : [{gender : prefgender}, {movies : prefmovie}]}).toArray();
    let noMovies = await db.collection('datingUsers').find({$and : [{id: {$ne: idThisUser}}, {gender : prefgender}]}).toArray();
    let everything = await db.collection('datingUsers').find({$and : [{$or : [{gender : prefgender}, {movies : prefmovie}]}, {id: {$ne: idThisUser}}]}).toArray();
    if (loggedIn[0].prefMovies === "") {
      await res.render('index.ejs', {users: noMovies});
    } else if (loggedIn[0].prefGender === "Everything") {
      await res.render('index.ejs', {users: everything});
    } else {
      await res.render('index.ejs', {users: showUsers});
    }
  } catch (err) {
    next(err);
  }
}

function filters(req, res) {
  //Displays the filter page:
  res.render('filters');
};

function error(req, res) {
  //Displays the error page:
 res.render('404');
};

function connected() {
  //Server listening on given port:
  console.log(`Server is listening on port ${PORT}`);
}