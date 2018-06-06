Template.clock.events({
    'click #start': function () {
        $('#pInfo').text('');

        timer2();

        soundClick();
        var count = $(('#count'));
        $({Counter: 0}).animate({Counter: count.text()}, {
            duration: 60000,
            easing: 'linear',
            step: function () {
                if (Math.ceil(this.Counter) === 5) {
                    //if (Math.ceil(this.Counter) === 3){
                    //soundClick();
                   // soundClickShort();
                   // countFrom10();
                }
                count.text(60 - Math.ceil(this.Counter));
            }
        });
        soundClickStop();
        soundClickShort();

        var s = Snap('#animated');
        var progress = s.select('#progress');

        progress.attr({strokeDasharray: '0, 251.2'});
        Snap.animate(0, 251.2, function (value) {
            progress.attr({'stroke-dasharray': value + ',251.2'});
        }, 60000);
    },

    'click #timer2': function(){
        $('#pInfo').text('');
        
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

// function soundClickShort() {
//     var audio = new Audio();
//     audio.src = 'beep-07.mp3';
//     audio.autoplay = true;
// }

// function countFrom10() {
//     let num = 10;
//     var timerId = setInterval(function () {
//         $('#hCount').text(num--);

//     }, 1000);
//     setTimeout(function () {
//         soundClickShort();
//         //soundClick()
//         clearInterval(timerId);
//     }, 11000);
// }

function soundClickStop(){
    setTimeout(function () {
        soundClick();
    }, 60000);
}

function soundClickShort(){
    setTimeout(function () {
        soundClick();
    }, 70000);
}





function timer2(){
let num = 59;
let timerId = setInterval(function() {
    $('#label2').text(num--);
}, 1000);
setTimeout(function(){
    clearInterval(timerId);
}, 70000); 



    
}