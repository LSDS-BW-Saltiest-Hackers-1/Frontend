import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchCommentData } from "../../../redux/actions/commentActions.js";
import { fetchMiscCommentData } from "../../../redux/actions/commentActions.js";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import CommentCard from "../Cards";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#FF5E00",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const UserHomePage = styled.div`
  margin-top: 10%;

  @media (max-width: 500px) {
    margin-top: 20%;
  }
`;

const CardsDiv = styled.div`
  margin: 5% auto auto auto;
  width: 80%;
`;

const initShownData = {
  commentData: false,
  topSaltyComments: false,
  topSweetComments: false,
};

function UserHome({
  token,
  isLoading,
  commentData,
  miscCommentData,
  fetchCommentData,
  fetchMiscCommentData,
}) {
  const [numOfComments, setNumOfComments] = useState(100);
  const [shownData, setShownData] = useState(initShownData);

  const classes = useStyles();

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
      [shownDataTarget]: true,
    });
    setNumOfComments(targetNumOfComments);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <UserHomePage>
        {/* <h2>Salt User Home Page</h2> */}
        {isLoading && <h2>Loading Data...</h2>}
        <div className={classes.root}>
          <ButtonGroup
            variant="contained"
            color="secondary"
            aria-label="contained primary button group"
          >
            <Button
              onClick={(e) => {
                e.preventDefault();
                showComments("commentData", 100);
              }}
            >
              Show 100 Comments
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                showComments("topSaltyComments", 10);
              }}
            >
              Top 10 Salty Comments
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                showComments("topSweetComments", 10);
              }}
            >
              Top 10 Sweet Comments
            </Button>
          </ButtonGroup>
        </div>

        {/* <button onClick={() => getTargetData()}>Top 10 Salty Users</button> */}

        {/* <button onClick={() => getTargetData()}>Top 10 Sweet Users</button> */}
        <CardsDiv>
          {shownData.commentData && (
            <CommentCard commentData={commentData} itemNumber={numOfComments} />
          )}
          {shownData.topSaltyComments && (
            <CommentCard
              commentData={miscCommentData.topSaltyComments}
              itemNumber={numOfComments}
            />
          )}
          {shownData.topSweetComments && (
            <CommentCard
              commentData={miscCommentData.topSweetComments}
              itemNumber={numOfComments}
            />
          )}
        </CardsDiv>
      </UserHomePage>
    </MuiThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.commentReducer.token,
    isLoading: state.commentReducer.isLoading,
    commentData: state.commentReducer.commentData,
    miscCommentData: state.commentReducer.miscCommentData,
  };
};

export default connect(mapStateToProps, {
  fetchCommentData,
  fetchMiscCommentData,
})(UserHome);
