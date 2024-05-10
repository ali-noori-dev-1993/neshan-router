import "@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css";
import { useState } from "react";
import {
  GeolocationComponent,
  MapComponent,
  SearchComponent,
} from "./components";

export default function App() {
  const [coordinates, setCoordinates] = useState<mapboxgl.LngLatLike>([
    51.389, 35.6892,
  ]);

  return (
    <div className="w-full h-full relative">
      <GeolocationComponent onCoordinatesChange={setCoordinates} />
      <MapComponent coordinates={coordinates} />
      <SearchComponent coordinates={coordinates} />
    </div>
  );
}
