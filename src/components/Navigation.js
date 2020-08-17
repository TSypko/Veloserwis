import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--primaryColor);
    color: var(--secondaryColor);
`;

const Navigation = ({ children }) => (
    <Nav>
        {children}
    </Nav>
);

export default Navigation;