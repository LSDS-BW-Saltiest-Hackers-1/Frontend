import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchCommentData } from "../../../redux/actions/commentActions.js";
import { fetchMiscCommentData } from "../../../redux/actions/commentActions.js";

import CommentCard from "../Cards";

const UserHomePage = styled.div`
  margin-top: 10%;
`;

function UserHome({ token, isLoading, commentData, miscCommentData, fetchCommentData, fetchMiscCommentData }) {
  const [numOfComments, setNumOfComments] = useState(100);
  // let token = localStorage.getItem("token");
  useEffect(() => {
    if (!commentData.length > 0) {
      fetchCommentData("/home");
    }
  }, []);

  const getMiscComments = (targetEndPoint, targetNumOfComments) => {
    fetchMiscCommentData(targetEndPoint);
    setNumOfComments(targetNumOfComments);
  };

  return (
    <UserHomePage>
      <h2>Salt User Home Page</h2>
      {isLoading && <h2>Loading Data...</h2>}
      <div>
        {/* <button
          onClick={(e) => {
            e.preventDefault();
            getMiscComments("/home");
            setNumOfComments(100);
          }}>
          Get 100 Comments
        </button> */}
      </div>
      <div className="misc-data">
        {/* <button onClick={() => getTargetData()}>Top 10 Salty Users</button> */}
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              getMiscComments("/top100_salty_comments", 10);
            }}>
            Top 10 Salty Comments
          </button>
        </div>
        {/* <button onClick={() => getTargetData()}>Top 10 Sweet Users</button> */}
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              getMiscComments("/top100_sweetest_comments", 10);
            }}>
            Top 10 Sweet Comments
          </button>
        </div>
      </div>
      <CommentCard commentData={commentData} itemNumber={numOfComments}/>
      <CommentCard commentData={miscCommentData} itemNumber={numOfComments}/>
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
