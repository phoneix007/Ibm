const express = require('express')
const { getStudentqna,getStudentCourses, getStudentSessionPlans, getStudentSections, getContent, markContentStatus, getContentStatus } = require('../controllers/studentController.js')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()


router.route('/courses').post(protect, getStudentCourses)
router.route('/sessions').post(protect, getStudentSessionPlans)
router.route('/sections').post(protect, getStudentSections)
router.route('/content').post(protect, getContent)
router.route('/markcontentstatus').post(protect, markContentStatus)
router.route('/getcontentstatus').post(protect, getContentStatus)
router.route('/qna').post(protect, getStudentqna)
module.exports = router