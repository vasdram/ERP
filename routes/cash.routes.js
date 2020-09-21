const path = require('path')
const { Router } = require('express');
const convert = require('../convert');
const formidable = require('formidable');
const router = new Router();
const Cash = require('../models/Cash');
const auth = require('../middleware/auth.middleware')



router.get('/getCash', auth, async(req,res) => {
  try {
    const cash = await Cash.find({owner: req.user.userId})
   
    if(cash) {
      res.json(cash)  
    } else {
      res.json({"message": "Cash not found"})  
    }
  } catch(e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.post('/addCashReport', auth, async(req,res) => {
  const {typeOperation, category, sum, payName} = req.body

  let cash = await Cash.findOne({owner: req.user.userId})
  
  if(cash.length === 0) {
    
    cash = await new Cash(
      {
        date: new Date,
        reports: [
            {typeOperation, category, sum, payName}
        ],
        owner: req.user.userId
    })  
   
  } else {
    
   console.log(cash.reports);
    cash.reports = [...cash.reports , {typeOperation, category, sum, payName}]
  }
  
  await cash.save();
  res.json(cash)
})


module.exports = router