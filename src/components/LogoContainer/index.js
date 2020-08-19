import React from "react";
import styled, { css } from "styled-components";
import Logo from "./Logo"
import Title from "./Title"

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 70px 100px;
    text-decoration: none;
    color: inherit;
    transition: 0.5s;

    ${({ scroll }) => scroll && css`
    padding: 0px 50px;
    `
    }

    @media (max-width: 560px)
    {   
        padding: 10px 30px;

        ${({ scroll }) => scroll && css`
        padding: 0px 20px;
        `
        }
    }
    
@media (max-width: 320px)
    {   
        padding: 20px 20px;

        ${({ scroll }) => scroll && css`
        padding: 0px 10px;
        `
    }
    }
`;

const LogoContainer = ({ isScrolled }) => (
    <Container scroll={isScrolled} as="a" href="/">
        <Logo />
        <Title title="Veloserwis" />
    </Container>
);

export default LogoContainer;