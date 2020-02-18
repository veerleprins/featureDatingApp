// const camelCase = require('camelcase');
// console.log(camelCase('FOO-BAR'));


// Import express package:
const express = require('express');
const app = express();
// Using PORT 3000:
const PORT = 3000;

// Using 'static' directory:
app.use(express.static('public'));

// Getting index.html file:
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/public/about.html');
});
app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});