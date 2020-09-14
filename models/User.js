const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  fname: {type: String, required: true},
  lname: {type: String, required: true},
  company: {type: String, required: true},
  balance: {type: Number, required: true},
  reports: [{ type: Types.ObjectId, ref: 'Report' }]
})

module.exports = model('User', schema)
