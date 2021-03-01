var http = require('http');
var express = require('express')
var app = express()

//Servidor
var port = 9999
var hostname = "localhost"
const bodyParser = require('body-parser')

app.use(
    bodyParser.urlencoded({ extended: true })
)

app.use(bodyParser.json())

app.get('/salvarLogin', (req, res) => {

})

app.get('/get2', (req, res) => {

})

app.post('/post1', (req, res) => {
    console.log(req.body.data);
})

app.post('/post2', (req, res) => {
    console.log(req.body.data)
})

app.listen(port, hostname, () => {
    console.log("Server running at http://" + hostname + ":" + port)
})