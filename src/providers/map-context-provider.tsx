import React, { useState } from "react";
import { MapContext } from "../contexts";
import { NeshanMap } from "../types";

export function MapContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [map, setMap] = useState<NeshanMap | null>(null);

  return (
    <MapContext.Provider value={{ map, setMap }}>
      {children}
    </MapContext.Provider>
  );
}
