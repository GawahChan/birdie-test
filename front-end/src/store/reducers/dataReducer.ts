import { RECEIVE_GET_DATA } from '../actions/index';

const initialState = {
    appData: []
};

const dataReducer = (state = initialState, { type, data}) => {
    switch (type) {
        case RECEIVE_GET_DATA:
            console.log('data from reducer :', data);
            return {
                ...state,
                appData: data
            }; 
        
        default:
            return state;
    }
};

export default dataReducer;