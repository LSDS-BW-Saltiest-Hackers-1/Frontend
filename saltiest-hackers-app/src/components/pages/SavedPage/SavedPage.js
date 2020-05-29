import React, { useEffect } from 'react';
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchSavedComments } from "../../../redux/actions/commentActions.js";

import CommentCard from "../Cards";

const SavedPageStyle = styled.div`
  margin-top: 10%;
`;

function SavedPage({ userId, commentData, userSavedComments, fetchSavedComments }) {

  useEffect(() => {
    if (!userSavedComments.length > 0) {
      fetchSavedComments(userId, commentData);
    }
  }, []);

  return (
    <SavedPageStyle>
      <h2>Saved Comments</h2>
      {userSavedComments.length > 0 && <CommentCard commentData={userSavedComments} itemNumber={userSavedComments.length}/>}
    </SavedPageStyle>
  );
}

const mapStateToProps = state => {
  return {
    userId: state.userReducer.userId,
    commentData: state.commentReducer.commentData,
    userSavedComments: state.commentReducer.userSavedComments
  };
};

export default connect(mapStateToProps, { fetchSavedComments })(SavedPage);
