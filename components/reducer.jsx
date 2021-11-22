import {
    COOKIES_DATA,
    FOLDERS_DATA
} from './AppConstants'

export default function reducer(state, action) {
    switch (action.type) {
        case COOKIES_DATA:
            return {
                ...state,
                cookiesData: action.payload,
            };
        case FOLDERS_DATA:
            return {
                ...state,
                folders: action.payload,
            };
        default:
            return state
    }
}