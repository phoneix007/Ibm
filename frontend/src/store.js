import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from './reducers/userReducers'
import { teacherCohortReducer, teacherCoursesReducer, teacherSessionsReducer, teacherSessionSectionReducer } from './reducers/teacherReducers'
import { contentReducer } from './reducers/contentReducer'


const reducer = combineReducers({
    userLogin: userLoginReducer,
    teacherCohort: teacherCohortReducer,
    teacherCourses: teacherCoursesReducer,
    teacherSessions: teacherSessionsReducer,
    teacherSessionSection: teacherSessionSectionReducer,
    content: contentReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const userRoleFromStorage = localStorage.getItem('userRole') ? JSON.parse(localStorage.getItem('userRole')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage, role: userRoleFromStorage },
}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store