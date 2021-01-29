const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars  = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes')

app.use(express.static(path.join(__dirname,'public')))

// Middleware included since expressjs version 4.16
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// morgan library for HTTP logger (check http request & response)
app.use(morgan('combined'))

//template engine (to write HTML & CSS template)
app.engine('hbs', handlebars({extname: '.hbs'}))
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,'resources/views'))

// Routes init
route(app);

// set port for app
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})