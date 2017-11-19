const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ResultSchema = new mongoose.Schema({
  _user: {type: Schema.Types.ObjectId, ref:'User'},
  score: Number,

})

mongoose.model('Result', ResultSchema)
