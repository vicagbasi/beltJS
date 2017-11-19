const mongoose = require('mongoose');
const User = mongoose.model('User')


module.exports = {

  logName: (request, res) => {
    console.log('==========LOG NAME========')
    console.log(`${request.body.name} is trying to log in`)
    request.session.name = request.body.name
    console.log(`${request.session.name} has successfully
    logged in`)

  },
  logOutName: (request, res) => {
    console.log("============LOGGING OUT==============")
    console.log(`${request.session.name} trying to log off`)

  },
  addNew: (request, res) => {
    console.log()
  }
  //
  // create: (request, res) => {
  //   console.log("==========CREATING USER============")
  //   console.log(request.body)
  //   const user = new User(request.body)
  //   user.save((error)=> {
  //     if(error) {
  //       res.send(error);
  //     } else {
  //       // ca access id here to put in session
  //       request.session.user_id = user._id;
  //       res.json(user);
  //     }
  //   })
  // },
  // auth: (request, res) => {
  //   console.log('=========AUTHENICATING USER=========')
  //   User.findOne({ email: request.body.email }, (user, error)=>{
  //     if(user){
  //       if(user.password === request.body.password){
  //         request.session.user_id = user.user_id
  //         res.json(user)
  //       } else {
  //         res.send('Invalid Login!!!')
  //       }
  //     }
  //     else{
  //       res.send("Email doesn't exist!!!")
  //     }
  //   })
  // },
}
