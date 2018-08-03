

//JS Server with handlebars

var express = require('express');
var app = express();  //use express js module

//add handlebars view engine
var handlebars = require('express3-handlebars')
	.create({defaultLayout: 'main'});  //default handlebars layout page

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars'); //sets express view engine to handlebars

app.set('port', process.env.PORT || 3000);  //sets port 3000

//To serve static files, we simply add the following line to our index.js file above our defined routes:
app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){ 
	res.render('home');  //respond with homepage
});

app.get('/dirtypaws', function(req,res){ 
	res.render('scroll');  //respond with homepage
});

app.get('/tricks', function(req,res){ 
	res.render('list');  //respond with homepage
});

app.get('/outside', function(req,res){ 
	res.render('links');  //respond with homepage
});

app.use(function(req,res){  //express catch middleware if page doesn't exist
	res.status(404);  //respond with status code
	res.render('404'); //respond with 404 page
});

app.listen(app.get('port'), function(){ //start express server
	console.log( 'Express Server Started on http://localhost:3000');

});