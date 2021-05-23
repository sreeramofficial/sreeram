import actionTypes from './app.const';

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  }
}

export function loadData(req, res) {
  return { type: actionTypes.LOAD_DATA, req, res }
}

export function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  }
}
