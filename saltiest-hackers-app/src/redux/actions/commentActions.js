import axios from 'axios';
import { axiosWithAuth } from '../../utils/axiosWithAuth.js';

const apiURL = 'https://saltiest-hacker-bw.herokuapp.com';

// http://saltyapp.herokuapp.com
// https://saltyapp.herokuapp.com/home
// https://saltyapp.herokuapp.com/top20_saltiest_users
// https://saltyapp.herokuapp.com/top20_sweetest_users
// https://saltyapp.herokuapp.com/top10_commenters
// https://saltyapp.herokuapp.com/top100_salty_comments
// https://saltyapp.herokuapp.com/top100_sweetest_comments

export const FETCH_COMMENTS_START = 'FETCH_COMMENTS_START';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';
export const fetchComments = () => {
  return dispatch => {
    dispatch({ type: FETCH_COMMENTS_START });
    axiosWithAuth()
      .get('/home')
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_COMMENTS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_COMMENTS_FAILURE, payload: err });
      });
  };
};

export const SAVE_COMMENT_START = 'SAVE_COMMENT_START';
export const SAVE_COMMENT_SUCCESS = 'SAVE_COMMENT_SUCCESS';
export const SAVE_COMMENT_FAILURE = 'SAVE_COMMENT_FAILURE';
export const saveComment = () => {
  return dispatch => {
    dispatch({ type: SAVE_COMMENT_START });
    axiosWithAuth()
      .post('')
      .then(res => {
        console.log(res);
        // dispatch({ type: SAVE_COMMENT_SUCCESS });
      })
      .catch(err => {
        console.log(err);
        // dispatch({ type: SAVE_COMMENT_FAILURE });
      });
  };
};

export const DELETE_COMMENT_START = 'DELETE_COMMENT_START';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE';
export const deleteComment = () => {
  return dispatch => {
    dispatch({ type: DELETE_COMMENT_START });
    axiosWithAuth()
      .post('')
      .then(res => {
        console.log(res);
        // dispatch({ type: DELETE_COMMENT_SUCCESS });
      })
      .catch(err => {
        console.log(err);
        // dispatch({ type: DELETE_COMMENT_FAILURE });
      });
  };
};
