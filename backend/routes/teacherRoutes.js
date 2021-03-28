const express = require('express')
const { getTeacherCohort, getTeacherCourses, getTeacherSessionPlans, getTeacherSections, getContent } = require('../controllers/teacherController.js')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/cohort').post(getTeacherCohort)
router.route('/courses').post(getTeacherCourses)
router.route('/sessions').post(getTeacherSessionPlans)
router.route('/sections').post(getTeacherSections)
router.route('/content').post(getContent)


module.exports = router