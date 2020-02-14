// const camelCase = require('camelcase');

// console.log(camelCase('FOO-BAR'));

const express = require('express')
const app = express()
const port = 3000

app.get('/', test)

function test(req, res) {
    res.send('<h1>Hello Client</h1>\n')
}

app.listen(port, test2)

function test2() {
    console.log('Example app listening on port ${port}!')
}