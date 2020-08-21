import React, { useEffect } from "react";
import { useFetch } from "../../useFetch";
import { Item, Position, Price } from "./styled";
import { useLocalStorageState } from "../../useLocalStorageState";

const DiscBrakes = () => {

    const discBrakePriceData = useFetch("/wordpress/wp-json/acf/v3/pages/91");
    const [discBrakePrices, setDiscBrakePrices] = useLocalStorageState("GearInfo", discBrakePriceData.loading);

    useEffect(() => {
        let isActive = true;
        if (discBrakePriceData.response && isActive) {
            const details = discBrakePriceData.response.acf;
            const detailsList = Object.values(details);
            const detailsToSort = Array.from(detailsList);
            const detailsToRender = detailsToSort.filter(item => item.nazwa !== "");

            if (detailsToRender !== discBrakePrices) {
                setDiscBrakePrices(detailsToRender)
            };
        }
        else if (discBrakePriceData.error) {
            setDiscBrakePrices(discBrakePriceData.error);

        }
        return () => isActive = false;
        // eslint-disable-next-line
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