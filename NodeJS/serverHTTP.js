var http = require('http');
var express = require('express')
var app = express()
const bodyParser = require('body-parser')
const fs = require('fs');
const pathUsers = "listUsers.txt"
const pathTasks = "listTasks.txt"

var listTasks = []

var listUsers = [{
                    id:1, 
                    name:"ruan",
                    login:"felipe@alu.ufc"
                },
                {
                    id:2, 
                    name:"alan",
                    login:"alan@alu.ufc"
                },
                {
                    id:3, 
                    name:"isaac",
                    login:"isaac@alu.ufc"
                },
                {
                    id:4, 
                    name:"natan",
                    login:"natan@alu.ufc"
                }]

try
{
    var readUsers = fs.readFileSync(pathUsers, 'utf8')
    if (!readUsers)
    {
        fs.writeFileSync(pathUsers, JSON.stringify(listUsers))
    }            
    else
    {
        listUsers = JSON.parse(readUsers)
    }
}
catch(error)
{
    fs.writeFileSync(path, JSON.stringify(listUsers))
}

try
{
    
    var readTasks = fs.readFileSync(pathTasks, 'utf8')
    if (!readTasks)
    {
        fs.writeFileSync(pathTasks, JSON.stringify(listTasks))
    }
    else
    {
        listTasks = JSON.parse(readTasks)
    }
}
catch(error)
{
    fs.writeFileSync(pathTasks, JSON.stringify(listTasks))
}
    

//Servidor
var port = 9999
var hostname = "localhost"

app.use(
    bodyParser.urlencoded({ extended: true })
)

app.use(bodyParser.json())

app.get('/users', (req, res) => {
    res.json(listUsers)
})

app.get('/users/:id', (req, res) => {
    console.log(req.params.id)
    var user = listUsers.find(user => req.params.id == user.id)
    res.json(user)
})

app.get('/tasks', (req, res) => {
    res.json(listTasks)
})

app.post('/saveLogin', (req, res) => {
    var user = {
        id      : listUsers.length + 1,
        name    : req.body.name,
        login   : req.body.login
    }
    console.log(req.body.login, req.body.name)
    listUsers.push(user)
    fs.writeFileSync('listUsers.txt', JSON.stringify(listUsers))
    // fs.appendFile('listUsers.txt', JSON.stringify(user), error => {if (error) console.log(error)})
    res.json(user)
})

app.post('/tasks', (req, res) => {
    var task = {
        id      : listTasks.length + 1,
        name    : req.body.name,
        done    : false
    }
    console.log(req.body.name)
    listTasks.push(task)
    fs.writeFileSync('listTasks.txt', JSON.stringify(listTasks))
    res.json(task)
})

app.listen(port, hostname, () => {
    console.log("Server running at http://" + hostname + ":" + port)
})