/**
 * Created by 1000geeks on 24.04.17.
 */
Meteor.methods({

    reset: function () {

        Meteor.users.remove({});
            Questions.remove({});
            Statistic.remove({});
            AdminData.remove({});
        console.log("reset!!!");
        console.log(Meteor.users.find().count());

        if (Meteor.isServer) {
            if (Meteor.users.find().count() === 0) {
                userId = Accounts.createUser({
                    email: 'sonnensmile@gmail.com',
                    password: '194657535',
                    role: 'admin'
                });
            }

            console.log(userId);
        }
    }
    ,

    resetCustomers: function () {
        Customers.remove({});

        Meteor.users.remove({});

        console.log('customers');

        if (Meteor.isServer) {
            if (Meteor.users.find().count() === 0 && Customers.find().count() === 0) {
              
                userId = Accounts.createUser({
                    email: 'sonnensmile@gmail.com',
                    password: '194657535',
                });

                Meteor.users.upsert(
                    {_id: userId},
                    {
                        $set: {
                            profile: {
                                roles: ['admin'],
                            }
                        }
                    }
                );

                userId = Accounts.createUser({
                    email: 'test@gmail.com',
                    password: '123456',
                });

                userId = Accounts.createUser({
                    email: 'it-banda@gmail.com',
                    password: '1030221726',
                });
                
            }

            console.log(userId);
        }

    },

    resetStatistic: function () {
        Statistic.remove({});
        console.log('resetStat');
    }
    ,
    resetQuestions: function () {
        Questions.remove({});
        console.log('resetQue');
    }
    ,
    resetAdminData: function () {
        AdminData.remove({});
        console.log('resetA');
    },

    resetOneFour:function(){
        OneFour.remove({});
        console.log('reset one-four');
    },

    resetSimbiots: function(){
        Simbiots.remove({});
        console.log(' remove simbiots');
},

    updateDate: function (dateFix, dateSet) {
        let updateInfo = {};
        updateInfo.data = dateSet;

        let upColl = Questions.find({data: dateFix}).fetch();

        if (upColl) {
            for (let i = 0; i < upColl.length; i++) {
                Questions.update(upColl[i]._id, {$set: updateInfo}), function () {
                    console.log('update');
                }
            }
        }
    },

    updateId: function (dateFix) {
        let updateInfo = {};

        let upColl = Questions.find({data: dateFix}).fetch();

        if (upColl) {
            for (let i = 0; i < upColl.length; i++) {
                Questions.update(upColl[i]._id, {$set: updateInfo.numberRandom=i}), function () {
                    console.log('update');
                }
            }
        }
    },

    setAdminData: function(data){
        let forTr = {};
       // forTr.text = $('#iPreviewText').val();
       // forTr.date = $('#iDate').val();
forTr.date = data;
        //number = 0;

        //$('#lDate').text(forTr.date);
        AdminData.insert(forTr);
    }
})
;