var express = require('express');
var router = express.Router();

var products = [];
// Express removed the /product when we do an app.use
router.post('/', function(req, res){
  var product = req.body;    //this is the DATA we set to data  on ajax post on client
  console.log(product);
  products.push(product);
  res.send({messege:'Successfully added our project!'});
});


router.get('/',function(req,res){
  res.send(products);
});

module.exports = router;
