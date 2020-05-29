import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchCommentData } from "../../../redux/actions/commentActions.js";
import { fetchMiscCommentData } from "../../../redux/actions/commentActions.js";

import CommentCard from "../Cards";

const UserHomePage = styled.div`
  margin-top: 10%;
`;

const initShownData = {
  commentData: false,
  topSaltyComments: false,
  topSweetComments: false
};

function UserHome({ token, isLoading, commentData, miscCommentData, fetchCommentData, fetchMiscCommentData }) {
  const [numOfComments, setNumOfComments] = useState(100);
  const [shownData, setShownData] = useState(initShownData);

  useEffect(() => {
    if (!commentData.length > 0) {
      fetchCommentData("/home");
    }
    if (!miscCommentData.topSaltyComments.length > 0) {
      fetchMiscCommentData("/top100_salty_comments");
    }
    if (!miscCommentData.topSweetComments.length > 0) {
      fetchMiscCommentData("/top100_sweetest_comments");
    }
  }, []);

  const showComments = (shownDataTarget, targetNumOfComments) => {
    setShownData({
      ...initShownData,
      [shownDataTarget]: true
    });
    setNumOfComments(targetNumOfComments);
  };

  return (
    <UserHomePage>
      <h2>Salt User Home Page</h2>
      {isLoading && <h2>Loading Data...</h2>}
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            showComments("commentData", 100);
          }}>
          Show 100 Comments
        </button>
      </div>
      <div className="misc-data">
        {/* <button onClick={() => getTargetData()}>Top 10 Salty Users</button> */}
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              showComments("topSaltyComments", 10);
            }}>
            Top 10 Salty Comments
          </button>
        </div>
        {/* <button onClick={() => getTargetData()}>Top 10 Sweet Users</button> */}
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              showComments("topSweetComments", 10);
            }}>
            Top 10 Sweet Comments
          </button>
        </div>
      </div>
      {shownData.commentData && <CommentCard commentData={commentData} itemNumber={numOfComments}/>}
      {shownData.topSaltyComments && <CommentCard commentData={miscCommentData.topSaltyComments} itemNumber={numOfComments}/>}
      {shownData.topSweetComments && <CommentCard commentData={miscCommentData.topSweetComments} itemNumber={numOfComments}/>}
    </UserHomePage>
  );
}

const mapStateToProps = state => {
  return {
    token: state.commentReducer.token,
    isLoading: state.commentReducer.isLoading,
    commentData: state.commentReducer.commentData,
    miscCommentData: state.commentReducer.miscCommentData
  };
};

export default connect(mapStateToProps, { fetchCommentData, fetchMiscCommentData })(UserHome);
