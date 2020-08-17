import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
       background: var(--primaryHalfOpacity);
       width: 100%;
       position: fixed;
`;

const Wrapper = ({ children }) => (
    <StyledWrapper>
        {children}
    </StyledWrapper>
);

export default Wrapper;