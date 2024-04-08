import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: "50vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: -25.394456, // Latitude do Cine XV em Guarapuava
    lng: -51.461515 // Longitude do Cine XV em Guarapuava
  };

  

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAsncgEyIfDGWY972qNIjlzmOWGK9WHr9k"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14}
        center={defaultCenter}
      >
        {/* Conteúdo adicional do mapa, como marcadores, polígonos, etc., pode ser adicionado aqui */}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
