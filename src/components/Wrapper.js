import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    margin: 0 auto;
    max-width: 1200px;
`;

const Wrapper = ({ children }) => (
    <StyledWrapper>
        {children}
    </StyledWrapper>
);

export default Wrapper;