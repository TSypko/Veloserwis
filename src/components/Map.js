import React from "react";
import styled from "styled-components";
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

const MapElement = () => (
    <MapContainer>
       <iframe title="Veloserwis" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1077.4515871474516!2d22.004156287201862!3d50.03709998915204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1598107538268!5m2!1spl!2spl" frameBorder="0" style={style} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
    </MapContainer>
)

export default MapElement;