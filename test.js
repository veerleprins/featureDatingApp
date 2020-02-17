const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('static'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/static/index.html');
})

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/static/about.html')
})
app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/static/404.html')
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

console.log(__dirname);