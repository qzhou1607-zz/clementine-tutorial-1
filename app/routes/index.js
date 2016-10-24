'use strict';
var path = require('path');

var ClickHandler = require(path.join(__dirname,'../controllers/clickHandler.server.js'));

module.exports = function(app) {
    app.get('/',function(req, res){
            res.sendFile(path.join(__dirname,'../../public/index.html'));
        });
    var clickHandler = new ClickHandler();
    
    app.route('/api/clicks')
        .get(clickHandler.getClicks)
        .post(clickHandler.addClick)
        .delete(clickHandler.resetClicks);        
    
}