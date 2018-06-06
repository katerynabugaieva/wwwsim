Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',

    waitOn: function () {
        return [
            //  Meteor.subscribe('shopping')
            //   Meteor.subscribe('customer'),
            //   Meteor.subscribe('avatar'),
            //  Meteor.subscribe('documents'),
        ]
    }
});

Router.map(function () {
    /*
     this.route('post', {
     path: '/',
     data: function () {
     //  return Customers.findOne({id: Meteor.userId()});
     return Meteor.users.findOne({id: Meteor.userId()});
     }
     });
     */

    this.route('container', {path: '/'});
  //  this.route('onefourView', {path: '/game1'});

    this.route('admin', {
        path: '/admin'
    });
    this.route('bonus', {
        path: '/bonus'
    });
});



let requireLogin = function () {
    if (!Meteor.user()) {
        this.render('accessDenied');
    } else {
        this.next();
    }
};

let requireAdmin = function () {
    if(Meteor.user()) {
        if (Meteor.user().profile.roles[0] !== 'admin') {
                this.render('accessDenied');
            } else this.next();
        } 
};

Router.onBeforeAction(requireLogin, {only: ['container', 'admin']});
Router.onBeforeAction(requireAdmin, {only: ['admin']});


