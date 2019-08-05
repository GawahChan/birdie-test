import { put, takeLatest, call } from 'redux-saga/effects';
import { REQUEST_GET_DATA, receiveGetData } from '../actions/index';
import fetchData from '../../data';

function* getData() {
  try {
    const data = yield call(fetchData);
    console.log('data in getData(): ', data);
    yield put(receiveGetData(data));

  } catch (error) {
    console.log('error from getData: ', error);
  }
}

// tells SAGA to wait for action "GET_DATA" to be dispatched. Once dispatched, then call fetchData function
function* watchData() {
  yield takeLatest(REQUEST_GET_DATA, getData);
}

export default watchData;