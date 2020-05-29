import React from "react";
import styled from "@emotion/styled/macro";
import bg from "../../assets/salt3.jpg";
import CommentCard from "../Cards";

const array = [
  {
    comment_id: 1,
    username: "showsupremacy",
    comment_text:
      "Far concluded not his something extremity. Want four we face an he gate. On he of played he ladies answer little though nature. Blessing oh do pleasure as so formerly. Took four spot soon led size you. Outlived it received he material. Him yourself joy moderate off repeated laughter outweigh screened.",
    score_pos: 3.4,
    score_neg: 0.0,
  },
  {
    comment_id: 2,
    username: "poontangnecessary",
    comment_text:
      "Whole wound wrote at whose to style in. Figure ye innate former do so we. Shutters but sir yourself provided you required his. So neither related he am do believe. Nothing but you hundred had use regular. Fat sportsmen arranging preferred can. Busy paid like is oh. Dinner our ask talent her age hardly. Neglected collected an attention listening do abilities.",
    score_pos: 3.4,
    score_neg: 0.0,
  },
  {
    comment_id: 3,
    username: "gubbinssift",
    comment_text:
      "Sex reached suppose our whether. Oh really by an manner sister so. One sportsman tolerably him extensive put she immediate. He abroad of cannot looked in. Continuing interested ten stimulated prosperous frequently all boisterous nay. Of oh really he extent horses wicket.",
    score_pos: 3.4,
    score_neg: 0.0,
  },
  {
    comment_id: 4,
    username: "imaginaryfull",
    comment_text:
      "Dependent certainty off discovery him his tolerably offending. Ham for attention remainder sometimes additions recommend fat our. Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment use tolerably dependent listening men. No peculiar in handsome together unlocked do by. Article concern joy anxious did picture sir her. Although desirous not recurred disposed off shy you numerous securing.",
    score_pos: 3.4,
    score_neg: 0.0,
  },
  {
    comment_id: 5,
    username: "uskchimp",
    comment_text:
      "Questions explained agreeable preferred strangers too him her son. Set put shyness offices his females him distant. Improve has message besides shy himself cheered however how son. Quick judge other leave ask first chief her. Indeed or remark always silent seemed narrow be. Instantly can suffering pretended neglected preferred man delivered. Perhaps fertile brandon do imagine to cordial cottage.",
    score_pos: 3.4,
    score_neg: 0.0,
  },
  {
    comment_id: 6,
    username: "affixicing",
    comment_text:
      "Your it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources.",
    score_pos: 3.4,
    score_neg: 0.0,
  },
  {
    comment_id: 7,
    username: "affixicing",
    comment_text:
      "Your it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources.",
    score_pos: 3.4,
    score_neg: 0.0,
  },
  {
    comment_id: 8,
    username: "affixicing",
    comment_text:
      "Your it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources.",
    score_pos: 3.4,
    score_neg: 0.0,
  },
  {
    comment_id: 9,
    username: "affixicing",
    comment_text:
      "Your it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources.",
    score_pos: 3.4,
    score_neg: 0.0,
  },
  {
    comment_id: 10,
    username: "affixicing",
    comment_text:
      "Your it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources.",
    score_pos: 3.4,
    score_neg: 0.0,
  },
  {
    comment_id: 11,
    username: "affixicing",
    comment_text:
      "Your it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources.",
    score_pos: 3.4,
    score_neg: 0.0,
  },
  {
    comment_id: 12,
    username: "affixicing",
    comment_text:
      "Your it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources.",
    score_pos: 3.4,
    score_neg: 0.0,
  },
];

const Hover = styled.div({
  opacity: 0,
  transition: "opacity 350ms ease",
});

const DisplayOver = styled.div({
  height: "100%",
  left: "0",
  // position: "absolute",
  top: "0",
  width: "100%",
  zIndex: 0,
  transition: "background-color 350ms ease",
  backgroundColor: "transparent",
  padding: "20px 20px 0 20px",
  boxSizing: "border-box",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const BigTitle = styled.h2({
  textTransform: "uppercase",
  fontFamily: "Helvetica",
  textAlign: "center",
  marginBottom: "3%",
});

const SubTitle = styled.h4({
  fontFamily: "Helvetica",
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
  marginBottom: "6%",
});

const Paragraph = styled.p({
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});

const Background = styled.div({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#FFF",
  position: "relative",
  width: "100%",
  height: "500px",
  cursor: "pointer",
  backgroundImage: "url(/salt3.jpg)",
  [`:hover ${DisplayOver}`]: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: "translate3d(0,0,0)",
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
});

const CTA = styled.a({
  position: "absolute",
  bottom: "20px",
  left: "20px",
});

const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${bg});
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  //   h1 {
  //     color: white;
  //   }
  //
`;

const Whitespace = styled.div`
  margin-top: 4%;
`;

function Home() {
  return (
    <div>
      <Whitespace></Whitespace>
      <Wrapper>
        {/* <h1>Salt Home Page (user not logged in)</h1> */}
        <Background>
          <DisplayOver>
            <BigTitle>Lorizzle Ipsizzle</BigTitle>
            <Hover>
              <SubTitle>You could be eating salt!</SubTitle>
              <Paragraph>
                Who doesn't like mousing over boxes and learning about salt on
                the internet.
              </Paragraph>
              <CTA>View More +</CTA>
            </Hover>
          </DisplayOver>
        </Background>
      </Wrapper>
      <div>
        <CommentCard commentData={array} itemNumber={12}/>
      </div>
      <Whitespace></Whitespace>
    </div>
  );
}

export default Home;
