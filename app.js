var express = require('express'),
port = process.env.PORT || 5000;
//bodyParser = require('body-parser');

var app = express(),
router = express.Router();
app.use('view engine','ejs');

app.get('/',function(req,res) {
	res.render('index');
});
app.listen(port, function(){
	console.log("app running on port "+ port);
});