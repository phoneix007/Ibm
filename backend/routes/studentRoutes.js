const express = require('express')
const {  getStudentCourses, getStudentSessionPlans, getStudentSections, getContent } = require('../controllers/StudentController.js')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()


router.route('/courses').post(getStudentCourses)
router.route('/sessions').post(getStudentSessionPlans)
router.route('/sections').post(getStudentSections)
router.route('/content').post(getContent)


module.exports = router