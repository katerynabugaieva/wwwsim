
Customers = new Mongo.Collection('customers');
// add for redeploy
Customers.allow({
    update: function (userId, doc) {
        return true
    }, //{return allowToEdit(userId, doc);},  //{ return true;}, //ownsProfile(userId, doc); },
    remove: function (userId, doc) {
        return true
    },//{return allowToEdit(userId, doc);},   //{ return true;} //ownsProfile(userId, doc); },
    insert: function (userId, doc) {
        return true
    }
});



