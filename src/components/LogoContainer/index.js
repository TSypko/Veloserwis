import React from "react";
import styled from "styled-components";
import Logo from "./Logo"
import Title from "./Title"

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 50px;
    text-decoration: none;
    color: inherit;
    @media (max-width: 560px)
        {   
            padding: 0px 20px;
        }
    @media (max-width: 320px)
    {   
        padding: 0px;
    }
`;

const LogoContainer = () => (
    <Container as="a" href="/">
        <Logo />
        <Title title="Veloserwis"/>
    </Container>
);

export default LogoContainer;