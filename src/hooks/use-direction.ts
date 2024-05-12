import { useContext } from "react";
import { fetchDirection } from "../api";
import { CoordinatesContext, MapContext } from "../contexts";
import { toastService } from "../toast";
import { Place } from "../types";
import { addMarkers, showDirectionsOnMap } from "../utils";

export function useDirection() {
  const { map } = useContext(MapContext);
  const { coordinates } = useContext(CoordinatesContext);

  const getDirectionData = async (item: Place) => {
    try {
      const direction = await fetchDirection({
        origin: [...(coordinates as [number, number])].reverse().toString(),
        destination: `${item.location.y},${item.location.x}`,
      });

      if (!direction) toastService.error("مسیریابی با خطا مواجه شد");
      else {
        addMarkers([item], map);
        showDirectionsOnMap(direction, map);
      }
    } catch (error) {
      console.error("Error fetching direction:", error);
      toastService.error("مسیریابی با خطا مواجه شد");
    }
  };

  return getDirectionData;
}
