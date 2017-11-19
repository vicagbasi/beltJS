const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  triviaResults: [{ type: Schema.Types.ObjectId, ref: 'TriviaResult'}]
}, {timestamps: true});

mongoose.model('User', UserSchema)
