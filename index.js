//require dependencies
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router();
const port = 3000
const my_model = require('./model/my_model')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

//define a route, usually this would be a bunch of routes imported from another file
app.get('/', function (req, res, next) {
    res.send('Welcome to the Team 3 API');
});

//start Express server on defined port
app.listen(port);

//log to console to let us know it's working
console.log('Team 3 API server started on: ' + port);

app.get('/sub' , my_model.m_subjects.Subjects.get_all)

// app.get('/', (req, res) => {
//     var rs = .
//     console.log(rs)
//     res.json('1')
// })

app.get('/user', (req, res) => res.send('Got a GET user'))

app.post('/', (req, res) => {
    res.send(req.body.name)
})


app.put('/user', (req, res) => res.send('Got a PUT request at /user'))

app.delete('/user', (req, res) => res.send('Got a DELETE request at /user'))

app.get('/user/:userId/books/:bookId', function(req, res) {
    console.log(`userId = ${req.param('userId')}`)
    console.log(`bookId = ${req.param('bookId')}`)
    res.send(req.params)
})