import { takeEvery, put, call, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { addToDatabase } from '../actions/data';
import firebase from 'firebase/app';
import 'firebase/database';
firebase.initializeApp({
  databaseURL: 'https://form-adder.firebaseio.com/'
});
const db = firebase.database().ref('users/');

function* createEventChannel() {
  const channel = new eventChannel(emitter => {
    const listener = db.on('value', snapshot => {
      emitter({
        data: snapshot.val() || {}
      });
    });

    return () => {
      listener.off();
    };
  });

  while (true) {
    try {
      const { data } = yield take(channel);
      const allData = yield Object.keys(data).map(key => data[key]);

      if (allData.length > 0) {
        yield put({
          type: 'ADD_DATA_SUCCESS',
          allData
        });
      }
    } catch (error) {
      yield put({
        type: 'FETCH_ERROR',
        data: error.toString()
      });
    }
  }
}

function* addDataAsync({ data }) {
  yield call(addToDatabase, data);
}

export default function* watchData() {
  yield fork(createEventChannel);
  yield takeEvery('ADD_DATA', addDataAsync);
}
