// Import packages:
const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const slug = require('slug');
const dotenv = require('dotenv').config();
const app = express();
const PORT = 3000;
const urlencodedParser = bodyParser.urlencoded({extended: true});

let usersCollection = null;
let db = null;
let uri = process.env.DB_HOST + ':' + process.env.DB_PORT;

mongo.MongoClient.connect(uri, { useUnifiedTopology: true }, function (err, client){
  if (err) throw err;
  db = client.db(process.env.DB_NAME);
  usersCollection = db.collection('users');
  console.log('Database is connected...');
});

let thisUser = {
  id: 01,
  name: 'Veerle Prins',
  gender: 'Woman',
  age: 22,
  location: 'Hoofddorp, Nederland',
  movies: ['actionMovies', 'comedyMovies'],
  pref: []
}

let usersData = [{
  id: 01,
  name: 'Veerle Prins',
  gender: 'Woman',
  age: 22,
  location: 'Hoofddorp, Nederland',
  movies: ['actionMovies', 'comedyMovies'],
  pref: []
},
{
  id: 02,
  picture: 'JackHughes.png',
  name: 'Jack Hughes',
  gender: 'Man',
  age: 23,
  location: 'York, England',
  movies: ['actionMovies', 'comedyMovies']
},
{
  id: 03,
  picture: 'KaylaJansen.png',
  name: 'Kayla Jansen',
  gender: 'Woman',
  age: '22',
  location: 'York, England',
  movies: ['comedyMovies']
}, 
{
  id: 04,
  picture: 'JenniferMiller.png',
  name: 'Jennifer Miller',
  gender: 'Woman',
  age: '25',
  location: 'York, England',
  movies: ['actionMovies']
},
{
  id: 05,
  picture: 'NoahAdams.png',
  name: 'Noah Adams',
  gender: 'Man',
  age: '25',
  location: 'York, England',
  movies: ['comedyMovies']
},
{
  id: 06,
  picture: 'LiamSmith.png',
  name: 'Liam Smith',
  gender: 'Man',
  age: '22',
  location: 'York, England',
  movies: ['adventureMovies', 'actionMovies']
},
{
  id: 07,
  picture: 'JamesBrown.png',
  name: 'James Brown',
  gender: 'Man',
  age: '23',
  location: 'York, England',
  movies: ['actionMovies']
}
];

// let data = JSON.stringify(usersData);
// console.log(data);


// Search for own user:
let obj = usersData.find(obj => obj.id == 1);
console.log(obj);


//Remove own user from allUsers: 
let allUsers = usersData
allUsers.splice(0, 1);

// const objArray = [
//   { id: 0, name: 'Object 0', otherProp: '321' },
//   { id: 1, name: 'O1', otherProp: '648' },
//   { id: 2, name: 'Another Object', otherProp: '850' },
//   { id: 3, name: 'Almost There', otherProp: '046' },
//   { id: 4, name: 'Last Obj', otherProp: '984' }
// ];

// let obj = objArray.find(obj => obj.id == 3);

// console.log(obj.id)


app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: true }));

//Setting ejs & telling to get view directory:
app.set('view engine', 'ejs');
app.set('views', 'view-ejs');

//Getting all the paths and calling the functions:
app.get('/', home);
app.get('/probeersel', test);
app.get('/filters', filters);
app.get('/*', error);
app.post('/', postFilters);

function filters(req, res){
  // let data = slug(req.body);
  res.render('/', {
    preferences: req.body
  });
}

function home(req, res) {
  res.render('index', {
    users: allUsers
  });
};

function test(req, res) {
  usersCollection.find().toArray(done)
  function done(err, users) {
      if (err) {
          next(err);
      } else {
          databaseUsers = users;
          res.render('probeersel.ejs', { users: users });
      }
  }
};

function postFilters (req, res){
  // let f = usersData[0]["pref"];
  // console.log(f);
  let filters = thisUser["pref"];
  if (filters.length === 0) {
    // Push to database:
    filters.push(req.body.gender);
    filters.push(req.body.movies);
  } else if (filters.length === 2) {
    // Update to database:
    filters[0] = req.body.gender;
    filters[1] = req.body.movies;
  }

  let filteredUsers = {filtered: []};

  //Looping through users:
  usersData.forEach(function(person) {
    if (person.id != 01) {
      if (person.gender === filters[0] || filters[0] === 'Anything') {
        filteredUsers.filtered.push(person);
      };
    }
    // if (person.gender === filters[0] || filters[0] === 'Anything') {
    //   filteredUsers.filtered.push(person);
    // };
  });
  res.render('index', {
    users: filteredUsers.filtered
  });
}; 

function postPreferences(req, res) {
  res.render('indexafter', {
    preferences: req.body
  })
};

function filters(req, res) {
  res.render('filters');
};

function sendMovies(req, res) {
 res.render('test1', {
  data: data
 });
}

function error(req, res) {
 res.render('404');
};

//Server listening on given port:
app.listen(PORT, () => {
 console.log(`Server is listening on port ${PORT}`);
})