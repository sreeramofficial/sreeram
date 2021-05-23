import { HYDRATE } from 'next-redux-wrapper';
import actionTypes from './app.const';

const initialState = {
  error: false,
  session: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.app }
    }

    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      }

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ session: action.data },
      }

    default:
      return state
  }
}

export default reducer;
