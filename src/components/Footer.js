import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
 
`;

const Footer = ({ children }) => (
    <StyledFooter>
        {children}
    </StyledFooter>
);

export default Footer;