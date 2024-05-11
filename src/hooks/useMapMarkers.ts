import nmp_mapboxgl from "@neshan-maps-platform/mapbox-gl";
import { useContext, useState } from "react";
import { MapContext } from "../contexts";
import { Place } from "../types";

export function useMapMarkers() {
  const [markerList, setMarkerList] = useState<mapboxgl.Marker[]>([]);
  const { map } = useContext(MapContext);

  const addMarkers = (places: Place[]) => {
    const markers: mapboxgl.Marker[] = [];

    places.forEach((item) => {
      const marker = new nmp_mapboxgl.Marker()
        .setLngLat([item.location.x, item.location.y])
        .addTo(map as any);

      markers.push(marker);
    });

    setMarkerList(markers);
  };

  const removeMarkers = () => markerList.forEach((marker) => marker.remove());

  return { addMarkers, removeMarkers };
}
