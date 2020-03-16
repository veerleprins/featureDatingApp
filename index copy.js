// Import packages:
const express = require('express');
const bodyParser = require('body-parser');
// const mongo = require('mongodb');
const slug = require('slug');
const dotenv = require('dotenv').config();

const app = express();
const PORT = 3000;
const urlencodedParser = bodyParser.urlencoded({extended: true});

// let db = null;
// let uri = process.env.DB_HOST + ':' + process.env.DB_PORT;

// mongo.MongoClient.connect(uri, { useUnifiedTopology: true }, function (err, client){
//   if (err) throw err;
//   db = client.db(process.env.DB_NAME);
//   console.log('Database is connected...');
// });

let data = [{
 id: 'purge',
 title: 'The Purge',
 description: 'Description about the purge here...'
},
{
 id: 'silent-hill',
 title: 'Silent Hill',
 description: 'Description about Silent Hill here...'
},
{
 id: 'conjuring',
 title: 'The Conjuring',
 description: 'Description about The Conjuring here...'
}
];

// let myObj = [{
//   name: ""
// }, {name: ""}, {name: ""}];

let usersData = [{
  picture: 'JackHughes.png',
  name: 'Jack Hughes',
  gender: 'Man',
  age: '23',
  location: 'York, England',
  genres: ['actionMovies', 'comedyMovies']
}, {
  picture: 'KaylaJansen.png',
  name: 'Kayla Jansen',
  gender: 'Woman',
  age: '22',
  location: 'York, England',
  genres: ['comedyMovies']
}, {
  picture: 'JenniferMiller.png',
  name: 'Jennifer Miller',
  gender: 'Woman',
  age: '25',
  location: 'York, England',
  genres: ['actionMovies']
},
{
  picture: 'NoahAdams.png',
  name: 'Noah Adams',
  gender: 'Man',
  age: '25',
  location: 'York, England',
  genres: ['comedyMovies']
},
{
  picture: 'LiamSmith.png',
  name: 'Liam Smith',
  gender: 'Man',
  age: '22',
  location: 'York, England',
  genres: ['adventureMovies', 'actionMovies']
},
{
  picture: 'JamesBrown.png',
  name: 'James Brown',
  gender: 'Man',
  age: '23',
  location: 'York, England',
  genres: ['actionMovies']
}];

app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: true }));

//Setting ejs & telling to get view directory:
app.set('view engine', 'ejs');
app.set('views', 'view-ejs');

//Getting all the paths and calling the functions:
app.get('/', home);
app.get('/filters', filters);
app.get('/test1', sendMovies);
app.get('/*', error);

// app.post('/succes', urlencodedParser, testje);
app.post('/', postFilters);

// app.post('/filters_test', urlencodedParser, postFilters);

// function testje(req, res) {
//   myObj.push({name: req.body.firstName})
//   res.render('succes', {
//     test: req.body.firstName
//   })};

function filters(req, res){
  let data = slug(req.body);
  res.render('/', {
    preferences: req.body
  });
}

function home(req, res) {
  res.render('index', {
    users: usersData
  });
};


let preferences = {
  gender: 'Woman'
};

function postFilters (req, res){
  //BRON : https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  // New way :
  preferences["gender"] = req.body.gender;
  preferences["age"] = req.body.age;
  preferences["interest"] = req.body.movies;
  console.log('_______________________');
  // console.log(preferences);

  if (preferences["interest"] === '') {
    if (preferences["gender"] === 'Anything') {
      res.render('index' , {users: usersData});
    } else if (preferences["gender"] === 'Woman') {
      //  Voer code uit...
    } else if (preferences["gender"] === 'Man') {
      // Voer code uit...
    }
  } else {
    if (preferences["gender"] === 'Anything') {
      //Voer code uit...
    } else if (preferences["gender"] === 'Woman') {
      // Voer code uit...
    } else if (preferences["gender"] === 'Man') {
      // Voer code uit... 
    }
  }

  if (preferences["gender"] === 'Anything' && preferences["interest"] === '') {
    res.render('index', {
      users: usersData
    });
  } else {
    let usersFiltered =  {sorted: []};
    usersData.forEach(function(person){
    // console.log(person);
    for (let i = 0; i < person.genres.length; i ++){
      if (person.genres[i] == req.body.movies) {
        usersFiltered.sorted.push(person);
      }
    }
  });
  res.render('index', {
    users: usersFiltered.sorted
  });
  }
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