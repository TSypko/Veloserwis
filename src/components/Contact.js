import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import MapElement from "./Map";
import { useFetch } from "../useFetch";
import { useShowOnXScroll } from "../useShowOnXScroll";

const StyledContact = styled.div`
    background: var(--secondaryDarken);
    box-shadow: inset 0px 10px 20px -5px rgba(0,0,0,0.75);
    overflow: hidden;
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

const Contact = () => {
    const contactData = useFetch("https://tomek86.000webhostapp.com/wp-json/acf/v3/pages/6");

    useEffect(() => {
        let isActive = true;
        if (contactData.response && isActive) {
            const contactDataDetails = contactData.response;
            setEmail(contactDataDetails.acf.email);
            setAdress(contactDataDetails.acf.adres);
            setAdressMore(contactDataDetails.acf.adres_cd);
            setPhone(contactDataDetails.acf.telefon);
            setHours(contactDataDetails.acf.godziny_otwarcia);
            setHoursMore(contactDataDetails.acf.godziny_otwarcia_cd);
        }
        else if (contactData.error) {
            setEmail(contactData.error);
            setAdress(contactData.error);
            setAdressMore(contactData.error);
            setPhone(contactData.error);
            setHours(contactData.error);
            setHoursMore(contactData.error);
        }
        return () => isActive = false;
    }, [contactData.response, contactData.error]);

    const [email, setEmail] = useState(contactData.loading);
    const [adress, setAdress] = useState(contactData.loading);
    const [adressMore, setAdressMore] = useState(contactData.loading);
    const [phone, setPhone] = useState(contactData.loading);
    const [hours, setHours] = useState(contactData.loading);
    const [hoursMore, setHoursMore] = useState(contactData.loading);

    const mapRef = useRef(null);
    const cardRef = useRef(null);

    useShowOnXScroll(mapRef.current, "+=-100", mapRef.current, "top 90%");
    useShowOnXScroll(cardRef.current, "+=100", cardRef.current, "top 90%");

    return (
        <StyledContact>
            <ContactContainer id="contact">
                <MapContainer ref={mapRef}>
                    <MapElement />
                </MapContainer>
                <ContactItems ref={cardRef}>
                    <ContactItem image="📧" header="E-mail" text={email} />
                    <ContactItem image="🏬" header="Adres" text={adress} textContinous={adressMore} />
                    <ContactItem image="📱" header="Telefon" text={phone} />
                    <ContactItem image="📅" header="Godziny otwarcia" text={hours} textContinous={hoursMore} />
                </ContactItems>
            </ContactContainer>
        </StyledContact >
    );
}

export default Contact;




