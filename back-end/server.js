const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const toDoRoutes = require('./routes/toDoRoutes')

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET', 'POST', 'PUT', 'DELETE', 'OPTIONS');
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','PUT',]
}))

//CRUD endpoints
app.use('/api/todo', toDoRoutes)

app.listen(process.env.PORT || 3000, () => console.log('Server listening on port 3000!'));