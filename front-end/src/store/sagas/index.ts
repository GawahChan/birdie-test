import { put, takeLatest, call } from 'redux-saga/effects';
import { REQUEST_GET_DATA, receiveGetData, receiveDataKeys, receiveAllMoods, receiveDataMoods } from '../actions/index';
import fetchData from '../../data';

function* getData() {
  try {
    const data = yield call(fetchData);
    yield put(receiveGetData(data));

    let dataKeys = data.map(observation => Object.keys(observation))[0];
    yield put(receiveDataKeys(dataKeys));

    let allMoods = data.map(observation => observation.mood);
    yield put(receiveAllMoods(allMoods));

    let dataMoods = allMoods.filter((mood, index) => allMoods.indexOf(mood) === index).sort();
    yield put(receiveDataMoods(dataMoods));

  } catch (error) {
    console.log('Error in SAGA from getData: ', error);
  }
}

// tells SAGA to wait for action "GET_DATA" to be dispatched. Once dispatched, then call fetchData function
function* watchData() {
  yield takeLatest(REQUEST_GET_DATA, getData);
}

export default watchData;