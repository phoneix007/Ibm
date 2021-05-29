import {
	TEACHER_COURSES_REQUEST,
	TEACHER_COURSES_SUCCESS,
	TEACHER_COURSES_FAIL,
	TEACHER_SESSIONS_REQUEST,
	TEACHER_SESSIONS_SUCCESS,
	TEACHER_SESSIONS_FAIL,
} from "../constants/teacherConstants";
import {
	STUDENT_ASSESSMENTS_SUCCESS,
	STUDENT_ASSESSMENTS_REQUEST,
	STUDENT_ASSESSMENTS_FAIL,
	STUDENT_QUIZZ_SUCCESS,
	STUDENT_QUIZZ_REQUEST,
	STUDENT_QUIZZ_FAIL
} from "../constants/studentConstants";
import axios from "axios";
import {
	FAQ_FAIL,
	FAQ_REQUEST,
	FAQ_SUCCESS,
} from "../constants/studentConstants";

export const coursesDetails = (st_id) => async (dispatch, getState) => {
	try {
		dispatch({ type: TEACHER_COURSES_REQUEST });
		const {
			userLogin: { userInfo, userRole },
		} = getState();

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${userInfo.token}`,
				role: `${userRole}`,
			},
		};

		const { data } = await axios.post(
			"/api/student/courses",
			{ st_id },
			config
		);
		dispatch({ type: TEACHER_COURSES_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: TEACHER_COURSES_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const studentsessionDetails = (co_id) => async (dispatch, getState) => {
	try {
		dispatch({ type: TEACHER_SESSIONS_REQUEST });
		const {
			userLogin: { userInfo, userRole },
		} = getState();

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${userInfo.token}`,
				role: `${userRole}`,
			},
		};

		const { data } = await axios.post(
			"/api/student/sessions",
			{ co_id },
			config
		);
		dispatch({ type: TEACHER_SESSIONS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: TEACHER_SESSIONS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
export const studentqna = (question) => async (dispatch, getState) => {
	try {
		dispatch({ type: FAQ_REQUEST });
		const {
			userLogin: { userInfo, userRole },
		} = getState();

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${userInfo.token}`,
				role: `${userRole}`,
			},
		};

		const { data } = await axios.post("/api/student/qna", { question }, config);
		dispatch({ type: FAQ_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: FAQ_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const studentassessmentDetails = (st_id) => async (
	dispatch,
	getState
) => {
	try {
		dispatch({ type: STUDENT_ASSESSMENTS_REQUEST });

		const config = {
			header: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.post(
			"/api/student/studentassessment",
			{ st_id },
			config
		);
		dispatch({ type: STUDENT_ASSESSMENTS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: STUDENT_ASSESSMENTS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const studentQuizz = () => async (
	dispatch,
	getState
) => {
	try {
		dispatch({ type: STUDENT_QUIZZ_REQUEST });

		const config = {
			header: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.post(
			"/api/student/startquizz",
			{  },
			config
		);
		dispatch({ type: STUDENT_QUIZZ_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: STUDENT_QUIZZ_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
