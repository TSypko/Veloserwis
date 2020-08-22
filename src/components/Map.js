import React from "react";
import styled from "styled-components";
import { Map, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = styled.div`
    width: 100%;
    height: 400px;
    box-shadow:  0px -10px 20px -5px rgba(0,0,0,0.75);
    @media (max-width: 360px)
        {
            height: 300px;
        }
`;

const style = {
    width: "100%",
    height: "100%"
}
const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%'
}
const MapElement = () => (
    <MapContainer>
        <Map
            containerStyle={containerStyle}
            google={window.google}
            style={style}
            initialCenter={{
                lat: 50.037464,
                lng: 22.004763
            }}
            zoom={15}
        />
    </MapContainer>
)



export default GoogleApiWrapper({
    apiKey: ("AIzaSyBmWH2FzxWyJ23vsnG9bnbZXcnPqQ7qQns")
})(MapElement);