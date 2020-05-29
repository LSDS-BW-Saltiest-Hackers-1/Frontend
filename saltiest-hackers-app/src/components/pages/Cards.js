import React from "react";
import { connect } from "react-redux";
import cx from "clsx";
import { saveComment } from "../../redux/actions/commentActions.js";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import styled from "@emotion/styled/macro";
import logo from "../assets/logo2.png";

const CommentsContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 80%;

  @media (max-width: 500px) {
    justify-content: center;
    width: 100%;
  }
`;

const CommentWrapper = styled.div`
  margin: 2%;
`;

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    maxWidth: 500,
    minHeight: 200,
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: spacing(1),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(1),
    },
  },
  media: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "100%",
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: "translateX(-8px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(147deg, #F5F5EC 0%, #FF5E00 74%)",
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
}));

const CommentCard = ({ commentData, itemNumber, userId, saveComment }) => {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <CommentsContainer>
      {commentData
        .filter((item, i) => i < itemNumber)
        .map((item) => {
          // console.log("CommentCard -> item", item);
          return (
            <CommentWrapper key={item.comment_id}>
              <Card className={cx(styles.root, shadowStyles.root)}>
                {/* <CardMedia
                  className={styles.media}
                  image={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png"
                  }
                /> */}
                <CardContent>
                  <TextInfoContent
                    classes={contentStyles}
                    // overline={"28 MAR 2019"}
                    heading={item.username}
                    body={item.comment_text}
                  />
                  <Button onClick={() => saveComment(userId, item.comment_id)} className={buttonStyles}>Add to Favorites</Button>
                </CardContent>
              </Card>
            </CommentWrapper>
          );
        })}
    </CommentsContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.userReducer.userId
  };
};

export default connect(mapStateToProps, { saveComment })(CommentCard);
