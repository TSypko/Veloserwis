import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import MapElement from "./Map";
import { useFetch } from "../useFetch";
import { useShowOnScrollX } from "../useShowOnScrollX";
import { useLocalStorageState } from "../useLocalStorageState";

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
    const contactData = useFetch("http://veloserwis.tomek86.atthost24.pl/wordpress/wp-json/acf/v3/pages/134");

    const [email, setEmail] = useLocalStorageState("Email", contactData.loading);
    const [adress, setAdress] = useLocalStorageState("Adress", contactData.loading);
    const [adressMore, setAdressMore] = useLocalStorageState("AdressMore", contactData.loading);
    const [phone, setPhone] = useLocalStorageState("phone", contactData.loading);
    const [hours, setHours] = useLocalStorageState("Hours", contactData.loading);
    const [hoursMore, setHoursMore] = useLocalStorageState("HoursMore", contactData.loading);

    useEffect(() => {
        let isActive = true;
        if (contactData.response && isActive) {
            const contactDataDetails = contactData.response;
            if (contactDataDetails.acf.email !== email) { setEmail(contactDataDetails.acf.email) };
            if (contactDataDetails.acf.adres !== adress) { setAdress(contactDataDetails.acf.adres) };
            if (contactDataDetails.acf.adres_cd !== adressMore) { setAdressMore(contactDataDetails.acf.adres_cd) };
            if (contactDataDetails.acf.telefon !== phone) { setPhone(contactDataDetails.acf.telefon) };
            if (contactDataDetails.acf.godziny_otwarcia !== hours) { setHours(contactDataDetails.acf.godziny_otwarcia) };
            if (contactDataDetails.acf.godziny_otwarcia_cd !== hoursMore) { setHoursMore(contactDataDetails.acf.godziny_otwarcia_cd) };
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
        // eslint-disable-next-line
    }, [contactData.response, contactData.error]);

    const mapRef = useRef(null);
    const cardRef = useRef(null);

    useShowOnScrollX(mapRef.current, "+=-100", mapRef.current, "top 90%");
    useShowOnScrollX(cardRef.current, "+=100", cardRef.current, "top 90%");

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




