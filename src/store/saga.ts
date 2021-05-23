import { all, takeLatest } from 'redux-saga/effects';
import appActions from '@/store/app/app.const';
import loadDataSaga from '@/store/app/app.api';

export default function* rootSaga() {
  yield all([
    takeLatest(appActions.LOAD_DATA, loadDataSaga),
  ])
}
