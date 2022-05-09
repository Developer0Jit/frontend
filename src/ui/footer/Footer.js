import React, { Component } from "react";

import styled from "styled-components";

import Typography from "@mui/material/Typography";

export const FooterContainer = styled.div`
  display: flex;
  min-height: 10vh;
  flex-direction: column;
  margin:auto;
  m:5;
  width:25%;
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <Typography variant="title">site design / Copyright © 2022-ArtHub </Typography>
      </FooterContainer>
    );
  }
}

export default Footer;