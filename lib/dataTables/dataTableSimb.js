/**
 * Created by 1000g_2 on 26.10.17.
 */
import Tabular from 'meteor/aldeed:tabular';
import { Template } from 'meteor/templating';

DataTables2 = {};

DataTables2.Simbiots = new Tabular.Table({
    name: "Simbiots",
    collection: Simbiots,
    columns: [
        {data: "numberRandom", title: "#"},
        {data: "first", title: "1"},
        {data: "second", title: "2"},
        {data:'result', title: 'result'},
        {data: "num", title: "общее количество букв"},
        {data: 'team', title: 'Команда'}
    ]
});


Meteor.isClient && Template.registerHelper('DataTables2', DataTables2);