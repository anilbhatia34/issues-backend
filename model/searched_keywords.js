let mongoose = require('mongoose');
mongoose.set('debug',true);
let Schema=mongoose.Schema;

let schema=new Schema({
	data :String
},{collection:'keyword',versionKey: false});

let searched_keywords= mongoose.model('keyword',schema);

module.exports =  searched_keywords;