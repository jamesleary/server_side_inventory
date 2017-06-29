var express = require('express');
var app = express();
var path = require('path');
var port = 5002;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var productRouter = require('./routes/product.js');

app.use('/product', productRouter);

//wildcard bucket
app.get('/*', function(req, res){
  //http://localhost:5002/scripts/client.js
  //scripts/client.js == req.rams[0];
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public', file));
});

app.listen(port, function(){
  console.log('Server running on port ',port);

});
