import './main.html';

if(Meteor.isClient) {
  Meteor.subscribe('users');
  Meteor.subscribe('customers');
  Meteor.subscribe('questions');
  Meteor.subscribe('statistic');
  Meteor.subscribe('admindata');
  Meteor.subscribe('images');
  Meteor.subscribe('oneFour');
  Meteor.subscribe('simbiots');
}
