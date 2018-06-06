import Tabular from 'meteor/aldeed:tabular';
import { Template } from 'meteor/templating';

DataTables1 = {};

DataTables1.Questions = new Tabular.Table({
    name: "Questions",
    collection: Questions,
    columns: [
        {data: "numberRandom", title: "#"},
        {data: "question", title: "Вопрос"},
        {data: "hint", title: "hint"},
        {data: "answer", title: "Ответили"},
        {data: "comment", title: "comment"},
        {data: "type", title: "type"},
        {data: "data", title: "data"},
    ]
});


Meteor.isClient && Template.registerHelper('DataTables1', DataTables1);