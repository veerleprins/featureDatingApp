// Import express package:
const express = require('express');
const app = express();
const PORT = 3000;

//Setting ejs:
app.set('view engine', 'ejs');
//Telling ejs to get view directory:
app.set('views', 'view-ejs');

// Using 'static' directory:
app.use(express.static('static'));

//Getting al the paths and calling the functions:
app.get('/', home);
app.get('/about', about);
app.get('/profile', profile);
app.get('/contact', contact);
app.get('/*', error);

function home(req, res) {
    res.render('index');
};

function about(req, res) {
    res.render('about');
};

function contact(req, res) {
    res.render('contact');
};

function profile(req, res) {
    res.render('profile');
};


//Getting dynamic page with de user 's name:
// app.get('/profile/:nameUser', function (req, res) {
//     res.send(`Your name is: ${req.params.nameUser}`);
//     res.render('profile', {
//         person: req.params.name
//     });
// });

function error(req, res) {
    res.render('404');
};

//Server listening on given port:
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});