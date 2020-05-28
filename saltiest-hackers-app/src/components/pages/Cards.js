import React from "react";
import styled from "styled-components";

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

const Container = styled.div`
  width: 50%;
  margin: auto;
  outline: 5px solid black;
`;

const Cards = () => {
  return (
    <div>
      {array.map((user) => {
        return (
          <Container>
            <p className="username">{user.username}</p>
            <p classname="date">{user.date}</p>
            <p className="comment">{user.comment}</p>
            <p className="rating">Rating: {user.rating}</p>
          </Container>
        );
      })}
    </div>
  );
};

export default Cards;
