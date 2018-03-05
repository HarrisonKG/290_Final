// Kristen Harrison, CS290 Final Project



// dependencies
var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout:'template'});
var bodyParser = require('body-parser');
var request = require('request');
var credentials = require('./credentials.js');

var app = express();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// routes
app.get('/',function(req,res){
	context = {};
	request('http://api.openweathermap.org/data/2.5/weather?q=berlin,de&units=imperial&appid=' 
	+ credentials.apiKey, function(err, response, body){
		
		if(!err && response.statusCode < 400){
			var owm = JSON.parse(body);

			context.tempTag = "It's " + owm.main.temp + " F degrees in Berlin right now!";		//context.temp = owm.main.temp;
			res.render('main', context);
		} else {
			if (response){
				console.log(response.statusCode);
			}
			res.render('main', context);
		}
	});
});


app.get('/maps',function(req,res){
  res.render('maps');
});


app.get('/history',function(req,res){
  res.render('history');
});


app.get('/sightseeing',function(req,res){
  res.render('sightseeing');
});


app.get('/weather',function(req,res){

	var cityArray = [
		{"city":"berlin", "country":"de"}, 
		{"city":"kaliningrad", "country":"ru"},
		{"city":"gdansk", "country":"pl"},
		{"city":"potsdam", "country":"de"},
		{"city":"wroclaw", "country":"pl"}
	];

	/* make nested asynchronous requests for all cities in the 
	array, then render the page when all requests complete.
	*/
	var context = {};
	var counter = 0;

	cityArray.forEach(function(item, index){

		request('http://api.openweathermap.org/data/2.5/weather?q=' 
		+ item.city + ',' + item.country + '&units=imperial&appid=' 
		+ credentials.apiKey, function(err, response, body){
		
			if(!err && response.statusCode < 400){
				var owm = JSON.parse(body);
				context['cityName' + index] = owm.name;
				context['conditions' + index] = owm.weather[0].description;
				context['temp' + index] = owm.main.temp;
				context['icon' + index] = "http://openweathermap.org/img/w/" + owm.weather[0].icon + ".png";
				counter++;

				// render climate page once all requests are successful
				if (counter == cityArray.length){
					res.render('weather', context);
				}
				// continues to next iteration in the forEach function
				return;

			} else {
				if (response){
					console.log(response.statusCode);
				}
				context.errorMsg = "Something went wrong with the API requests.";
				res.render('weather', context);
			}
		});
	});
});



// error pages
app.use(function(req,res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
