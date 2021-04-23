const express = require('express')
const {  getQNA,getStudentCourses, getStudentSessionPlans, getStudentSections, getContent } = require('../controllers/studentController.js')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()


router.route('/courses').post(getStudentCourses)
router.route('/sessions').post(getStudentSessionPlans)
router.route('/sections').post(getStudentSections)
router.route('/content').post(getContent)
router.route('/qna').post(getQNA)

module.exports = router