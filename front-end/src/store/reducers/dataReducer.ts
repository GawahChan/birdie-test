import { RECEIVE_GET_DATA } from '../actions/index';
import { RECEIVE_DATA_KEYS } from '../actions/index';
import { RECEIVE_ALL_MOODS } from '../actions/index';
import { RECEIVE_DATA_MOODS } from '../actions/index';
import { RECEIVE_DATA_TIMESTAMP } from '../actions/index';

const initialState = {
    allData: [],
    dataKeys: [],
    allMoods: [],
    dataMoods: [],
    timeStamp: [],
    allMonths: [],
    eachMonth: []
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_GET_DATA:
            return {
                ...state,
                allData: action.data
            };
        case RECEIVE_DATA_KEYS:
            return {
                ...state,
                dataKeys: action.keys
            };
        case RECEIVE_ALL_MOODS:
            return {
                ...state,
                allMoods: action.allMoods
            };
        case RECEIVE_DATA_MOODS:
            return {
                ...state,
                dataMoods: action.moods
            };
        case RECEIVE_DATA_TIMESTAMP:
            return {
                ...state,
                timeStamp: action.timeStamp,
                allMonths: action.allMonths,
                eachMonth: action.eachMonth,
            };
        default:
            return state;
    }
};

export default dataReducer;