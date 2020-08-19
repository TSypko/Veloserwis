import React from "react";
import styled, {css} from "styled-components";

const StyledWrapper = styled.div`
       background: transparent;
       width: 100%;
       position: fixed;
       z-index: 1;
       transition: 0.5s;

       ${({ scroll }) => scroll && css`
       background: var(--primaryHalfOpacity);
    `
    }
`;

const Wrapper = ({ children, isScrolled }) => (
    <StyledWrapper scroll={isScrolled}>
        {children}
    </StyledWrapper>
);

export default Wrapper;