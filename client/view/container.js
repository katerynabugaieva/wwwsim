/**
 * Created by 1000g_2 on 26.10.17.
 */
Template.container.helpers({
    enterText: function(){
        let text = AdminData.find().fetch()[AdminData.find().fetch().length - 1].text;
        return text;
    }
});

Template.container.events({
    'click #q14': function(){
        $('#divOneFour').show();
        $('#divForWWW').hide();
        $('#divSimbiots').hide();
    },

    'click #www': function(){
        $('#divOneFour').hide();
        $('#divForWWW').show();
        $('#divSimbiots').hide();
        $('#enterText1').hide();
    },

    'click #simb': function(){
        $('#divOneFour').hide();
        $('#divForWWW').hide();
        $('#divSimbiots').show();
    }
});

