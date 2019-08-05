export const REQUEST_GET_DATA = 'REQUEST_GET_DATA'; 
export const RECEIVE_GET_DATA = 'RECEIVE_GET_DATA'; 
export const RECEIVE_DATA_KEYS = 'RECEIVE_DATA_KEYS';
export const RECEIVE_ALL_MOODS = 'RECEIVE_ALL_MOODS';
export const RECEIVE_DATA_MOODS = 'RECEIVE_DATA_MOODS';

// action creator fetchData returns an object with only type of action (FETCH_DATA)
export const requestGetData = () => ({type: REQUEST_GET_DATA});
export const receiveGetData = (data: any) => ({type: RECEIVE_GET_DATA, data});
export const receiveDataKeys = (keys: any) => ({type: RECEIVE_DATA_KEYS, keys});
export const receiveAllMoods = (allMoods: any) => ({type: RECEIVE_ALL_MOODS, allMoods});
export const receiveDataMoods = (moods: any) => ({type: RECEIVE_DATA_MOODS, moods});