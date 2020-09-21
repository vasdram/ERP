const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    date: {type: Date, required: true},
    reports: {type: Schema.Types.Mixed, required: true, unique: false},
    owner: {type: Types.ObjectId, ref: 'User'}
  })
  
  module.exports = model('Cash', schema)