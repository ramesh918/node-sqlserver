const express = require('express')
const router = express.Router()
const user = require('../controllers/login')
const insertData  = require("../controllers/insert")
const editData = require("../controllers/update")
const getData = require("../controllers/retrive")

router.route('/login').post(user.login)
router.route('/addbook').post(user.isAuthenticated, insertData)
router.route('/editbook').post(user.isAuthenticated, editData)
router.route('/getbooks').post(user.isAuthenticated, getData)



module.exports = router