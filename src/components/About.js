import React, { useState, useEffect, useRef } from "react";
import { useFetch } from "../useFetch";
import styled from "styled-components";
import renderHTML from 'react-render-html';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    max-width: 100%;
    max-height: 100%;
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

const About = () => {

    const imageRef = useRef(null);
    const cardRef = useRef(null);


    useEffect(() => {
      
        gsap.fromTo(imageRef.current, { x: '+=-100', opacity: 0 }, {
            x: 0, opacity: 1, duration: 1, ease: 'easeInOut', scrollTrigger: {
                trigger: imageRef.current,
                start: 'top 90%',
                markers: true,
            }
        });
        gsap.fromTo(cardRef.current, { x: '+=100', opacity: 0 }, {
            x: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'easeInOut', scrollTrigger: {
                trigger: cardRef.current,
                start: 'top 90%',
                markers: true,
            }
        });
    }, []);

    const aboutData = useFetch("https://tomek86.000webhostapp.com/wp-json/wp/v2/pages/141");
    const aboutDataImage = useFetch("https://tomek86.000webhostapp.com/wp-json/wp/v2/media?parent=141");

    const [aboutHeader, setAboutHeader] = useState(aboutData.loading);
    const [aboutContent, setAboutContent] = useState(aboutData.loading);
    const [aboutImage, setAboutImage] = useState(aboutDataImage.loading);

    useEffect(() => {
        let isActive = true;
        if (aboutData.response && isActive) {
            const details = aboutData.response;
            const imageDataDetails = aboutDataImage.response;
            setAboutHeader(details.title.rendered);
            setAboutContent(details.content.rendered);
            if (imageDataDetails) {
                const imageID = imageDataDetails.find(({ id }) => id === (details.featured_media))
                setAboutImage(imageID.source_url);
            }
        }
        else if (aboutData.error) {
            setAboutHeader(aboutData.error);
            setAboutContent(aboutData.error);
            setAboutImage(aboutData.error);
        }
        return () => isActive = false;
    }, [aboutData.response, aboutData.error, aboutDataImage.response]);

    return (
        <StyledAbout>
            <AboutContainer id="about">
                <Image
                    src={aboutImage}
                    alt="image of about section"
                    ref={imageRef} />
                <Card ref={cardRef}>
                    <Header>
                        {aboutHeader}
                    </Header>
                    <Paragraph>
                        {renderHTML(aboutContent)}
                    </Paragraph>
                </Card>
            </AboutContainer>
        </StyledAbout>
    );
}

export default About;




