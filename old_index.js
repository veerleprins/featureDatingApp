// const camelCase = require('camelcase');
// console.log(camelCase('FOO-BAR'));

// Import express package:
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// Using PORT 3000:
const PORT = 3000;

// Using 'static' directory:
app.use(express.static('public'));
app.use(express.static('images'));

// Getting index.html file:
app.get('/', function (req, res) {
 res.sendFile(__dirname + '/public/index.html');
});
// Getting about.html file:
app.get('/about/', function (req, res) {
 // res.sendFile(__dirname + '/public/about.html');
 // console.log(req.query);
 res.send(req.params)
});
// Getting contact.html file:
app.get('/contact', function (req, res) {
 res.sendFile(__dirname + '/public/contact.html');
});

// Getting dynamic page with de user's name:
app.get('/profile/:name', function (req, res) {
 // res.send(`Your name is: ${req.params.nameUser}`);
 res.render('profile', {
  person: req.params.name
 });
});

// Getting 404.html file:
app.get('/*', function (req, res) {
 res.sendFile(__dirname + '/public/404.html');
});

app.listen(PORT, () => {
 console.log(`Server is listening on port ${PORT}`);
});