import nmp_mapboxgl from "@neshan-maps-platform/mapbox-gl";
import "@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css";
import { useContext, useEffect } from "react";
import { CoordinatesContext, MapContext } from "../contexts";

export const MapComponent = () => {
  const { coordinates } = useContext(CoordinatesContext);
  const { setMap } = useContext(MapContext);
  const mapKey = process.env.REACT_APP_MAP_API_KEY;

  useEffect(() => {
    const map = new nmp_mapboxgl.Map({
      mapType: nmp_mapboxgl.Map.mapTypes.neshanVector,
      container: "map",
      zoom: 14,
      pitch: 0,
      center: coordinates,
      minZoom: 2,
      maxZoom: 21,
      trackResize: true,
      mapKey: mapKey ?? "",
      poi: true,
      traffic: false,
    });

    setMap(map);

    // const marker = new nmp_mapboxgl.Marker()
    //   .setLngLat([51.389, 35.6892])
    //   .addTo(map as any);

    // setTimeout(() => marker.remove(), 5000);
  }, [coordinates, setMap]);

  return <div id="map" className="w-full h-full"></div>;
};
