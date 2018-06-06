
Template.onefourView.events({
    'click #bPrev14': function () {
        console.log('q');
        let date = AdminData.find().fetch()[AdminData.find().fetch().length - 1].date;

        if (number14 === 1) {
            number14 = 1;
        } else {
            number14--;
        }

        let collQ = OneFour.find({data: date}).fetch();
        console.log(collQ);

        $('#sNumber14').text('Вопрос № ' + number14 + ":");

        $('#sQ14').text(collQ[number14 - 1].question);

        $('#saA').text(collQ[number14 - 1].answerA);
        $('#saB').text(collQ[number14 - 1].answerB);
        $('#saC').text(collQ[number14 - 1].answerC);
        $('#saD').text(collQ[number14 - 1].answerD);
    },

    'click #bNext14': function () {
        let date = AdminData.find().fetch()[AdminData.find().fetch().length - 1].date;

        let collQ = OneFour.find({data: date}).fetch();

        if (number14 === (collQ.length)) {
            number14 = collQ.length;
        }
        else {
            number14++;
        }
        $('#sNumber14').text('Вопрос № ' + number14 + ":");

        $('#sQ14').text(collQ[number14 - 1].question);

        $('#saA').text(collQ[number14 - 1].answerA);
        $('#saB').text(collQ[number14 - 1].answerB);
        $('#saC').text(collQ[number14 - 1].answerC);
        $('#saD').text(collQ[number14 - 1].answerD);
    },

    'click #answer14': function () {

        let date = AdminData.find().fetch()[AdminData.find().fetch().length - 1].date;
        let collQ = OneFour.find({data: date}).fetch();
        $('#scorrectAnswer').text("Ответ: " + collQ[number14 - 1].answerCorrect);

        let ans = $('input[name=answer14]:checked').val();


        console.log(ans);
        console.log(collQ[number14 - 1].answerCorrect);
        if (ans === collQ[number14 - 1].answerCorrect) {
            console.log('da');
        }
        else {
            console.log('net');
        }


        console.log(number14);
    }
});

number14 = 0;