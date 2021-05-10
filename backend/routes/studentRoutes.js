const express = require("express");
const {
	getStudentAssessments,
	getStudentCourses,
	getStudentSessionPlans,
	getStudentSections,
	getContent,
	getStudentqna,
	getQuizzQuestions,
	
} = require("../controllers/studentController.js");


const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/courses").post(protect, getStudentCourses);
router.route("/sessions").post(protect, getStudentSessionPlans);
router.route("/sections").post(protect, getStudentSections);
router.route("/content").post(protect, getContent);
router.route("/qna").post(protect, getStudentqna);
router.route("/studentassessment").post(getStudentAssessments);
router.route("/startquizz").post(protect, getQuizzQuestions);



module.exports = router;