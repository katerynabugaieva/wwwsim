number = 0;

Template.post.helpers({
    game: function () {
      //  console.log(number);
        if (number < 5)
            return true;
        else {
            return false;
        }
    },
    bonus: function () {

    },
    // admin: function(){
    //     let admin = AdminData.find().fetch()[AdminData.find().fetch().length - 1];
    //     if(admin.shortTrain === 1){
    //         console.log('short')
    //         return true;
    //     } else{
    //         console.log('long')
    //         return false;
    //     }
    //    // console.log(admin)
    // }
})

Template.post.events({
    'click #bPrev': function () {
        let date = AdminData.find().fetch()[AdminData.find().fetch().length - 1].date;
        if (number === 1) {
            number = 1;
        } else {
            number--;
        }

        let collQ = Questions.find({ data: date }).fetch();

        $('#sNumber').text('Вопрос № ' + number + ":");

        $('#sQ').text(collQ[number - 1].question);

        $('#sHint').text('');
        $('#sAnswer').text('');
        $('#sComment').text('');
        $('#pInfo').text('');
        $('#imgAnswer').hide();
    },

    'click #bNext': function () {
        if ($('#bNext').hasClass('disabledClass')) {
            Bert.alert("Сперва ответьте на вопрос", 'danger', 'growl-top-right');
        } else {
            let date = AdminData.find().fetch()[AdminData.find().fetch().length - 1].date;

            let collQ = Questions.find({ data: date }).fetch();
            //    console.log(collQ);
            if (number === (collQ.length)) {
                number = collQ.length;
            }
            else {
                number++;
            }
            $('#sNumber').text('Вопрос № ' + number);

            $('#sQ').text(collQ[number - 1].question);
            $('#sHint').text('');
            $('#sAnswer').text('');
            $('#sComment').text('');
            $('#pInfo').text('');
            $('#bNext').addClass('disabledClass');
           // console.log(number)
            $('#imgAnswer').hide();
            


        }
    },

    'click #bHint': function () {
        let date = AdminData.find().fetch()[AdminData.find().fetch().length - 1].date;
        let collQ = Questions.find({ data: date }).fetch();

        let hint = collQ[number - 1].hint;

        $('#sHint').text(hint);
    },


    'click #bAnswer': function () {
        let date = AdminData.find().fetch()[AdminData.find().fetch().length - 1].date;
        let collQ = Questions.find({ data: date }).fetch();

        $('#sAnswer').text("Ответ: " + collQ[number - 1].answer);
        $('#sComment').text("Комментарий: " + collQ[number - 1].comment);

        if (collQ[number - 1].answerImage) {
            console.log(number);
            $('#imgAnswer').show();
            switch (number) {
                case 3:
                    $('#imgAnswer').attr('src', arrayForImagesDecember[0])
                    break;
                case 4:
                    $('#imgAnswer').attr('src', arrayForImagesDecember[1]);
                    break;
                case 5:
                    $('#imgAnswer').attr('src', arrayForImagesDecember[2]);
                    break;
                case 6:
                    $('#imgAnswer').attr('src', arrayForImagesDecember[3]);
                    break;
                case 8:
                    $('#imgAnswer').attr('src', arrayForImagesDecember[4]);
                    break;
                case 9:
                    $('#imgAnswer').attr('src', arrayForImagesDecember[5]);
                    break;
                case 11:
                    $('#imgAnswer').attr('src', arrayForImagesDecember[6]);
                    break;
            }
        } else {
            $('#imgAnswer').hide();
        }

    },

    'click #bYes': function () {
        let date = AdminData.find().fetch()[AdminData.find().fetch().length - 1].date;
        $('#pInfo').text('Принято');
        let collQ = Questions.find({ data: date }).fetch();

        let currentUser = Customers.findOne({ id: Meteor.userId() });

        Statistic.insert({
            number: number,
            result: 1,
            answer: collQ[number - 1].answer,
            correctAnswer: collQ[number - 1].answer,
            question: collQ[number - 1].question,
            type: collQ[number - 1].type,
            played: 1,
            data: date,
            questionId: collQ[number - 1]._id,
            team: currentUser.username,
            userId: Meteor.userId(),
               numberRandom: collQ[number-1].numberRandom
        });
        
        chechStat(number)
    },

    'click #bNo': function () {
        $('#iWrongAnswer').show();
        $('#bSubmit').show();
    },

    'click #bSubmit': function () {
        let date = AdminData.find().fetch()[AdminData.find().fetch().length - 1].date;
        let collQ = Questions.find({ data: date }).fetch();
        let currentUser = Customers.findOne({ id: Meteor.userId() });

        $('#pInfo').text('Принято');
        Statistic.insert({
            number: number,
            result: 0,
            answer: $('#iWrongAnswer').val(),
            correctAnswer: collQ[number - 1].answer,
            question: collQ[number - 1].question,
            type: collQ[number - 1].type,
            played: 1,
            data: date,
            questionId: collQ[number - 1]._id,
            team: currentUser.username,
            userId: Meteor.userId(),
               numberRandom: collQ[number-1].numberRandom
        });
        chechStat(number)
    }
});




function chechStat(num) {
    let date = AdminData.find().fetch()[AdminData.find().fetch().length - 1].date;
    let collQ = Questions.find({ data: date }).fetch();

    let currentStat = Statistic.find().fetch();
    if (currentStat[currentStat.length - 1].number === num) {
        $('#bNext').removeClass('disabledClass');
    } else {
        console.log(num);
    }


}




let arrayForImagesDecember = [
    './december/waxxx.png',
    './december/milfteen.png',
    './december/starwars.png',
    './december/babka.png',
    './december/houseofcard.png',
    './december/may.png',
    './december/georgy.png',
]