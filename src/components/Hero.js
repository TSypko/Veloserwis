



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
    padding: 10px 30px;
    background: #00000055;
    color: var(--secondary);
    border: 1px solid var(--secondary);
    border-radius: 5px;
    text-transform: uppercase;
    transition: 300ms;
    animation: pulse 2s infinite;
    &:hover {
        transform: scale(1.2);
        color: var(--primary);
        font-weight: 700;
        animation: stop;
    }
    @keyframes pulse {
        0%   { transform: scale(1); }
        50%  { transform: scale(1.2); }
        100% { transform: scale(1); }
}
`;
const Header = styled.h1`
    padding: 20px 40px;
    background: #00000033;
    border-radius: 5px;  
    text-align: center;
    letter-spacing: 1px;
    color: var(--secondary);
    margin: 50px;
`;

const Hero = () => (
    <StyledHero>
        <DarkenHero>
            <Header>Najlepszy serwis rowerowy w Twoim mieście</Header>
            <Button as="a" href="/">Poznaj nas</Button>
        </DarkenHero>
    </StyledHero>
);

export default Hero;




