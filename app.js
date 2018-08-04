import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import express from 'express';
import logger from 'morgan';
import path from 'path';
let fs =require ('fs');

let mongoose=require('mongoose');
let config=require('./config/config');
 let cors=require('cors');
 let schema=require('./model/searched_keywords');

let http = require('http');
import get_keyword from './routes/get_keyword';
import insert_keyword from './routes/insert_keyword';
import find_image from './routes/find_image';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

mongoose.connect(config.url);
mongoose.connection.on('connected',()=>{
	console.log("connected");
})


app.use(cors());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/get_keyword',get_keyword);
app.use('/insert_keyword',insert_keyword);
app.use('/find_image',find_image);
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

export default app;
