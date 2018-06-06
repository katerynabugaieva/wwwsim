Template.simbiots.events({
    'click #bSimbStart': function () {
        let arr = setSimbiots();
        let addEl;
        let first;
        let second
        let firstText;
        let secondText;
        let third;
        let thirdText;
        let inp;

        addEl = document.getElementById('divForSimbItem');
        for (let i = 0; i < arr.length; i++) {
            first = document.createElement('span');
            firstText = document.createTextNode(arr[i].first);

            second = document.createElement('span');
            secondText = document.createTextNode(arr[i].second);

            third = document.createElement('label');
            thirdText = document.createTextNode(arr[i].num);

            inp = document.createElement('input');

            first.appendChild(firstText);
            second.appendChild(secondText);
            third.appendChild(thirdText);

            addEl.appendChild(first);
            addEl.appendChild(second);
            addEl.appendChild(third);
            addEl.appendChild(inp);
        }
        console.log('inpArr');
    },

    'click #bSimbSubmit': function () {
        let arr = setSimbiotsAnsw();
        let addEl;
        let first;
        let second
        let firstText;
        let secondText;
        let third;
        let thirdText;
        let inp;
        let inpText;

;
        addEl = document.getElementById('divForSimbItem');
        for (let i = 0; i < arr.length; i++) {
            first = document.createElement('span');
            firstText = document.createTextNode(arr[i].first);

            second = document.createElement('span');
            secondText = document.createTextNode(arr[i].second);

            third = document.createElement('label');
            thirdText = document.createTextNode(arr[i].num);

            inp = document.createElement('span');
            inpText = document.createTextNode(arr[i].res);

            first.appendChild(firstText);
            second.appendChild(secondText);
            third.appendChild(thirdText);
            inp.appendChild(inpText);

            addEl.appendChild(first);
            addEl.appendChild(second);
            addEl.appendChild(third);
            addEl.appendChild(inp);
        }



    }
});

function setSimbiots() {
    let date = AdminData.find().fetch()[AdminData.find().fetch().length - 1].date;

    let collQ = Simbiots.find({data: date}).fetch();

    let obj = [];
    for (let i = 0; i < collQ.length; i++) {
        let tech = {
            first: collQ[i].first,
            second: collQ[i].second,
            num: collQ[i].num
        }
        obj.push(tech);
    }
    console.log(obj);
    return obj;
}


function setSimbiotsAnsw() {
    let date = AdminData.find().fetch()[AdminData.find().fetch().length - 1].date;

    let collQ = Simbiots.find({data: date}).fetch();

    let obj = [];
    for (let i = 0; i < collQ.length; i++) {
        let tech = {
            first: collQ[i].first,
            second: collQ[i].second,
            num: collQ[i].num,
            res: collQ[i].result
        }
        obj.push(tech);
    }
    console.log(obj);
    return obj;
}
