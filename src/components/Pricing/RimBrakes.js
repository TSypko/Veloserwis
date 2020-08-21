import React, { useEffect } from "react";
import { useFetch } from "../../useFetch";
import { Item, Position, Price } from "./styled";
import { useLocalStorageState } from "../../useLocalStorageState";

const RimBrakes = () => {

    const rimBrakePriceData = useFetch("/wordpress/wp-json/acf/v3/pages/136");
    const [rimBrakePrices, setRimBrakePrices] = useLocalStorageState("RimBrakesInfo", rimBrakePriceData.loading);

    useEffect(() => {
        let isActive = true;
        if (rimBrakePriceData.response && isActive) {
            const details = rimBrakePriceData.response.acf;
            const detailsList = Object.values(details);
            const detailsToSort = Array.from(detailsList);
            const detailsToRender = detailsToSort.filter(item => item.nazwa !== "");

            if (detailsToRender !== rimBrakePrices) {
                setRimBrakePrices(detailsToRender)
            };
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