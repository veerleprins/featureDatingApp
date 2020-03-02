// Import express package:
const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({
    extended: true
});

let data = [{
        id: "purge",
        title: "The Purge",
        description: "Description about the purge here..."
    },
    {
        id: "silent-hill",
        title: "Silent Hill",
        description: "Description about Silent Hill here..."
    },
    {
        id: "conjuring",
        title: "The Conjuring",
        description: "Description about The Conjuring here..."
    }
];

app.use(express.static('static'));
//Setting ejs & telling to get view directory:
app.set('view engine', 'ejs');
app.set('views', 'view-ejs');

//Getting all the paths and calling the functions:
app.get('/', home);
app.get('/about', about);
app.post('/succes', urlencodedParser, postFunction);
app.get('/profile', profile);
app.get('/contact', contact);
// app.get('/succes', succes);
app.get('/*', error);

function home(req, res) {
    res.render('index', {
        data: data
    });
};

function about(req, res) {
    res.render('about', {
        data: data
    });
};

function contact(req, res) {
    res.render('contact');
};

function postFunction(req, res) {
    console.log(req.body);
    res.send('Welcome, ' + req.body.firstName);
    // res.render('success', {
    //     test: req.body
    // });
    return
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