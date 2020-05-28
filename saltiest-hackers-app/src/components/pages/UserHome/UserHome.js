import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../../../redux/actions/commentActions.js";

import CommentCard from "../Cards";

function UserHome({ token, commentData, fetchComments }) {
  // let token = localStorage.getItem('token');
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="user-home-page">
      <h2>User Home Page (user is logged in)</h2>
      <CommentCard commentData={commentData}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    token: state.commentReducer.token,
    commentData: state.commentReducer.commentData
  };
};

export default connect(mapStateToProps, { fetchComments })(UserHome);
