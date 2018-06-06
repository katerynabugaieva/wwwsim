/**
 * Created by 1000geeks on 30.01.17.
 */

Meteor.publish('customers', function() {
    return Customers.find({id: this.userId});
});

Meteor.publish('users', function() {
    return Meteor.users.find();
});


Meteor.publish('questions', function(){
    return Questions.find();
})

Meteor.publish('statistic', function(){
    return Statistic.find();
})

Meteor.publish('admindata', function(){
    return AdminData.find();
})
/*
Meteor.publish("images", function () {

    return Images.find();
});
    */


Meteor.publish('oneFour', function(){
    return OneFour.find();
})

Meteor.publish('simbiots', function(){
    return Simbiots.find();
})