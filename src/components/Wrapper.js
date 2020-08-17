import React from "react";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
     ${({ nav }) => nav && css`
       background: var(--primaryColor);
    `}        
`;

const Wrapper = ({ children, isRed }) => (
    <StyledWrapper nav={isRed}>
        {children}
    </StyledWrapper>
);

export default Wrapper;