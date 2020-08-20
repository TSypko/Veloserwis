import React, { useRef } from "react";
import { StyledPricing, PricingContainer, Card, Title, List, Subtitle } from "./styled";
import { useShowOnScrollX } from "../../useShowOnScrollX";
import { useShowOnScrollY } from "../../useShowOnScrollY";
import Drive from "./Drive";
import Gear from "./Gear";
import RimBrakes from "./RimBrakes";
import DiscBrakes from "./DiscBrakes";

const About = () => {

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
                        <Drive />
                    </List>
                </Card>
                <Card ref={gearRef}>
                    <Title>
                        Przerzutki
                     </Title>
                    <List>
                        <Gear />
                    </List>
                </Card>
                <Card ref={brakeRef}>
                    <Title>
                        Hamulce
                    </Title>
                    <Subtitle>V-Breake/U-Brake/Cantilever/Szczękowe:</Subtitle>
                    <List>
                        <RimBrakes />
                    </List>
                    <Subtitle>Tarczowe hydrauliczne/Tarczowe linkowe:</Subtitle>
                    <List>
                        <DiscBrakes />
                    </List>
                </Card>

            </PricingContainer >
        </StyledPricing >
    );
}
export default About;




