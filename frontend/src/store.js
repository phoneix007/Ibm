import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userAuthReducer } from './reducers/userReducers'
import { teacherContentStatusReducer, teacherCohortReducer, teacherCoursesReducer, teacherSessionsReducer, teacherSessionSectionReducer, teacherTempReducer, teacherSessionStatusReducer } from './reducers/teacherReducers'
import { contentReducer } from './reducers/contentReducer'
import { studentFAQReducer } from './reducers/studentReducer'


const reducer = combineReducers({
    userLogin: userLoginReducer,
    userAuth: userAuthReducer,
    teacherCohort: teacherCohortReducer,
    teacherCourses: teacherCoursesReducer,
    teacherSessions: teacherSessionsReducer,
    teacherSessionSection: teacherSessionSectionReducer,
    teacherSessionStatus: teacherSessionStatusReducer,
    content: contentReducer,
    urlVar: teacherTempReducer,
    teacherContentStatus: teacherContentStatusReducer,
    studentFAQ: studentFAQReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const userRoleFromStorage = localStorage.getItem('userRole') ? JSON.parse(localStorage.getItem('userRole')) : null
const urlVarFromStorage = localStorage.getItem('urlParameter') ? JSON.parse(localStorage.getItem('urlParameter')) : {}

const initialState = {
    userLogin: { userInfo: userInfoFromStorage, userRole: userRoleFromStorage },
    urlVar: { urlParameter: urlVarFromStorage }
}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store