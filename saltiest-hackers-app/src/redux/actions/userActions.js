import { axiosWithAuth } from '../../utils/axiosWithAuth.js';

export const FETCH_USER_START = 'FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const fetchUser = () => {
  return dispatch => {
    dispatch({ type: FETCH_USER_START });
    axiosWithAuth()
      .get('')
      .then(res => {
        console.log(res);
        // dispatch({ type: FETCH_USER_SUCCESS });
      })
      .catch(err => {
        console.log(err);
        // dispatch({ type: FETCH_USER_FAILURE });
      });
  };
};

export const POST_USER_START = 'POST_USER_START';
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS';
export const POST_USER_FAILURE = 'POST_USER_FAILURE';
export const postUser = () => {
  return dispatch => {
    dispatch({ type: POST_USER_START });
    axiosWithAuth()
      .post('')
      .then(res => {
        console.log(res);
        // dispatch({ type: POST_USER_SUCCESS });
      })
      .catch(err => {
        console.log(err);
        // dispatch({ type: POST_USER_FAILURE });
      });
  };
};
