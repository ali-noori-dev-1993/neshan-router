import "@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css";
import SDKMap from "@neshan-maps-platform/mapbox-gl/dist/src/core/Map";
import { useState } from "react";
import {
  GeolocationComponent,
  MapComponent,
  SearchComponent,
} from "./components";
import { CoordinatesContext, MapContext } from "./contexts";

export default function App() {
  const [map, setMap] = useState<SDKMap | null>(null);
  const [coordinates, setCoordinates] = useState<mapboxgl.LngLatLike>([
    51.389, 35.6892,
  ]);

  return (
    <div className="w-full h-full relative">
      <MapContext.Provider value={{ map, setMap }}>
        <CoordinatesContext.Provider value={{ coordinates, setCoordinates }}>
          <GeolocationComponent />
          <MapComponent />
          <SearchComponent />
        </CoordinatesContext.Provider>
      </MapContext.Provider>
    </div>
  );
}
