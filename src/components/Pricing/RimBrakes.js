import React, { useEffect } from "react";
import { useFetch } from "../../useFetch";
import { Item, Position, Price } from "./styled";
import { useLocalStorageState } from "../../useLocalStorageState";

const RimBrakes = () => {

    const rimBrakePriceData = useFetch("https://tomek86.000webhostapp.com/wp-json/acf/v3/pages/136");
    const [rimBrakePrices, setRimBrakePrices] = useLocalStorageState("RimBrakesInfo", rimBrakePriceData.loading);

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
        // eslint-disable-next-line
    }, [rimBrakePriceData.response, rimBrakePriceData.error]);

    return (
        <>
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
        </>
    );
};

export default RimBrakes;