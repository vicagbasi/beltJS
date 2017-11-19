const mongoose = require('mongoose');
const Result = mongoose.model('Result');


module.exports = {
  addResult: (request, res) => {
    console.log('==============ADDING RESULT===============');
    console.log(request.body);
    const result = new Result(request.body);
    result.save((error) => {
      if(error) {
        res.send(error);
      } else {
        res.json(result);
      }
    })
  },
  all: (result, res) => {
    Result.find({}, (results, error)=>{
      if(results){
        res.json(results);
      } else {
        response.send(error);
      }
    })
  }
}
