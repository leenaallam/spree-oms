import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../icons/logo.svg";

const Topbar = () => {
  return (
    <Styledtopbar>
      <Logo></Logo>
    </Styledtopbar>
  );
};

const Styledtopbar = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #1261de;
  width: 100vw;
  height: 6.6vw;
`;

export default Topbar;
