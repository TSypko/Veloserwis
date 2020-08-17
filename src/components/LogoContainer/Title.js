import React from "react";
import styled from "styled-components";

const TitleName = styled.div`
    font-size: 32px;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
`;

const Title = ({ title }) => (
    <TitleName>
        { title }
    </TitleName>
);

export default Title;
