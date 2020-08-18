import React from "react";
import {Map, GoogleApiWrapper} from 'google-maps-react';

const style = {
    width: "100%",
    height: "400px"
    }
    const containerStyle = { 
        position: 'relative',
        width: '100%',
        height: '100%'
      }
const MapElement = () => (
    <div>
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
    </div>
)



export default GoogleApiWrapper({
    apiKey: ("AIzaSyBmWH2FzxWyJ23vsnG9bnbZXcnPqQ7qQns")
   })(MapElement);