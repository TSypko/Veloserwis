import React from "react";
import styled from "styled-components";
import background from "../images/background.jpg";

const StyledHero = styled.div`
    background: url(${background});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
`;
const DarkenHero = styled.div`
    background: #000000AA;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
`;
const Button = styled.button`
    margin-top: 50px;
    padding: 10px 30px;
    background: #00000055;
    color: var(--secondary);
    border: 1px solid var(--secondary);
    border-radius: 5px;
    text-transform: uppercase;
    transition: 300ms;
    animation: pulse 2s infinite;
    &:hover {
        animation-play-state: paused;
        color: var(--primary);
        font-weight: 700;
    }
    @keyframes pulse {
        0%   { transform: scale(1); }
        50%  { transform: scale(1.2); }
        100% { transform: scale(1); }
}
`;
const HeaderContainer = styled.div`
    padding: 20px 40px;
    background: #00000033;
    letter-spacing: 1px;
    text-align: center;
    font-size: 36px;
    border-radius: 15px;
`;
const Header = styled.h1`
    font-weight: 500;
    color: var(--primary);
    font-size: 48px;
`;
const HeaderCaption = styled.span`
    font-weight: 300; 
    color: var(--secondary);
`;

const Hero = () => (
    <StyledHero>
        <DarkenHero>
            <HeaderContainer>
            <HeaderCaption>
                Najlepszy
            </HeaderCaption>
            <Header>
                serwis rowerowy
            </Header>
            <HeaderCaption>
                w Twoim mieście
            </HeaderCaption>
            </HeaderContainer>
            <Button as="a" href="#about">Poznaj nas</Button>
        </DarkenHero>
    </StyledHero>
);

export default Hero;




