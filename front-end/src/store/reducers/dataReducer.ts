import { RECEIVE_GET_DATA, RECEIVE_DATA_KEYS, RECEIVE_ALL_MOODS, RECEIVE_DATA_MOODS } from '../actions/index';

const initialState = {
    appData: [],
    dataKeys: [],
    allMoods: [],
    dataMoods: []
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
        default:
            return state;
    }
};

export default dataReducer;