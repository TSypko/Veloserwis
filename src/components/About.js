import React from "react";
import styled from "styled-components";
import aboutImage from "../images/about.jpg"

const StyledAbout = styled.div`
    background: var(--secondaryDarken);
    box-shadow: inset 0px 10px 20px -5px rgba(0,0,0,0.75);
`;
const AboutContainer = styled.div`
    margin: 0 auto;
    padding: 100px 70px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 80px;
    align-items: center;
    max-width: 1200px;
    @media (max-width: 360px)
        {   
            padding: 20px;
        }
    @media (max-width: 768px)
        {   
            grid-template-columns: auto;
        }
    @media (max-width: 990px)
        {   
            grid-gap: 40px;
        }
`;
const Image = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-shadow: 0px 0px 5px 1px #999;
`;
const Card = styled.div`
    background: var(--secondary);
    padding: 10px 30px;
    width: 100%;
    box-shadow: 0px 0px 5px 1px #999;

    @media (max-width: 360px)
        {   
            padding: 5px 10px;
        }
`;

const Header = styled.h2`
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
`;
const Paragraph = styled.p`
    @media (max-width: 320px)
        {   
            font-size: 14px;
        }
`;

const About = () => (
    <StyledAbout>
        <AboutContainer id="about">
            <Image src={aboutImage} />
            <Card>
                <Header>
                    O nas
                </Header>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis turpis non leo pulvinar pellentesque. Nullam tempus ornare scelerisque. Aenean id gravida nisi. Cras nisl sapien, mattis vitae dapibus vel, vestibulum et odio. Vivamus facilisis
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis turpis non leo pulvinar pellentesque. Nullam tempus ornare scelerisque. Aenean id gravida nisi. Cras nisl sapien, mattis vitae dapibus vel, vestibulum et odio. Vivamus facilisis
                </Paragraph>
            </Card>
        </AboutContainer>
    </StyledAbout>
);

export default About;




