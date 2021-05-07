const express = require('express')
const { getUsers, authUsers } = require('../controllers/userController.js')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/login', getUsers)
router.route('/auth').post(protect, authUsers)

module.exports = router