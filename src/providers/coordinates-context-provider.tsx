import React, { useState } from "react";
import { CoordinatesContext } from "../contexts";

export function CoordinatesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [coordinates, setCoordinates] = useState<mapboxgl.LngLatLike>([
    51.389, 35.6892,
  ]);

  return (
    <CoordinatesContext.Provider value={{ coordinates, setCoordinates }}>
      {children}
    </CoordinatesContext.Provider>
  );
}
