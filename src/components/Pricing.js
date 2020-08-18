import React from "react";
import styled from "styled-components";
import pricingImage from "../images/pricing.jpg"

const StyledPricing = styled.div`
    background: url(${pricingImage});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    box-shadow: inset 0px 10px 20px -5px rgba(0,0,0,0.75);
    position: relative;
    z-index: 0;
    &::after {
        content: "";
        background: #00000044;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`;
const PricingContainer = styled.div`
    margin: 0 auto;
    padding: 100px 70px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
    max-width: 1200px;
    z-index: 1;
    @media (max-width: 768px)
        {
            padding: 10px 20px;
            grid-template-columns: auto;
        }
`;
const Card = styled.div`
    background: var(--secondary);
    padding: 5px 20px;
    width: 100%;
    box-shadow: 0px 0px 5px 1px #999;
`;
const Title = styled.h3`
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    text-align: center;
`;

const List = styled.ul`
   list-style-type: none;
   padding: 0px;
`;
const Item = styled.li`
   display: flex;
   align-items: baseline;

   @media (max-width: 380px)
        {   
            align-items: center;
        }
   &::after {

        content: "";
        border-bottom: 1px dotted;
        flex-grow: 1;
        order: 2;
        margin: 0 2px;

        @media (max-width: 380px)
        {   
            border-bottom: none;
            align-items: center;
        }
        
   }
`;
const Position = styled.div`
   order: 1;
   font-size: 15px;
   line-height: 2;
`;
const Price = styled.div`
   font-size: 15px;
   order: 3;
   color: var(--primary);
   font-weight: 700;
`;
const SubTitle = styled.span`
   font-size: 15px;
   font-weight: 700;
`;

const About = () => (
    <StyledPricing>
        <PricingContainer id="pricing">
            <Card>
                <Title>
                    Napęd
               </Title>
                <List>
                    <Item>
                        <Position>Wymiana, naprawa łańcucha</Position>
                        <Price>10zł</Price>
                    </Item>
                    <Item>
                        <Position>Zakucie, skrócenie łańcucha</Position>
                        <Price>5zł</Price>
                    </Item>
                    <Item>
                        <Position>Smarowanie łańcucha</Position>
                        <Price>2zł</Price>
                    </Item>
                    <Item>
                        <Position>Wymiana kasety lub wolnobiegu</Position>
                        <Price>10zł</Price>
                    </Item>
                    <Item>
                        <Position>Wymiana korby</Position>
                        <Price>15zł</Price>
                    </Item>
                    <Item>
                        <Position>Wymiana pedałów</Position>
                        <Price>5zł</Price>

                    </Item>
                </List>
            </Card>
            <Card>
                <Title>
                    Przerzutki
               </Title>
                <List>
                    <Item>
                        <Position>Regulacja przerzutki p/t</Position>
                        <Price>10zł</Price>
                    </Item>
                    <Item>
                        <Position>Wymiana przerzutki p/t</Position>
                        <Price>20zł</Price>
                    </Item>
                    <Item>
                        <Position>Prostowanie haka przerzutki tylnej</Position>
                        <Price>20zł</Price>
                    </Item>
                    <Item>
                        <Position>Wymiana linki z pancerzem</Position>
                        <Price>20zł</Price>
                    </Item>
                    <Item>
                        <Position>Wymiana manetek</Position>
                        <Price>30zł/para</Price>
                    </Item>
                    <Item>
                        <Position>Wymiana klamkomanetek</Position>
                        <Price>50zł/para</Price>

                    </Item>
                </List>
            </Card>
            <Card>
                <Title>
                    Hamulce
               </Title>
                <SubTitle>V-Breake/U-Brake/Cantilever/Szczękowe:</SubTitle>
                <List>
                    <Item>
                        <Position>Regulacja hamulca</Position>
                        <Price>10zł</Price>
                    </Item>
                    <Item>
                        <Position>Wymiana klocków hamulcowych</Position>
                        <Price>15zł</Price>
                    </Item>
                    <Item>
                        <Position>Wymiana klamki hamulcowej</Position>
                        <Price>25zł</Price>
                    </Item>
                    <Item>
                        <Position>Wymiana linki i pancerza</Position>
                        <Price>20zł</Price>
                    </Item>
                </List>
                <SubTitle>Tarczowe hydrauliczne/Tarczowe linkowe:</SubTitle>
                <List>
                    <Item>
                        <Position>Regulacja hamulca</Position>
                        <Price>10zł</Price>
                    </Item>
                    <Item>
                        <Position>Prostowanie tarczy hamulcowej</Position>
                        <Price>15zł</Price>
                    </Item>
                    <Item>
                        <Position>Wymiana tarczy hamulcowej</Position>
                        <Price>15zł</Price>
                    </Item>
                    <Item>
                        <Position>Wymiana płynu hamulcowego</Position>
                        <Price>30zł</Price>
                    </Item>
                    <Item>
                        <Position>Wymiana przewodów hamulcowych</Position>
                        <Price>40zł</Price>
                    </Item>
                </List>
            </Card>

        </PricingContainer>
    </StyledPricing>
);

export default About;




