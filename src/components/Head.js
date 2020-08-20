import React from 'react';
import { Helmet } from "react-helmet";
import { useFetch } from "../useFetch";

const Head = () => {

    const wpMainData = useFetch("https://tomek86.000webhostapp.com/wp-json/");

    return (
        <Helmet>
            <meta name="description" content={wpMainData.response && wpMainData.response.description} /> 
            <title>{wpMainData.response && wpMainData.response.name}</title>
        </Helmet>

    );
};

export default Head;