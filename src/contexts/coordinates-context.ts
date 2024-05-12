import { createContext } from "react";

interface CoordinatesContextType {
  coordinates: mapboxgl.LngLatLike;
  setCoordinates: (coordinates: mapboxgl.LngLatLike) => void;
}

export const CoordinatesContext = createContext<CoordinatesContextType>(
  {} as CoordinatesContextType
);
