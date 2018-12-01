const mongoose= require('mongoose');
const Schema  = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;
const UsersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true
  },
  venues: [ObjectId]
});

var UsersModel = mongoose.model('Users', UsersSchema, 'users');

module.exports = UsersModel;