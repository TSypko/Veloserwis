import React, { useEffect, useRef } from "react";
import { useFetch } from "../useFetch";
import styled from "styled-components";
import renderHTML from 'react-render-html';
import { useShowOnScrollX } from "../useShowOnScrollX";
import { useLocalStorageState } from "../useLocalStorageState";

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
    overflow: hidden;
    @media (max-width: 360px) {   
        padding: 20px;
    }
    @media (max-width: 768px) {   
        grid-template-columns: auto;
    }
    @media (max-width: 990px) {   
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

    @media (max-width: 360px)  {   
        padding: 5px 10px;
    }
`;

const Header = styled.h2`
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
`;
const Content = styled.span`
    @media (max-width: 320px)  {   
        font-size: 14px;
    }
`;

const About = () => {

    const aboutData = useFetch("/wordpress/wp-json/wp/v2/pages/141");
    const aboutDataImage = useFetch("/wordpress/wp-json/wp/v2/media?parent=141");

    const [aboutHeader, setAboutHeader] = useLocalStorageState("AboutHeader", aboutData.loading);
    const [aboutContent, setAboutContent] = useLocalStorageState("AboutContent", aboutData.loading);
    const [aboutImage, setAboutImage] = useLocalStorageState("AboutImage", aboutDataImage.loading);

    useEffect(() => {
        let isActive = true;
        if (aboutData.response && isActive) {
            const details = aboutData.response;
            const imageDataDetails = aboutDataImage.response;

            if (details.title.rendered !== aboutHeader) {
                setAboutHeader(details.title.rendered);
            };

            if (details.title.rendered !== aboutContent) {
                setAboutContent(details.content.rendered);
            };

            if (imageDataDetails) {
                const imageID = imageDataDetails.find(({ id }) => id === (details.featured_media));

                if (imageID !== imageDataDetails) {
                    setAboutImage(imageID.source_url);
                }
            };
        }
        else if (aboutData.error) {
            setAboutHeader(aboutData.error);
            setAboutContent(aboutData.error);
            setAboutImage(aboutData.error);
        }
        return () => isActive = false;
        // eslint-disable-next-line
    }, [aboutData.response, aboutData.error, aboutDataImage.response]);

    const imageRef = useRef(null);
    const cardRef = useRef(null);

    useShowOnScrollX(imageRef.current, "+=-100", imageRef.current, "top 90%");
    useShowOnScrollX(cardRef.current, "+=100", imageRef.current, "top 90%");

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
                    <Content>
                        {renderHTML(aboutContent)}
                    </Content>
                </Card>
            </AboutContainer>
        </StyledAbout>
    );
}

export default About;




