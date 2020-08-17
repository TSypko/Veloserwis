import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--secondary);
    max-width: 1200px;
`;

const Navigation = ({ children }) => (
    <Nav>
        {children}
    </Nav>
);

export default Navigation;