import { combineReducers } from 'redux';
import dataReducer from '../reducers/dataReducer';

export type RootState = {
    dataState: any;
};

export const rootReducer = combineReducers<RootState>({ 
    dataState: dataReducer
});