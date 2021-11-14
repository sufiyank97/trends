import {
    COOKIES_DATA
} from './AppConstants'

export default function reducer(state, action) {
    switch (action.type) {
        case COOKIES_DATA:
            return {
                ...state,
                cookiesData: action.payload,
            };
        default:
            return state
    }
}