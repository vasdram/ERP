const path = require('path')
const { Router } = require('express');
const convert = require('../convert');
const formidable = require('formidable');
const router = new Router();
const auth = require('../middleware/auth.middleware')

router.post('userInfo', async(req,res) => {
  try {
    const user = await User.findOne({ email })
    res.json({user})
  } catch(e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})


module.exports = router