import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { useFetch } from "../useFetch";
import { useLocalStorageState } from "../useLocalStorageState";

const Head = () => {

    const wpMainData = useFetch("http://veloserwis.tomek86.atthost24.pl/wordpress/wp-json/");

    const [title, setTitle] = useLocalStorageState("HeadTitle", wpMainData.loading);
    const [description, setDescription] = useLocalStorageState("MetaDescription", wpMainData.loading);

    useEffect(() => {
        let isActive = true;
        if (wpMainData.response && isActive) {
            const details = wpMainData.response;

            if (details.name !== title) {
                setTitle(details.name);
            };

            if (details.description !== description) {
                setDescription(details.description);

            };
        }
        else if (wpMainData.error) {
            setTitle(wpMainData.error);
            setDescription(wpMainData.error);
        }
        return () => isActive = false;
        // eslint-disable-next-line
    }, [wpMainData.response, wpMainData.error]);

    return (
        <Helmet>
            <meta name="description" content={description} />
            <title>{title}</title>
        </Helmet>

    );
};

export default Head;