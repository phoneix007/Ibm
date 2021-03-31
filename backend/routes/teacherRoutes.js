const express = require('express')
const { getTeacherCohort } = require('../controllers/teacherController.js')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/cohort').post(getTeacherCohort)

module.exports = router