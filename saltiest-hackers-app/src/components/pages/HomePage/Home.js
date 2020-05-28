import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function Home() {
  return (
    <Wrapper>
      <h1>Salt Home Page (user not logged in)</h1>
    </Wrapper>
  );
}

export default Home;
