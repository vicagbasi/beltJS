const mongoose = require('mongoose');
const Question = mongoose.model('Question')

module.exports = {

  start: (request, res) => {
    console.log("===============TRIVIA TIME!=====================")
    Question.aggregate([{ $sample: { size: 3}}], (questions, error) => {
      if (questions) {
        res.json(questions);
      } else {
        res.send(error)
      }
    })
  },

  addNew: (request, res) => {
    console.log("==========CREATING BIKE============")
    console.log(request.body)
    const question = new Question(request.body);
    question.save((error) => {
      if(error) {
        res.send(error);
      } else {
        res.json(question);
      }
    })
  }
}
