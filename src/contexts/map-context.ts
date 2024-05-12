import { createContext } from "react";
import { NeshanMap } from "../types";

interface MapContextType {
  map: NeshanMap | null;
  setMap: (map: NeshanMap | null) => void;
}

export const MapContext = createContext<MapContextType>({} as MapContextType);
