var express = require('express'),
port = process.env.PORT || 1337;
//bodyParser = require('body-parser');

var app = express();

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static(__dirname + "/public"));

app.get('/',function(req,res) {
	res.render('index');
});

app.listen(port, function(){
	console.log("app running on port "+ port);
});