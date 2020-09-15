const path = require('path')
const { Router } = require('express');
const convert = require('../convert');
const formidable = require('formidable');
const router = new Router();
const auth = require('../middleware/auth.middleware')
const Report = require('../models/Report')


var cors = require('cors')


router.use(cors())

// router.get('/get_table', (req, res) => {
//   res.json(arr)
// })


router.post('/upload', auth, (req, res, next) => {
  var form = new formidable.IncomingForm();
  let data = [];
  form.parse(req);
  form.on('fileBegin', function (name, file) {
    file.path = __dirname + '/uploads/' + file.name;
  });
  form.on('file', async function (name, file) {
 
      data = convert(file.name)
      const report = new Report({
        reports: data,
        owner: req.user.userId
      })
      // const report = new Report({ 
      //   number: data[0][0],
      //   date: data[1][1],
      //   sum: data[2][2],
      //   payeraccount: data[3],
      //   payer:data[4],
      //   payerINN:data[5],
      //   payerKPP:data[6],
      //   payerRaccount:data[7],
      //   payerBank1:data[8],
      //   payerBIK:data[9],
      //   payerKaccount:data[10],
      //   beneficiaryaccount:data[11],
      //   dateSubmitted:data[12],
      //   beneficiary:data[13],
      //   beneficiaryINN:data[14],
      //   beneficiaryKPP:data[15],
      //   beneficiaryRaccount:data[16],
      //   beneficiaryBank1:data[17],
      //   beneficiaryBIK:data[18],
      //   beneficiaryKaccount:data[19],
      //   paymentType:data[20],
      //   typeOfpayment:data[21],
      //   code:data[22],
      //   statusAutor:data[23],
      //   indicatorKBK:data[24],
      //   okato:data[25],
      //   indicatorBasis:data[26],
      //   indicatorPeriod:data[27],
      //   // indicatorNumber:data[0],
      //   // indicatorDate:data[0],
      //   // priority:data[0],
      //   // purposeofpayment:data[0],
      //  })



      await report.save()
    
      res.json(data)
  });
  
});


router.post('/addReport', auth, async (req, res) => {
  
})


router.get('/', auth, async (req, res) => {
try {
  const reports = await Report.find({ owner: req.user.userId })
  res.json(reports)
} catch (e) {
  res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
}
})
module.exports = router;