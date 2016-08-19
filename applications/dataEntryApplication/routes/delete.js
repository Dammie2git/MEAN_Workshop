var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

router.get('/:id', function(req, res, next) {
  MongoClient.connect('mongodb://localhost/class',function(err,db){
    db.collection('students').remove({_id:ObjectId(req.params.id)},function(err,deletedStudent){
      if(err)
        throw err;
      res.redirect('/');
      db.close();
    })
  });
})


module.exports = router;
