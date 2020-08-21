import React, { useEffect, useRef } from "react";
import { StyledContact, ContactContainer, MapContainer, ContactItems } from "./styled"
import ContactItem from "../ContactItem";
import MapElement from "../Map";
import { useFetch } from "../../useFetch";
import { useShowOnScrollX } from "../../useShowOnScrollX";
import { useLocalStorageState } from "../../useLocalStorageState";

const Contact = () => {
    const contactData = useFetch("/wordpress/wp-json/acf/v3/pages/134");

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




