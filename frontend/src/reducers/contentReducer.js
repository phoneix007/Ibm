import { CONTENT_REQUEST, CONTENT_SUCCESS, CONTENT_FAIL } from '../constants/contentConstants'

export const contentReducer = (state={ ContentInfo: [] }, action) => {
    switch(action.type) {
        case CONTENT_REQUEST:
            return { loading: true, ContentInfo: [] }
        case CONTENT_SUCCESS:
            return { loading: false, ContentInfo: action.payload }
        case CONTENT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}