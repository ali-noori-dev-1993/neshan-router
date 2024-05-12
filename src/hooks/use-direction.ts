import { useContext } from "react";
import { fetchDirection } from "../api";
import { CoordinatesContext, MapContext } from "../contexts";
import { Place } from "../types";
import { addMarkers, showDirectionsOnMap } from "../utils";

export function useDirection() {
  const { map } = useContext(MapContext);
  const { coordinates } = useContext(CoordinatesContext);

  const getDirectionData = async (item: Place) => {
    const direction = await fetchDirection({
      origin: [...(coordinates as [number, number])].reverse().toString(),
      destination: `${item.location.y},${item.location.x}`,
    });

    addMarkers([item], map);
    showDirectionsOnMap(direction, map);
  };

  return getDirectionData;
}
