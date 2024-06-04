import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

// Estilos para o contêiner do mapa
const mapStyles = {
  height: "50vh",
  width: "100%"
};

// Coordenadas do centro do mapa (Cine XV em Guarapuava)
const defaultCenter = {
  lat: -25.394456, // Latitude do Cine XV em Guarapuava
  lng: -51.461515 // Longitude do Cine XV em Guarapuava
};

const MapContainer = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAsncgEyIfDGWY972qNIjlzmOWGK9WHr9k">
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
