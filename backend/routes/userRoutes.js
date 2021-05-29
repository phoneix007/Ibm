const express = require('express')
const { getUsers } = require('../controllers/userController.js')
// const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/login', getUsers)
// router.route('/profile').get(protect, getUserProfile)

module.exports = router