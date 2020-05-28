import React from "react";
import { connect } from "react-redux";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";

import styled from "@emotion/styled/macro";

const CommentsContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  width: 100%;
`;

const CommentWrapper = styled.div`
  margin: 2%;
`;

// import logo from "../assets/logo2.png";

// import React from "react";
// import styled from "styled-components"

// const Container = styled.div`
//   width: 50%;
//   margin: auto;
//   outline: 5px solid black;
// `;

// const Cards = () => {
//   return (
//     <div>
//       {array.map((user) => {
//         return (
//           <Container>
//             <p className="username">{user.username}</p>
//             <p className="date">{user.date}</p>
//             <p className="comment">{user.comment}</p>
//             <p className="rating">Rating: {user.rating}</p>
//           </Container>
//         );
//       })}
//     </div>
//   );
// };

// export default Cards;

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    maxWidth: 500,
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },
  media: {
    width: "88%",
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
      backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
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

const CommentCard = ({ commentData }) => {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <CommentsContainer>
      {commentData
        .filter((item, i) => i < 20)
        .map((item) => {
        // console.log("CommentCard -> item", item);
        return (
          <CommentWrapper>
            <Card className={cx(styles.root, shadowStyles.root)}>
              <CardMedia
                className={styles.media}
                image={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png"
                }
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={"28 MAR 2019"}
                  heading={item.username}
                  body={item.comment_text}
                />
                <Button className={buttonStyles}>Add to Favorites</Button>
              </CardContent>
            </Card>
          </CommentWrapper>
        );
      })}
    </CommentsContainer>
  );
};

const mapStateToProps = state => {
  // return {
  //   commentData: state.commentReducer.commentData
  // };
  return state;
};

export default connect(mapStateToProps, {})(CommentCard);
