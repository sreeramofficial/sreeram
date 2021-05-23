import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '@/store/reducer';
import rootSaga from '@/store/saga';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, bindMiddleware([ sagaMiddleware ]));

  return {
    ...store,
    sagaTask: sagaMiddleware.run(rootSaga),
  };
};

export const wrapper = createWrapper(makeStore, { debug: false });
