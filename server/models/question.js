const mongoose = require('mongoose');
const Schema = mongoose.Schema

const QuestionSchema = new mongoose.Schema({
  question: String,
  correct: String,
  fakeOne: String,
  fakeTwo: String,
}, { timestamps: true });

mongoose.model('Question', QuestionSchema)
