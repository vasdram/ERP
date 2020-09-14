const path = require('path')
const { Router } = require('express');
const convert = require('../convert');
const formidable = require('formidable');
const router = new Router();
const User = require('../models/User');
const auth = require('../middleware/auth.middleware')



router.post('/getUserInfo', async(req,res) => {
  
  
  const { email } = req.body
  try {
    const user = await User.findOne({ email })
    res.json({user: {fname: user.fname, lname: user.lname, company: user.company, email: user.email, balance: user.balance}})
  } catch(e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})


module.exports = router