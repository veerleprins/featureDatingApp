// Import express package:
const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: true});

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

let myObj = [{
  name: ""
}, {name: ""}, {name: ""}];


let Jack = person('Jack Hughes', 'Man', '23', 'York, England', 'comedyMovies');
let Noah = person('Noah Adams', 'Man', '25', 'York, England', 'comedyMovies');
let Liam = person('Liam Smith', 'Man', '22', 'York, England', 'adventureMovies');
let James = person('James Brown', 'Man', '23', 'York, England', 'actionMovies');

let users = [Jack, Noah, Liam, James];

app.use(express.static('static'));
//Setting ejs & telling to get view directory:
app.set('view engine', 'ejs');
app.set('views', 'view-ejs');

//Getting all the paths and calling the functions:
app.get('/', home);
app.get('/filters', filters);
app.get('/test1', sendMovies);
app.get('/*', error);

// app.post('/succes', urlencodedParser, testje);
app.post('/indexafter', urlencodedParser, postFilters);

// app.post('/filters_test', urlencodedParser, postFilters);

// function testje(req, res) {
//   myObj.push({name: req.body.firstName})
//   res.render('succes', {
//     test: req.body.firstName
//   })};

function person(letName, letGender, letAge, letLocation, letMovies){
  return {name: letName, gender: letGender, 
    age: letAge, location: letLocation, 
    genre: letMovies};
}


function filters(req, res){
  res.render('/', {
    preferences: req.body
  });
}

function postFilters (req, res){
  let usersFiltered =  {sorted: []};
  for (const user of users) {
    if (req.body.movies === user.genre) {
      usersFiltered.sorted.push(user);
    }console.log(usersFiltered);
    // console.log(user.genre);
  };
  // for (let i; i < users.length; i++){
  //   console.log(i);
  // }

  // console.log(obj.users);
  // if (req.body.movies === obj.users.genre) {
  //   console.log(obj.users.genre);
  // }
  res.render('indexafter', {
    preferences: usersFiltered.sorted[0]
  });
}

// function postPreferences(req, res) {
//   res.render('indexafter', {
//     preferences: req.body
//   })
// };

function home(req, res) {
  res.render('index');
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