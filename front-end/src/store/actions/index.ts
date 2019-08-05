export const REQUEST_GET_DATA = 'REQUEST_GET_DATA'; 
export const RECEIVE_GET_DATA = 'RECEIVE_GET_DATA'; 

// action creator fetchData returns an object with only type of action (FETCH_DATA)
export const requestGetData = () => ({type: REQUEST_GET_DATA});
export const receiveGetData = (data: any) => ({type: RECEIVE_GET_DATA, data});