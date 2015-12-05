var express = require('express'),
bodyParser = require('body-parser');

app.set('view engine','ejs');

app.get('/',function(req,res) {
	res.render('index');
})