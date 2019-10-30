const express = require('express');
const routers = require('./routes');
const conectaMongodb =  require('./config/mongdb');
const router = express.Router
();

const app = express(); 
app.use('/',routers);
   conectaMongodb();

app.listen(3000, ()=> console.log('app Online'));
//npm install --save express