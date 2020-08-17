import React from "react";
import styled from "styled-components";
import Logo from "./Logo"
import Title from "./Title"

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 50px;
    text-decoration: none;
    color: inherit;
`;

const LogoContainer = () => (
    <Container as="a" href="/">
        <Logo />
        <Title title="Veloserwis"/>
    </Container>
);

export default LogoContainer;