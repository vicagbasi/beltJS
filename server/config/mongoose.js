const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');


mongoose.connect('mongodb://localhost/trivia', { useMongoClient:true });
mongoose.Promise = global.Promise

const models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach((file)=>{
  if(file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
  }
});
