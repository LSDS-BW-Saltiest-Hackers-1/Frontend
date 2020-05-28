import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";

// import React from "react";
// import styled from "styled-components";

const array = [
  {
    id: 1,
    date: "2020-02-02",
    username: "roberthughes",
    comment:
      "Far concluded not his something extremity. Want four we face an he gate. On he of played he ladies answer little though nature. Blessing oh do pleasure as so formerly. Took four spot soon led size you. Outlived it received he material. Him yourself joy moderate off repeated laughter outweigh screened.",
    rating: 3.4,
  },
  {
    id: 2,
    date: "2020-02-03",
    username: "sarahflores",
    comment:
      "Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her.",
    rating: 2.6,
  },
  {
    id: 3,
    date: "2020-02-04",
    username: "robertmorgan",
    comment:
      "Sense child do state to defer mr of forty. Become latter but nor abroad wisdom waited. Was delivered gentleman acuteness but daughters. In as of whole as match asked. Pleasure exertion put add entrance distance drawings. In equally matters showing greatly it as. Want name any wise are able park when. Saw vicinity judgment remember finished men throwing.",
    rating: 1.3,
  },
  {
    id: 4,
    date: "2020-02-05",
    username: "sarahrobinson",
    comment:
      "Boy desirous families prepared gay reserved add ecstatic say. Replied joy age visitor nothing cottage. Mrs door paid led loud sure easy read. Hastily at perhaps as neither or ye fertile tedious visitor. Use fine bed none call busy dull when. Quiet ought match my right by table means. Principles up do in me favourable affronting. Twenty mother denied effect we to do on.",
    rating: 3.1,
  },
  {
    id: 5,
    date: "2020-02-06",
    username: "davidmartin",
    comment:
      "Difficulty on insensible reasonable in. From as went he they. Preference themselves me as thoroughly partiality considered on in estimating. Middletons acceptance discovered projecting so is so or. In or attachment inquietude remarkably comparison at an. Is surrounded prosperous stimulated am me discretion expression. But truth being state can she china widow. Occasional preference fat remarkably now projecting uncommonly dissimilar. Sentiments projection particular companions interested do at my delightful. Listening newspaper in advantage frankness to concluded unwilling.",
    rating: 3.0,
  },
  {
    id: 6,
    date: "2020-02-06",
    username: "michaelwalker",
    comment:
      "To they four in love. Settling you has separate supplied bed. Concluded resembled suspected his resources curiosity joy. Led all cottage met enabled attempt through talking delight. Dare he feet my tell busy. Considered imprudence of he friendship boisterous.",
    rating: 1.1,
  },
];

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

const CommentCard = () => {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
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
          heading={"What is Git ?"}
          body={
            "Git is a distributed version control system. Every dev has a working copy of the code and..."
          }
        />
        <Button className={buttonStyles}>Read more</Button>
      </CardContent>
    </Card>
  );
};

export default CommentCard;
