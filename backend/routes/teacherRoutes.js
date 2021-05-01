const express = require('express')
const { getContentStatus,markSessionStatus,markContentStatus,getTeacherCohort, getTeacherCourses, getTeacherSessionPlans, getTeacherSections, getContent, getSessionStatus, unlockSession } = require('../controllers/teacherController.js')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/cohort').post(protect, getTeacherCohort)
router.route('/courses').post(protect, getTeacherCourses)
router.route('/sessions').post(protect, getTeacherSessionPlans)
router.route('/sections').post(protect, getTeacherSections)
router.route('/content').post(protect, getContent)
router.route('/getSessionStatus').post(protect, getSessionStatus)
router.route('/unlocksession').post(protect, unlockSession)
router.route('/markSessionStatus').post(protect, markSessionStatus)
router.route('/markContentStatus').post(protect, markContentStatus)
router.route('/getcontentstatus').post(protect, getContentStatus)





module.exports = router