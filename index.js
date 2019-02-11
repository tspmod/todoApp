var express = require('express');
var app = express();
var myRoute = require('./routes');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/client'))

app.get('/', function(req, res){
  res.sendFile("index.html");
});

app.use('/task', myRoute);



app.listen(3000, function() {
  console.log('app running port 3000');
})
