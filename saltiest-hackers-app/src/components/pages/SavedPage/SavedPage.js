import React from 'react';
import { connect } from "react-redux";
import styled from "styled-components";

import CommentCard from "../Cards";

const SavedPageStyle = styled.div`
  margin-top: 10%;
`;

function SavedPage() {
  return (
    <SavedPageStyle>
      <h2>Saved Comments</h2>
    </SavedPageStyle>
  );
}

export default SavedPage;
