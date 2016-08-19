var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

router.get('/', function(req, res, next) {
  MongoClient.connect('mongodb://localhost/class',function(err,db){
    db.collection('students').find({}).toArray(function(err,students){
      if(err)
        throw err;
      res.render('index',{studentsArray:students});
      db.close();
    })
  });
})


module.exports = router;
