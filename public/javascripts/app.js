;(function(root){
    "use strict";

    var myCollection = new root.MattsCollection([{
        name : 'Wooter',
        id : 'x'
    }, {
        name : 'Matthew',
        id : '1'
    }, {
        name : 'Erin',
        id : '2'
    }]);


    myCollection.on("add", function(model){
        console.log("adding %s %o", model.get('name'), model.toJSON());
    });

    myCollection.on("remove", function(model){
        console.log("removing %s %o", model.get('name'), model.toJSON());
    });

    myCollection.on("change", function(model){
        var changed = model.changedAttributes();
        console.log('Updating %s', model.previous('name'));
        _.each(changed, function(val, key){
            console.log("Changing %s from %s to %s", key, model.previous(key), changed[key]);
        });
    });


    root.myCollection = myCollection;

})(this);