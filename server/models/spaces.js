const mongoose= require('mongoose');
const Schema  = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

const SpacesSchema = new Schema({
  venue: {
    type: ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true,
  }
});

var SpacesModel = mongoose.model('Spaces', SpacesSchema, 'spaces');

module.exports = SpacesModel;

