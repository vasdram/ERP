const {
  v1: uuidv1
} = require('uuid');
const path = require('path')
const {
  Router
} = require('express');
const convert = require('../convert');
const formidable = require('formidable');
const router = new Router();
const auth = require('../middleware/auth.middleware')
const Report = require('../models/Report')


var cors = require('cors')

let reportItem = {
  "Номер": "164",
  "Дата": "06.08.2020",
  "Сумма": "524970",
  "ПлательщикСчет": "40702810455000073024",
  "ДатаСписано": "",
  "Плательщик": "ООО ЧИПСЕТ",
  "ПлательщикИНН": "7814766020",
  "ПлательщикКПП": "781401001",
  "ПлательщикРасчСчет": "40702810455000073024",
  "ПлательщикБанк1": "СЕВЕРО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК",
  "ПлательщикБИК": "044030653",
  "ПлательщикКорсчет": "30101810500000000653",
  "ПолучательСчет": "40702810163000000185",
  "ДатаПоступило": "06.08.2020",
  "Получатель": "ООО ТДИ 2008",
  "ПолучательИНН": "6950081665",
  "ПолучательКПП": "695201001",
  "ПолучательРасчСчет": "40702810163000000185",
  "ПолучательБанк1": "Отделение N8607 Сбербанка России",
  "ПолучательБИК": "042809679",
  "ПолучательКорсчет": "30101810700000000679",
  "ВидПлатежа": "электронно",
  "ВидОплаты": "01",
  "Код": "",
  "СтатусСоставителя": "",
  "ПоказательКБК": "",
  "ОКАТО": "",
  "ПоказательОснования": "",
  "ПоказательПериода": "",
  "ПоказательНомера": "",
  "ПоказательДаты": "",
  "ПоказательТипа": "",
  "Очередность": "5",
  "НазначениеПлатежа": "Оплата по договору №29-06/20ДП_ЭК от 29.06.2020 и счету № 8444 от 06.0..."
}

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
      date: new Date(),
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

    res.json(report)
  });

});


router.post('/delete', auth, async (req, res) => {
  const del = await Report.findByIdAndDelete(req.body.id)
  console.log(req.body.id);
  res.json({"message": "table delete", "tableId": del['_id']})
})

router.post('/addReport', auth, async (req, res) => {
  let data
  reportItem['Номер'] = req.body.number;
  reportItem['ВсегоПоступило'] = req.body.coming;
  reportItem['Плательщик'] = req.body.contractor;
  reportItem['ВсегоСписано'] = req.body.consumption;
  reportItem['НазначениеПлатежа'] = req.body.paymentDescription;

  await Report.findByIdAndUpdate(
  req.body.id, 
  {$push: {reports: reportItem}},
  {safe: true, upsert: true},
  function(err, upd) {
    if(err) {
    console.log(err);
    } else {
      data = upd
    }
  })

  // data[0].reports.push(reportItem);
  // data.update();
  res.json(data)
})


router.get('/', auth, async (req, res) => {
  try {
    const reports = await Report.find({
      owner: req.user.userId
    })
    res.json(reports)
  } catch (e) {
    res.status(500).json({
      message: 'Что-то пошло не так, попробуйте снова'
    })
  }
})
module.exports = router;