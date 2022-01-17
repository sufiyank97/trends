import {
    COOKIES_DATA,
    FOLDERS_DATA,
    DASHBOARDS_DATA,
    SELECTED_FOLDER_DATA,
    COMPETITION,
    COLOUR,
    PRICE,
    MARKET,
    PINNED_BTN,
    MARKETS_BTN,
    COMPETITION_BTN,
    COLOURS_BTN,
    PRICES_BTN,
    DATES_BTN,
    DATE,
    KEYWORD,
    MARKETS_STATUS_BTN,
} from './AppConstants'

export default function reducer(state, action) {
    switch (action.type) {
        case MARKETS_STATUS_BTN:
            return {
                ...state,
                markets_status: action.payload,
            };
        case MARKETS_BTN:
            return {
                ...state,
                markets: action.payload,
            };
        case COMPETITION_BTN:
            return {
                ...state,
                competitions: action.payload,
            };
        case COLOURS_BTN:
            return {
                ...state,
                colours: action.payload,
            };
        case PRICES_BTN:
            return {
                ...state,
                prices: action.payload,
            };
        case DATES_BTN:
            return {
                ...state,
                dates: action.payload,
            };
        case PINNED_BTN:
            return {
                ...state,
                pinned: action.payload,
            };
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
        case SELECTED_FOLDER_DATA:
            return {
                ...state,
                selectedFolderValue: action.payload,
            };
        case DASHBOARDS_DATA:
            return {
                ...state,
                dashboards: action.payload,
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
        case DATE:
            return {
                ...state,
                date1: action.payload,
            };
        case KEYWORD:
            return {
                ...state,
                keyword: action.payload,
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