import React from "react";
import logo from "./logo.svg"
import styled from "styled-components";

const Image = styled.img`
    align-self: center;
    margin: 10px;
    width: 50px;
    filter: brightness(0%) invert(100%);
`;

const Logo = () => (
    <Image
        src={logo}
        alt="Logotype"
    />
);

export default Logo;