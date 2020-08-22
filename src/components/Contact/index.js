import React, { useEffect, useRef } from "react";
import { StyledContact, ContactContainer, Image, ContactItems } from "./styled"
import ContactItem from "./ContactItem";
import { useFetch } from "../../useFetch";
import { useShowOnScrollX } from "../../useShowOnScrollX";
import { useLocalStorageState } from "../../useLocalStorageState";

const Contact = () => {
    const contactData = useFetch("/wordpress/wp-json/acf/v3/pages/134");
    const contactDataPage = useFetch("/wordpress/wp-json/wp/v2/pages/134");
    const contactDataImage = useFetch("/wordpress/wp-json/wp/v2/media?parent=134");

    const [email, setEmail] = useLocalStorageState("Email", contactData.loading);
    const [adress, setAdress] = useLocalStorageState("Adress", contactData.loading);
    const [adressMore, setAdressMore] = useLocalStorageState("AdressMore", contactData.loading);
    const [phone, setPhone] = useLocalStorageState("phone", contactData.loading);
    const [hours, setHours] = useLocalStorageState("Hours", contactData.loading);
    const [hoursMore, setHoursMore] = useLocalStorageState("HoursMore", contactData.loading);

    const [contactImage, setContactImage] = useLocalStorageState("ContactImage", contactDataImage.loading);

    useEffect(() => {
        let isActive = true;
        if (contactDataPage.response && isActive) {
            const details = contactDataPage.response;
            const imageDataDetails = contactDataImage.response;
            if (imageDataDetails) {
                const imageID = imageDataDetails.find(({ id }) => id === (details.featured_media));
                if (imageID !== imageDataDetails) {
                    setContactImage(imageID.source_url);
                };
            };
        }
        else if (contactData.error) {
            setContactImage(contactData.error);
        }
        return () => isActive = false;
        // eslint-disable-next-line
    }, [contactDataImage.response]);

    useEffect(() => {
        let isActive = true;
        if (contactData.response && isActive) {
            const details = contactData.response;
            if (details.acf.email !== email) { setEmail(details.acf.email) };
            if (details.acf.adres !== adress) { setAdress(details.acf.adres) };
            if (details.acf.adres_cd !== adressMore) { setAdressMore(details.acf.adres_cd) };
            if (details.acf.telefon !== phone) { setPhone(details.acf.telefon) };
            if (details.acf.godziny_otwarcia !== hours) { setHours(details.acf.godziny_otwarcia) };
            if (details.acf.godziny_otwarcia_cd !== hoursMore) { setHoursMore(details.acf.godziny_otwarcia_cd) };
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

    const imageRef = useRef(null);
    const cardRef = useRef(null);

    useShowOnScrollX(imageRef.current, "+=100", imageRef.current, "top 90%");
    useShowOnScrollX(cardRef.current, "+=-100", cardRef.current, "top 90%");

    return (
        <StyledContact>
            <ContactContainer id="contact">
                <ContactItems ref={cardRef}>
                    <ContactItem image="📧" header="E-mail" text={email} />
                    <ContactItem image="🏬" header="Adres" text={adress} textContinous={adressMore} />
                    <ContactItem image="📱" header="Telefon" text={phone} />
                    <ContactItem image="📅" header="Godziny otwarcia" text={hours} textContinous={hoursMore} />
                </ContactItems>
                {contactDataImage.response && <Image
                    src={contactImage}
                    alt="image contact section"
                    ref={imageRef} />}
            </ContactContainer>
        </StyledContact >
    );
}

export default Contact;




