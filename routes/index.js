
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.sendfile('public/html/index.html');
};

exports.collectionData = require('./data');