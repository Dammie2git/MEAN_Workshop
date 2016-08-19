var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

router.get('/',function(req,res){
  res.render('add');
})

router.post('/',function(req,res){
  MongoClient.connect('mongodb://localhost/class',function(err,db){
    db.collection('students').save(req.body,function(err,savedStudent){
      if(err)
        throw err;
      res.redirect('/');
      db.close();
    });
  })
})


module.exports = router;
