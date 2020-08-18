import React from "react";
import logo from "./logo.svg"
import styled from "styled-components";

const Image = styled.img`
    align-self: center;
    margin: 10px;
    width: 50px;
    filter: brightness(0%) invert(100%);
    @media (max-width: 560px)
        {   
            width: 40px;
        }
    @media (max-width: 320px)
        {   
            width: 30px;
        }
`;

const Logo = () => (
    <Image
        src={logo}
        alt="Logotype"
    />
);

export default Logo;