import styled from "styled-components";

export const StyledContact = styled.div`
background: var(--secondaryDarken);
box-shadow: inset 0px 10px 20px -5px rgba(0,0,0,0.75);
overflow: hidden;
`;
export const ContactContainer = styled.div`
margin: 0 auto;
padding: 100px 70px;
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
grid-gap: 80px;
max-width: 1200px;
@media (max-width: 768px)
    {
        padding: 40px 20px;
        grid-gap: 40px;
        grid-template-columns: auto;
    }
`;

export const Image = styled.img`
display: flex;
justify-content: center;
align-items: center;
max-width: 100%;
max-height: 100%;
box-shadow: 0px 0px 5px 1px #999;
`;

export const ContactItems = styled.div`
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