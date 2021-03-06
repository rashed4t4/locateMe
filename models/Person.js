var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PersonSchema = {
  
  fid:{
    type: String,
    trim: true,
    required: 'FB id required'
  },

  name: {
    type: String,
    trim: true,
    required: 'Name required'
  },
  
  long: {
    type: Number,
    required: 'Longitude required'
  },
  
  lat: {
    type: Number,
    required: 'Latitude required'
  },
  
  groups: [{ type: Schema.Types.ObjectId, ref: 'Group' }],

  created: {
    type: Date,
    default: Date.now
  }
}

var Person = mongoose.model('Person', PersonSchema, 'persons');
module.exports = Person;
