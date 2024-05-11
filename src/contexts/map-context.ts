import SDKMap from "@neshan-maps-platform/mapbox-gl/dist/src/core/Map";
import { createContext } from "react";

interface mapContext {
  map: SDKMap | null;
  setMap: React.Dispatch<React.SetStateAction<SDKMap | null>>;
}

export const MapContext = createContext<mapContext>({} as mapContext);
