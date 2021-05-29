import {
	STUDENT_COHORT_REQUEST,
	STUDENT_COHORT_SUCCESS,
	STUDENT_COHORT_FAIL,
	STUDENT_COURSES_REQUEST,
	STUDENT_COURSES_SUCCESS,
	STUDENT_COURSES_FAIL,
	STUDENT_SESSIONS_REQUEST,
	STUDENT_SESSIONS_SUCCESS,
	STUDENT_SESSIONS_FAIL,
	STUDENT_SESSION_SECTIONS_REQUEST,
	STUDENT_SESSION_SECTIONS_SUCCESS,
	STUDENT_SESSION_SECTIONS_FAIL,
	STUDENT_ASSESSMENTS_SUCCESS,
	STUDENT_ASSESSMENTS_REQUEST,
	STUDENT_ASSESSMENTS_FAIL,
} from "../constants/studentConstants";

// export const studentCohortReducer = (state={ StudentInfo: [] }, action) => {
//     switch(action.type) {
//         case STUDENT_COHORT_REQUEST:
//             return { loading: true, StudentInfo: [] }
//         case STUDENT_COHORT_SUCCESS:
//             return { loading: false, StudentInfo: action.payload }
//         case STUDENT_COHORT_FAIL:
//             return { loading: false, error: action.payload }
//         case STUDENT_RESET:
//             return []
//         default:
//             return state
//     }
// }

export const studentCoursesReducer = (state = { CoursesInfo: [] }, action) => {
	switch (action.type) {
		case STUDENT_COURSES_REQUEST:
			return { loading: true, CoursesInfo: [] };
		case STUDENT_COURSES_SUCCESS:
			return { loading: false, CoursesInfo: action.payload };
		case STUDENT_COURSES_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const studentSessionsReducer = (state = { SessionInfo: [] }, action) => {
	switch (action.type) {
		case STUDENT_SESSIONS_REQUEST:
			return { loading: true, sessionInfo: [] };
		case STUDENT_SESSIONS_SUCCESS:
			return { loading: false, sessionInfo: action.payload };
		case STUDENT_SESSIONS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const studentSessionSectionReducer = (
	state = { SessionSectionInfo: [] },
	action
) => {
	switch (action.type) {
		case STUDENT_SESSION_SECTIONS_REQUEST:
			return { loading: true, SessionSectionInfo: [] };
		case STUDENT_SESSION_SECTIONS_SUCCESS:
			return { loading: false, SessionSectionInfo: action.payload };
		case STUDENT_SESSION_SECTIONS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const studentAssessmentsReducer = (
	state = { AssessmentsInfo: [] },
	action
) => {
	switch (action.type) {
		case STUDENT_ASSESSMENTS_REQUEST:
			return { loading: true, AssessmentsInfo: [] };
		case STUDENT_ASSESSMENTS_SUCCESS:
			return { loading: false, AssessmentsInfo: action.payload };
		case STUDENT_ASSESSMENTS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
