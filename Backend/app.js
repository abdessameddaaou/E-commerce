const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const routesauth = require('./routes/authentification/client')
const cookieParser = require('cookie-parser')
const { checkClient } = require('./midlleware/authentifiaction')

const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0.nctg3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true,
    useUnifiedTopology: true })

.then(() => console.log("connextion reussi "))
.catch(()=> console.log("connextion echoué "));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

app.get('*', checkClient)
app.get('/', (req, res) => res.render('register'))

app.use(routesauth)

module.exports = app;