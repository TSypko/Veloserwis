import React, { useState, useEffect } from "react";
import { useFetch } from "../../useFetch";
import {  Item, Position,  Price } from "./styled";

const Gear = () => {

    const gearPriceData = useFetch("https://tomek86.000webhostapp.com/wp-json/acf/v3/pages/88");
    const [gearPrices, setGearPrices] = useState(gearPriceData.loading);

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

    return (
        <>
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
        </>
    );
};

export default Gear;