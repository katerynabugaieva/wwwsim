Template.accessDenied.helpers({
    isUser: function(){
        let curr = Meteor.userId();
        if(curr){
            return true;
        } else{
            return false;
        }
    }
});