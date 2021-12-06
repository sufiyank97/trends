import {
    COOKIES_DATA,
    FOLDERS_DATA,
    COMPETITION,
    COLOUR,
    PRICE,
    MARKET,
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
        case COMPETITION:
            return {
                ...state,
                competition: action.payload,
            };
        case COLOUR:
            return {
                ...state,
                colour: action.payload,
            };
        case PRICE:
            return {
                ...state,
                price: action.payload,
            };
        case MARKET:
            return {
                ...state,
                market: action.payload,
            };
        default:
            return state
    }
}