const questions = require('./../controllers/questions');
const results = require('./../controllers/results');
const users = require('./../controllers/users');

module.exports = (app)=>{
  app.post('/logName', users.logName)
  app.post('/user/login', users.login);
  app.post('/user/logoff', users.logoff);
  app.get('/', results.all);
  app.get('/trivia-time', questions.start);
  app.post('/newQuestion', questions.addNew);
}
