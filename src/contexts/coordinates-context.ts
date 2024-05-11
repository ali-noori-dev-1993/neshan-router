import { createContext } from "react";

interface coordinatesContext {
  coordinates: mapboxgl.LngLatLike;
  setCoordinates: React.Dispatch<React.SetStateAction<mapboxgl.LngLatLike>>;
}

export const CoordinatesContext = createContext<coordinatesContext>(
  {} as coordinatesContext
);
