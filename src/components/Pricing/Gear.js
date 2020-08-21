import React, { useEffect } from "react";
import { useFetch } from "../../useFetch";
import { Item, Position, Price } from "./styled";
import { useLocalStorageState } from "../../useLocalStorageState";

const Gear = () => {

    const gearPriceData = useFetch("http://veloserwis.tomek86.atthost24.pl/wordpress/wp-json/acf/v3/pages/88");
    const [gearPrices, setGearPrices] = useLocalStorageState("DiscBrakesInfo", gearPriceData.loading);

    useEffect(() => {
        let isActive = true;
        if (gearPriceData.response && isActive) {
            const details = gearPriceData.response.acf;
            const detailsList = Object.values(details);
            const detailsToSort = Array.from(detailsList);
            const detailsToRender = detailsToSort.filter(item => item.nazwa !== "");

            if (detailsToRender !== gearPrices) {
                setGearPrices(detailsToRender)
            };
        }
        else if (gearPriceData.error) {
            setGearPrices(gearPriceData.error);

        }
        return () => isActive = false;
        // eslint-disable-next-line
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