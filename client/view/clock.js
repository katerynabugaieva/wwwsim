let longness = 0;
Template.clock.helpers({
    longness: function(){
        let admin = AdminData.find().fetch()[AdminData.find().fetch().length - 1];
        console.log(admin)
        if (admin.shortTrain === 1){
        longness = 40;
            return longness;
        }else {
            longness = 60;
            return longness;
    }}
})
Template.clock.events({
    // 'click #start': function () {
       

    //     $('#pInfo').text('');

    //     timer2();

    //     soundClick();
    //     var count = $(('#count'));
    //     $({Counter: 0}).animate({Counter: count.text()}, {
    //         duration: 60000,
    //         easing: 'linear',
    //         step: function () {
    //             if (Math.ceil(this.Counter) === 5) {
    //                 //if (Math.ceil(this.Counter) === 3){
    //                 //soundClick();
    //                // soundClickShort();
    //                // countFrom10();
    //             }
    //             count.text(60 - Math.ceil(this.Counter));
    //         }
    //     });
    //     soundClickStop();
    //     soundClickShort();

    //     var s = Snap('#animated');
    //     var progress = s.select('#progress');

    //     progress.attr({strokeDasharray: '0, 251.2'});
    //     Snap.animate(0, 251.2, function (value) {
    //         progress.attr({'stroke-dasharray': value + ',251.2'});
    //     }, 60000);
    // },

    'click #timer2': function(){
        $('#pInfo').text('1');
                timer2();
                soundClick();
                soundClickStop();
                soundClickShort();
    }

});


function soundClick() {
    var audio = new Audio();
    audio.src = 'beep-01a.mp3';
    audio.autoplay = true;
}

function soundClickStop(){
    setTimeout(function () {
        soundClick();
    }, longness*1000 - 10000);
}

function soundClickShort(){
    setTimeout(function () {
        soundClick();
    }, (longness*1000+1000));
}


function timer2(){
    console.log('longness ' + longness);
let num = longness;
let timerId = setInterval(function() {
    $('#label2').text(num--);
}, 1000);
setTimeout(function(){
    clearInterval(timerId);
}, longness*1000+1000); 
}

