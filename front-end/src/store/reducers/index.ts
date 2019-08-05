import { combineReducers } from 'redux';
import dataReducer from '../reducers/dataReducer';

export type RootState = {
    data: any;
};

export const rootReducer = combineReducers<RootState>({ 
    data: dataReducer
});