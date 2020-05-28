import React from "react";
import styled from "@emotion/styled/macro";
import bg from "../../assets/salt3.jpg";

const Hover = styled.div({
  opacity: 0,
  transition: "opacity 350ms ease",
});

const DisplayOver = styled.div({
  height: "100%",
  left: "0",
  position: "absolute",
  top: "0",
  width: "100%",
  zIndex: 2,
  transition: "background-color 350ms ease",
  backgroundColor: "transparent",
  padding: "20px 20px 0 20px",
  boxSizing: "border-box",
});

const BigTitle = styled.h2({
  textTransform: "uppercase",
  fontFamily: "Helvetica",
});

const SubTitle = styled.h4({
  fontFamily: "Helvetica",
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});

const Paragraph = styled.p({
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});

const Background = styled.div({
  // backgroundColor: "black",
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

// const Background = styled.div({
//   [`:hover ${DisplayOver}`]: {
//     backgroundColor: "rgba(0,0,0,.5)",
//   },
//   [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
//     transform: "translate3d(0,0,0)",
//   },
//   [`:hover ${Hover}`]: {
//     opacity: 1,
//   },
// });

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
  margin-top: 12%;
`;

function Home() {
  return (
    <div>
      <Whitespace></Whitespace>
      <Wrapper>
        {/* <h1>Salt Home Page (user not logged in)</h1> */}
        <Background>
          <DisplayOver>
            <BigTitle>I Love Salt</BigTitle>
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
    </div>
  );
}

export default Home;
