import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
    margin: 0 auto;
`;

const Section = ({ body }) => (
    <StyledSection>
        {body}
    </StyledSection>
);

export default Section;