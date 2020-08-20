import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import pricingImage from "../images/pricing.jpg";
import { useFetch } from "../useFetch";
import { useShowOnScrollX } from "../useShowOnScrollX";
import { useShowOnScrollY } from "../useShowOnScrollY";

const StyledPricing = styled.div`
    background: url(${pricingImage});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    box-shadow: inset 0px 10px 20px -5px rgba(0,0,0,0.75);
    position: relative;
    overflow: hidden;
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
    padding: 100px 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
    max-width: 1200px;
    z-index: 1;
    @media (max-width: 768px)
        {
            padding: 50px 30px;
            grid-template-columns: auto;
        }
    @media (max-width: 360px)
        {
            padding: 30px 10px;
            grid-template-columns: auto;
        }
`;
const Card = styled.div`
    background: var(--secondary);
    padding: 5px 20px;
    width: 100%;
    box-shadow: 0px 0px 5px 1px #999;
    overflow: hidden;
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

const About = () => {

    const drivePriceData = useFetch("https://tomek86.000webhostapp.com/wp-json/acf/v3/pages/39");
    const [drivePrices, setDrivePrices] = useState(drivePriceData.loading);

    const gearPriceData = useFetch("https://tomek86.000webhostapp.com/wp-json/acf/v3/pages/88");
    const [gearPrices, setGearPrices] = useState(gearPriceData.loading);

    const rimBrakePriceData = useFetch("https://tomek86.000webhostapp.com/wp-json/acf/v3/pages/136");
    const [rimBrakePrices, setRimBrakePrices] = useState(rimBrakePriceData.loading);

    const discBrakePriceData = useFetch("https://tomek86.000webhostapp.com/wp-json/acf/v3/pages/91");
    const [discBrakePrices, setDiscBrakePrices] = useState(discBrakePriceData.loading);

    useEffect(() => {
        let isActive = true;
        if (drivePriceData.response && isActive) {
            const details = drivePriceData.response.acf;
            const detailsList = Object.values(details);
            const detailsToRender = Array.from(detailsList);
            setDrivePrices(detailsToRender.filter(item => item.nazwa !== ""));
        }
        else if (drivePriceData.error) {
            setDrivePrices(drivePriceData.error);

        }
        return () => isActive = false;
    }, [drivePriceData.response, drivePriceData.error]);

    useEffect(() => {
        let isActive = true;
        if (gearPriceData.response && isActive) {
            const details = gearPriceData.response.acf;
            const detailsList = Object.values(details);
            const detailsToRender = Array.from(detailsList);
            setGearPrices(detailsToRender.filter(item => item.nazwa !== ""));
        }
        else if (gearPriceData.error) {
            setGearPrices(gearPriceData.error);

        }
        return () => isActive = false;
    }, [gearPriceData.response, gearPriceData.error]);

    useEffect(() => {
        let isActive = true;
        if (rimBrakePriceData.response && isActive) {
            const details = rimBrakePriceData.response.acf;
            const detailsList = Object.values(details);
            const detailsToRender = Array.from(detailsList);
            setRimBrakePrices(detailsToRender.filter(item => item.nazwa !== ""));
        }
        else if (rimBrakePriceData.error) {
            setRimBrakePrices(rimBrakePriceData.error);

        }
        return () => isActive = false;
    }, [rimBrakePriceData.response, rimBrakePriceData.error]);

    useEffect(() => {
        let isActive = true;
        if (discBrakePriceData.response && isActive) {
            const details = discBrakePriceData.response.acf;
            const detailsList = Object.values(details);
            const detailsToRender = Array.from(detailsList);
            setDiscBrakePrices(detailsToRender.filter(item => item.nazwa !== ""));
        }
        else if (discBrakePriceData.error) {
            setDiscBrakePrices(discBrakePriceData.error);

        }
        return () => isActive = false;
    }, [discBrakePriceData.response, discBrakePriceData.error]);

    const pricingRef = useRef(null);
    const driveRef = useRef(null);
    const gearRef = useRef(null);
    const brakeRef = useRef(null);

    useShowOnScrollX(driveRef.current, "+=-100", pricingRef.current, "top 70%");
    useShowOnScrollY(gearRef.current, "+=100", pricingRef.current, "top 70%");
    useShowOnScrollX(brakeRef.current, "+=100", pricingRef.current, "top 70%");

    return (
        <StyledPricing>
            <PricingContainer id="pricing" ref={pricingRef}>
                <Card ref={driveRef}>
                    <Title>
                        Napęd
                    </Title>
                    <List>
                        {!(Array.isArray(drivePrices)) && drivePrices}
                        {Array.isArray(drivePrices) && drivePrices.map(item =>
                            <Item key={item.nazwa}>
                                <Position>
                                    {item.nazwa}
                                </Position>
                                <Price>
                                    {item.cena}
                                </Price>
                            </Item>
                        )}
                    </List>
                </Card>
                <Card ref={gearRef}>
                    <Title>
                        Przerzutki
                     </Title>
                    <List>
                        {!(Array.isArray(gearPrices)) && gearPrices}
                        {Array.isArray(gearPrices) && gearPrices.map(item =>
                            <Item key={item.nazwa}>
                                <Position>
                                    {item.nazwa}
                                </Position>
                                <Price>
                                    {item.cena}
                                </Price>
                            </Item>
                        )}
                    </List>
                </Card>
                <Card ref={brakeRef}>
                    <Title>
                        Hamulce
                    </Title>
                    <SubTitle>V-Breake/U-Brake/Cantilever/Szczękowe:</SubTitle>
                    <List>
                        {!(Array.isArray(rimBrakePrices)) && rimBrakePrices}
                        {Array.isArray(rimBrakePrices) && rimBrakePrices.map(item =>
                            <Item key={item.nazwa}>
                                <Position>
                                    {item.nazwa}
                                </Position>
                                <Price>
                                    {item.cena}
                                </Price>
                            </Item>
                        )}
                    </List>
                    <SubTitle>Tarczowe hydrauliczne/Tarczowe linkowe:</SubTitle>
                    <List>
                        {!(Array.isArray(discBrakePrices)) && discBrakePrices}
                        {Array.isArray(discBrakePrices) && discBrakePrices.map(item =>
                            <Item key={item.nazwa}>
                                <Position>
                                    {item.nazwa}
                                </Position>
                                <Price>
                                    {item.cena}
                                </Price>
                            </Item>
                        )}
                    </List>
                </Card>

            </PricingContainer >
        </StyledPricing >
    );
}
export default About;




