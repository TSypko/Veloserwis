import React from "react";
import styled from "styled-components";

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
);

export default ContactItem;