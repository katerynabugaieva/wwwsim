import Tabular from 'meteor/aldeed:tabular';
import { Template } from 'meteor/templating';
//import moment from 'moment';
import { Meteor } from 'meteor/meteor';

DataTables = {};

DataTables.Statistic = new Tabular.Table({
    name: "Statistic",
    collection: Statistic,
    columns: [
        // {data: "number", title: "#"},
        // {data: '_id', title: 'id'},
        {data: 'numberRandom', title: '№ вопроса'},
        {data: "question", title: "Вопрос"},
        {data: "result", title: "Взяли/Не взяли"},
        {data: "answer", title: "Ответили"},
        {data: 'correctAnswer', title: 'Правильный ответ'},
        {data: "data", title: "data"},
        {data: 'team', title: 'Команда'}
    ]
});


Meteor.isClient && Template.registerHelper('DataTables', DataTables);