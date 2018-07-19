 let shortTrain = 0;
// Template.admin.onRendered({
//     currenAdminData: function () {
//         let date = AdminData.findOne();
//         console.log(date)
//         if (date) {
//             console.log(date);
//             return date;
//         }
//         else return 1;
//     }
// })

//Template.admin.helpers({
// currenAdminData: function () {
//     let date = AdminData.find().fetch()[0];
//     if(date){
//     console.log(date);
//     return date;}
//     else return 1;
// },
// selectedRole: function (key) {
//     return key == this.role ? 'selected' : '';
// },

//});

Template.admin.events({
    'click #withoutHints': function(){
        if($('#withoutHints').prop('checked')){
            $('#iH').hide();
        } else{
            $('#iH').show();
        }
    },
    'change #iD': function(){
        let dateArray = Questions.find({data: $('#iD').val()}).fetch();
        $('#numberInPackage').text('В текущем пакете ' + dateArray.length);
    },
    'click #bPreviewText': function () {
        let forTr = {};
        forTr.text = $('#iPreviewText').val();
        forTr.date = $('#iDate').val();
       
        if($('#shortT').prop('checked')){ 
            shortTrain = 1;
         } else {
             shortTrain = 0;
         }  
         
         forTr.shortTrain = shortTrain;
        number = 0;

        $('#lDate').text(forTr.date);
        AdminData.insert(forTr);
        console.log(forTr);
    },

    'click #bInput': function () {
        let num = parseInt($('#iN').val());
       // console.log(num);

        let checkQ = Questions.find({ numberRandom: num }).fetch();
        console.log(checkQ);

        let prop = {};

        if (checkQ.length === 0) {
            prop.question = $('#iQ').val();
            prop.answer = $('#iA').val();
            prop.hint = $('#iH').val();
            prop.comment = $('#iC').val();
            prop.type = $('#iT').val();
            prop.data = $('#iD').val();
            prop.numberRandom = getRandomInt(0, 1000000);
            prop.questionImage = $("#iQuestionImage").val();
            prop.answerImage = $("#iAnswerImage").val();

            Questions.insert(prop);
            console.log(prop);
        }
        else {
            if ($('#iQ').val() !== '') {
                prop.question = $('#iQ').val();
            }
            if ($('#iA').val() !== '') {
                prop.answer = $('#iA').val();
            }
            if ($('#iH').val() !== '') {
                prop.hint = $('#iH').val();
            }
            if ($('#iC').val() !== '') {
                prop.comment = $('#iC').val();
            }
            if ($('#iT').val() !== '') {
                prop.type = $('#iT').val();
            }
            if ($('#iD').val() !== '') {
                prop.data = $('#iD').val();
            }
            if ($('#iQuestionImage').val() !== '') {
                prop.questionImage = $('#iQuestionImage').val();
            }
            if ($('#iAnswerImage').val() !== '') {
                prop.answerImage = $('#iAnswerImage').val();
            }

            Questions.update(checkQ[0]._id, { $set: prop }, function (error) {
                if (error) {
                    alert(error.reason);
                } else {
                    console.log('update');
                }
            });
        }
      
      $('#iQ').val('');
      $('#iA').val('');
      $('#iH').val('');
      $('#iC').val('');

      $('#numberInPackage').text('В текущем пакете ' + Questions.find({ data: prop.data }).fetch().length);
    },
    'click #bDelete': function () {
        let num = parseInt($('#iN').val());
        console.log(num);

        let checkQ = Questions.find({ numberRandom: num }).fetch(); 
        let date = checkQ[0].data;
        console.log(checkQ);
        $('#numberInPackage').text('В текущем пакете ' + Questions.find({ data: date }).fetch().length);

        if (checkQ.length === 1) {
            Questions.remove(checkQ[0]._id);
            console.log('delete');
        }
        $('#iN').val('');
        $('#iQ').val('');
        $('#iA').val('');
        $('#iH').val('');
        $('#iC').val('');
        
    },

    //OneFour
    'click #bInput14': function () {
        let num = parseInt($('#iN14').val());
        console.log(num);

        let checkQ = OneFour.find({ numberRandom: num }).fetch();

        console.log(checkQ);

        let prop = {};

        if (checkQ.length === 0) {
            prop.question = $('#iQ14').val();
            prop.answerA = $('#iA14').val();
            prop.answerB = $('#iB14').val();
            prop.answerC = $('#iC14').val();
            prop.answerD = $('#iD14').val();
            prop.answerCorrect = $('#iAns14').val();
            prop.data = $('#iDate14').val();
            prop.numberRandom = getRandomInt(0, 1000000);

            OneFour.insert(prop);
            console.log(prop);
        }
        else {
            if ($('#iQ14').val() !== '') {
                prop.question = $('#iQ14').val();
            }
            if ($('#iA14').val() !== '') {
                prop.answerA = $('#iA14').val();
            }
            if ($('#iB14').val() !== '') {
                prop.answerB = $('#iB14').val();
            }
            if ($('#iC14').val() !== '') {
                prop.answerC = $('#iC14').val();
            }
            if ($('#iD14').val() !== '') {
                prop.answerD = $('#iD14').val();
            }
            if ($('#iAns14').val() !== '') {
                prop.answerCorrect = $('#iAns14').val();
            }
            if ($('#iDate14').val() !== '') {
                prop.data = $('#iDate14').val();
            }

            OneFour.update(checkQ[0]._id, { $set: prop }, function (error) {
                if (error) {
                    alert(error.reason);
                } else {
                    console.log('update');
                }
            });
        }
    },
    'click #bDelete14': function () {
        let num = parseInt($('#iN14').val());
        console.log(num);

        let checkQ = OneFour.find({ numberRandom: num }).fetch();

        console.log(checkQ);
        if (checkQ.length === 1) {
            OneFour.remove(checkQ[0]._id);
            console.log('delete');
        }
    },

    //simbiots
    'click #bInputSimbiot': function () {
        let prop = {};

        prop.first = $('#iFirst').val();
        prop.second = $('#iSecond').val();
        prop.data = $('#iDateSimb').val();
        prop.numberRandom = getRandomInt(0, 1000000);
        let num = parseInt($('#iNum').val());
        prop.num = num;

        //   let res = prop.first + prop.second.substr(num);

        prop.result = $('#iAnsSimb').val();
        ;
        Simbiots.insert(prop);
    },
    'click #bDeleteSimbiot': function () {
        let num = parseInt($('#iNSimbiot').val());
        console.log(num);

        let checkQ = Simbiots.find({ numberRandom: num }).fetch();

        console.log(checkQ);
        if (checkQ.length === 1) {
            Simbiots.remove(checkQ[0]._id);
            console.log('delete');
        }
    },

    //stat
    'click #bStat': function () {
        $('#divStat').toggle();
        if ($('#divStat').attr('hide', false)) {
            $('#bStat').addClass("button button--aylen button--text-thick button--border-medium button--round-s");
            $('#bSimb').removeClass("button button--aylen button--text-thick button--border-medium button--round-s");
            $('#bQue').removeClass("button button--aylen button--text-thick button--border-medium button--round-s");
        }
    },
    'click #bQue': function () {
        $('#divQue').toggle();
        if ($('#divQue').attr('hide', false)) {
            $('#bQue').addClass("button button--aylen button--text-thick button--border-medium button--round-s");
            $('#bStat').removeClass("button button--aylen button--text-thick button--border-medium button--round-s");
            $('#bSimb').removeClass("button button--aylen button--text-thick button--border-medium button--round-s");
        }
    },
    'click #bSimb': function () {
        $('#divSimb').toggle();
        if ($('#divSimb').attr('hide', false)) {
            $('#bSimb').addClass("button button--aylen button--text-thick button--border-medium button--round-s");
            $('#bStat').removeClass("button button--aylen button--text-thick button--border-medium button--round-s");
            $('#bQue').removeClass("button button--aylen button--text-thick button--border-medium button--round-s");
        }
        else {
            $('#bSimb').removeClass("button button--aylen button--text-thick button--border-medium button--round-s");
        }
    },

    'click #openAdmin14': function () {
        $('#enterAdmin14').toggle();
    },
    'click #openAdminSimbiots': function () {
        $('#enterAdminSimbiots').toggle();
    },
    'click #openAdminQue': function () {
        $('#enterAdminQue').toggle();
    }, 
    'change #shortT': function(){
        if($('#shortT').prop('checked')){ 
           shortTrain = 1;
        } else {
            shortTrain = 0;
        }  
    }
});


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




let item = 0;
