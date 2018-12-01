const mongoose= require('mongoose');
const Schema  = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

const BookingsSchema = new Schema({
  space: {
    type: ObjectId,
    required: true
  },
  start_time: {
    type: Date,
    required: true
  },
  end_time: {
    type: Date,
    required: true,
  },
  price: Number,
  number_of_people: {
    type: Number,
    required: true,
  },
  contact: {
    type: ObjectId,
    required: true
  },
  status: {
    type: String,
    enum: ['Accepted', 'Rejected', 'None']
  },
  message: [String],
  private: Boolean,
  has_warning: Boolean
});

var BookingsModel = mongoose.model('Bookings', SpacesSchema, 'bookings');

module.exports = BookingsModel;

