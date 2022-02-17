// application packages
const express = require('express')
const app = express()

const path = require('path')
//add template engine
const hbs = require('express-handlebars');
// setup template engine dir and files extension
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultlayout: 'main',
    layoutsDIR: __dirname + '/views/layouts/',
}))

const mysql = require('mysql')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extend: true}))

// create database connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "joga_mysql"
})

con.connect(function(err) {
    if (err) throw err;
    console.log("connected to joga_mysql db");
})

// app start point
app.listen(3000, () => {
    console.log('app is started at http://localhost:3000');
})