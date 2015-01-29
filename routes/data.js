module.exports = function(req, res, next){
    "use strict";

    var json = require(process.cwd() + '/lib/example_data');
    res.json(json);
};