const {Schema, model, Types} = require('mongoose')

// const schema = new Schema({
//   number: {type: Schema.Types.Mixed, required: true, unique: false},
//   date: {type: Schema.Types.Mixed, required: true,  unique: false},
//   sum: {type: Schema.Types.Mixed, required: true,  unique: false},
//   payeraccount: {type: Schema.Types.Mixed, required: true,  unique: false},
//   payer:{type: Schema.Types.Mixed, required: true,  unique: false},
//   payerINN:{type: Schema.Types.Mixed, required: true,  unique: false},
//   payerKPP:{type: Schema.Types.Mixed, required: true,  unique: false},
//   payerRaccount:{type: Schema.Types.Mixed, required: true,  unique: false},
//   payerBank1:{type: Schema.Types.Mixed, required: true,  unique: false},
//   payerBIK:{type: Schema.Types.Mixed, required: true,  unique: false},
//   payerKaccount:{type: Schema.Types.Mixed, required: true,  unique: false},
//   beneficiaryaccount:{type: Schema.Types.Mixed, required: true,  unique: false},
//   dateSubmitted:{type: Schema.Types.Mixed, required: true,  unique: false},
//   beneficiary:{type: Schema.Types.Mixed, required: true,  unique: false},
//   beneficiaryINN:{type: Schema.Types.Mixed, required: true,  unique: false},
//   beneficiaryKPP:{type: Schema.Types.Mixed, required: true,  unique: false},
//   beneficiaryRaccount:{type: Schema.Types.Mixed, required: true,  unique: false},
//   beneficiaryBank1:{type: Schema.Types.Mixed, required: true,  unique: false},
//   beneficiaryBIK:{type: Schema.Types.Mixed, required: true,  unique: false},
//   beneficiaryKaccount:{type: Schema.Types.Mixed, required: true,  unique: false},
//   paymentType:{type: Schema.Types.Mixed, required: false,  unique: false},
//   typeOfpayment:{type: Schema.Types.Mixed, required: false,  unique: false},
//   code:{type: Schema.Types.Mixed, required: false,  unique: false},
//   statusAutor:{type: Schema.Types.Mixed, required: false,  unique: false},
//   indicatorKBK:{type: Schema.Types.Mixed, required: false,  unique: false},
//   okato:{type: Schema.Types.Mixed, required: false,  unique: false},
//   indicatorBasis:{type: Schema.Types.Mixed, required: false,  unique: false},
//   indicatorPeriod:{type: Schema.Types.Mixed, required: false,  unique: false},
//   // indicatorNumber:{type: Schema.Types.Mixed, required: false,  unique: false},
//   // indicatorDate:{type: Schema.Types.Mixed, required: false,  unique: false},
//   // priority:{type: Schema.Types.Mixed, required: false,  unique: false},
//   // purposeofpayment:{type: Schema.Types.Mixed, required: false,  unique: false},


// })

const schema = new Schema({
  reports:  {type: Schema.Types.Mixed, required: true, unique: false},
  owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Report', schema)
