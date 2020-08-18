import React from "react";
import styled from "styled-components";
import MapElement from "./Map"

const StyledContact = styled.div`
    background: var(--secondaryDarken);
    box-shadow: inset 0px 10px 20px -5px rgba(0,0,0,0.75);
`;
const ContactContainer = styled.div`
    margin: 0 auto;
    padding: 100px 70px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 80px;
    max-width: 1200px;
    @media (max-width: 768px)
        {
            padding: 40px 20px;
            grid-gap: 40px;
            grid-template-columns: auto;
        }
`;

const MapContainer = styled.div`
    width: 100%;
`;
const ContactItems = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
    background: var(--secondary);
    border-radius: 5px;
    padding: 5px 20px;
    width: 100%;
    height: 400px;
    box-shadow: 0px 0px 5px 1px #999;

    @media (max-width: 768px)
        {
            margin-top: 400px;
            grid-template-columns: auto;
            height: 600px;
        }
`;
const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;
const ContactImage = styled.p`
    font-size: 26px;
    margin: 10px;
`;
const ContactHeader = styled.h3`
    font-family: 'Montserrat', sans-serif;
    color: var(--primary);
    font-weight: 700;
    margin: 5px;
`;
const ContactParapgraph = styled.p`
    font-size: 15px;
    margin: 5px;
`;

const ContactItem = ({ image, header, text, textContinous }) => (
    <Item>
        <ContactImage>
            {image}
        </ContactImage>
        <ContactHeader>
            {header}
        </ContactHeader>
        <ContactParapgraph>
            {text}
        </ContactParapgraph>
        <ContactParapgraph>
            {textContinous}
        </ContactParapgraph>
    </Item>
)

const Contact = () => (
    <StyledContact>
        <ContactContainer id="contact">
            <MapContainer>
                <MapElement />
            </MapContainer>
            <ContactItems>
                <ContactItem image="📧" header="E-mail" text="veloserwis@testwpapi.com" />
                <ContactItem image="🏬" header="Adres" text="Rzeszów" textContinous="ul. Owocowego Wtorku 45" />
                <ContactItem image="📱" header="Telefon" text="365-445-778" />
                <ContactItem image="📅" header="Godziny otwarcia" text="Pon - Pt: 10 - 18" textContinous="Sobota: 10 - 14" />
            </ContactItems>
        </ContactContainer>
    </StyledContact >
);

export default Contact;




