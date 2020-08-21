import React, { useEffect } from "react";
import { useFetch } from "../../useFetch";
import { Item, Position, Price } from "./styled";
import { useLocalStorageState } from "../../useLocalStorageState";

const Drive = () => {

    const drivePriceData = useFetch("https://tomek86.000webhostapp.com/wp-json/acf/v3/pages/39");
    const [drivePrices, setDrivePrices] = useLocalStorageState("DriveInfo", drivePriceData.loading);

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
        // eslint-disable-next-line
    }, [drivePriceData.response, drivePriceData.error]);

    return (
        <>
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
        </>
    );
};

export default Drive;