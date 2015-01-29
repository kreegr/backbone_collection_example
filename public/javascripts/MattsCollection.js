;(function(root){
    "use strict";


    var MattsCollection = Backbone.Collection.extend({
        url : '/data'
    });

    root.MattsCollection = MattsCollection;
})(this);