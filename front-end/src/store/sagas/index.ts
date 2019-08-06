import { put, takeLatest, call } from 'redux-saga/effects';

import { REQUEST_GET_DATA } from '../actions/index';
import { receiveGetData } from '../actions/index';
import { receiveDataKeys } from '../actions/index';
import { receiveAllMoods } from '../actions/index';
import { receiveDataMoods } from '../actions/index';
import { receiveDataTimeStamp } from '../actions/index';

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

    let timeStamp = data.map(observation => observation.timestamp);
    let allMonths = timeStamp.map(date => new Date(date).getMonth().toString());
    let eachMonth = allMonths.filter((month, index) => allMonths.indexOf(month) === index).sort()
      .map(month => month === '3' ? 'April' : 
        month === '4' ? 'May' : 'Other Month');
    yield put(receiveDataTimeStamp(timeStamp, allMonths, eachMonth));

  } catch (error) {
    console.log('Error in SAGA from getData: ', error);
  }
}

function* watchData() {
  yield takeLatest(REQUEST_GET_DATA, getData);
}

export default watchData;