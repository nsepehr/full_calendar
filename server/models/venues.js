const mongoose= require('mongoose');
const Schema  = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

const VenuesSchema = new Schema({
  owner: {
    type: ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  hours: Object,
  time_zone: String,
  buffer_times: Number,
  rooms: [ObjectId]
});

var VenuesModel = mongoose.model('Venues', VenuesSchema, 'venues');

module.exports = VenuesModel;

