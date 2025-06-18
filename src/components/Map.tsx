"use client"
import dynamic from 'next/dynamic';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet
import 'leaflet/dist/leaflet.css';

// Custom icon URL
const customIconUrl = '/pin-dynamic.svg'; // Replace with your custom icon path

// Create a custom icon instance
const customIcon = new L.Icon({
  iconUrl: customIconUrl,
  iconSize: [50, 59], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  shadowUrl: '', // Optional: Replace with your shadow icon path
  shadowSize: [41, 41], // Size of the shadow
  shadowAnchor: [13, 41], // Point of the shadow which will correspond to marker's location
});

const Map = () => {
  const position = [35.770441, 51.455009]; 
// it's not the exact location
  return (
    <MapContainer center={position} zoom={15} className="h-96 w-full rounded-t-3xl">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default dynamic(() => Promise.resolve(Map), { ssr: false });
