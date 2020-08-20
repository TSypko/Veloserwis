import React, { useRef } from "react";
import styled from "styled-components";
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import messenger from "../images/messenger.svg"
import twitter from "../images/twitter.svg"
import { useShowOnYScroll } from "../useShowOnYScroll";

const StyledSocialInfo = styled.div`
    background: #222;
    box-shadow: 0px -10px 20px -5px rgba(0,0,0,0.75);
    overflow: hidden;
`;

const SocialInfoContainer = styled.div`
    text-align: center;
    padding: 5px;
`;

const SocialTitle = styled.h3`
    color: var(--primary);
    text-transform: uppercase;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    padding: 5px;
    margin: 0;
    font-size: 12px;
`;

const SocialIconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px auto;
    max-width: 600px;
`;

const SocialLogo = styled.img`
    width: 30px;
    margin: 0px 10px;
    filter: brightness(0%) invert(100%);
    &:hover {
        filter: 
            invert(51%) 
            sepia(67%) 
            saturate(3579%) 
            hue-rotate(330deg) 
            brightness(102%) 
            contrast(102%);
    }
`;

const SocialCaption = styled.p`
    color: var(--primary);
    text-transform: uppercase;
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    text-align: center;
    padding: 5px;
    margin: 0;
`;


const Contact = () => {

    const footerRef = useRef(null);
    useShowOnYScroll(footerRef.current, "+=100", footerRef.current, "top 95%");

    return (
        <StyledSocialInfo>
            <SocialInfoContainer ref={footerRef}>
                <SocialTitle>Znajdź nas na</SocialTitle>
                <SocialIconsContainer>
                    <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <SocialLogo src={facebook} alt="Facebok Icon" />
                    </a>
                    <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <SocialLogo src={instagram} alt="Instagram Icon" />
                    </a>
                    <a href="http://www.messenger.com" target="_blank" rel="noopener noreferrer">
                        <SocialLogo src={messenger} alt="Messenger Icon" />
                    </a>
                    <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <SocialLogo src={twitter} alt="Twitter Icon" />
                    </a>
                </SocialIconsContainer>
                <SocialCaption>Tomasz Sypko &copy; 2020</SocialCaption>
            </SocialInfoContainer>
        </StyledSocialInfo>
    );
}
export default Contact;




