'use strict';

function clickHandler (db) {
    var clicks = db.collection('clicks');
    this.getClicks = function(req,res) {
        clicks.findOne({},{'_id':false},function(err,result) {
            if(err) {
                throw err;
            } 
            if (result) {
                 res.json(result);
            } else {
                clicks.insert({'clicks':0}, function(err,data) {
                    if (err) {
                        throw err;
                    }
                    res.json(data);
                });
            }
            
        })
    }
    
    this.addClick = function(req,res) {
        clicks.findAndModify(
            {},
            {'id':1},
            {$inc: {'clicks':1}},
            function(err,result) {
                if(err) {
                    throw err;
                }
                res.json(result);
            }
        );
    }
    this.resetClicks = function(req,res) {
        clicks.update(
            {},
            {'clicks':0},
            function(err,result) {
                if(err) {throw err;}
                res.json(result);
            }
        );
    }
}
module.exports = clickHandler;