import React, { useState, useEffect } from "react";
import { useFetch } from "../../useFetch";
import { Item, Position, Price } from "./styled";

const DiscBrakes = () => {

    const discBrakePriceData = useFetch("https://tomek86.000webhostapp.com/wp-json/acf/v3/pages/91");
    const [discBrakePrices, setDiscBrakePrices] = useState(discBrakePriceData.loading);

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

    return (
        <>
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
        </>
    );
};

export default DiscBrakes;