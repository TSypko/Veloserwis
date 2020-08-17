import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
 
`;

const Main = ({ children }) => (
    <StyledMain>
        {children}
    </StyledMain>
);

export default Main;