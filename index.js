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

function postFilters (req, res){
  console.log(req.body)
  res.render('indexafter', {
    interests: req.body
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