const express = require('express')
const { getTeacherCohort, getTeacherCourses } = require('../controllers/teacherController.js')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/cohort').post(getTeacherCohort)
router.route('/courses').post(getTeacherCourses)


module.exports = router