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

export const FETCH_COMMENT_DATA_START = 'FETCH_COMMENT_DATA_START';
export const FETCH_COMMENT_DATA_SUCCESS = 'FETCH_COMMENT_DATA_SUCCESS';
export const FETCH_COMMENT_DATA_FAILURE = 'FETCH_COMMENT_DATA_FAILURE';
export const fetchCommentData = targetEndPoint => {
  return dispatch => {
    dispatch({ type: FETCH_COMMENT_DATA_START });
    axiosWithAuth()
      .get(targetEndPoint)
      .then(res => {
        dispatch({ type: FETCH_COMMENT_DATA_SUCCESS, payload: res.data });
        // res.data.filter((item, i) => i <= 1000)
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_COMMENT_DATA_FAILURE, payload: err });
      });
  };
};

export const FETCH_MISC_COMMENT_DATA_START = 'FETCH_MISC_COMMENT_DATA_START';
export const FETCH_MISC_COMMENT_DATA_SUCCESS = 'FETCH_MISC_COMMENT_DATA_SUCCESS';
export const FETCH_MISC_COMMENT_DATA_FAILURE = 'FETCH_MISC_COMMENT_DATA_FAILURE';
export const fetchMiscCommentData = targetEndPoint => {
  return dispatch => {
    dispatch({ type: FETCH_MISC_COMMENT_DATA_START });
    axiosWithAuth()
      .get(targetEndPoint)
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_MISC_COMMENT_DATA_SUCCESS, payload: res.data, targetEndPoint: targetEndPoint })
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_MISC_COMMENT_DATA_FAILURE, payload: err })
      });
  };
};

export const FETCH_SAVED_COMMENTS_START = 'FETCH_SAVED_COMMENTS_START';
export const FETCH_SAVED_COMMENTS_SUCCESS = 'FETCH_SAVED_COMMENTS_SUCCESS';
export const FETCH_SAVED_COMMENTS_FAILURE = 'FETCH_SAVED_COMMENTS_FAILURE';
export const fetchSavedComments = (userId, commentData) => {
  return dispatch => {
    dispatch({ type: FETCH_SAVED_COMMENTS_START });
    axios
      .get(`${apiURL}/api/comments/${userId}/favorites`)
      .then(res => {
        dispatch({ type: FETCH_SAVED_COMMENTS_SUCCESS, payload: res.data, commentData: commentData });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_SAVED_COMMENTS_FAILURE, payload: err });
      });
  };
};

export const SAVE_COMMENT_START = 'SAVE_COMMENT_START';
export const SAVE_COMMENT_SUCCESS = 'SAVE_COMMENT_SUCCESS';
export const SAVE_COMMENT_FAILURE = 'SAVE_COMMENT_FAILURE';
export const saveComment = (userId, favCommentId) => {
  return dispatch => {
    dispatch({ type: SAVE_COMMENT_START });
    axios
      .post(`${apiURL}/api/comments/${userId}/add/${favCommentId}`)
      .then(res => {
        dispatch({ type: SAVE_COMMENT_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: SAVE_COMMENT_FAILURE, payload: err });
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
