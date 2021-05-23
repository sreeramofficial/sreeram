import { put } from 'redux-saga/effects';
import { failure, loadDataSuccess } from './app.actions';
import { getSession } from '@auth0/nextjs-auth0';

export const getUserData = async custId => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/user?custId=${custId}`);
  return await res.json();
};

export default function* loadDataSaga({ req, res }: any) {
  try {
    const session = yield getSession(req, res);
    if (!session) return;
    const { user, user: { sub } } = session;
    const data = yield getUserData(sub);
    yield put(loadDataSuccess({ ...user, ...data }));
  } catch (err) {
    console.log('error', err);
    yield put(failure(err));
  }
}
