import nmp_mapboxgl from "@neshan-maps-platform/mapbox-gl";
import "@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css";
import { useEffect } from "react";

interface MapProps {
  coordinates: mapboxgl.LngLatLike;
}

export const MapComponent: React.FC<MapProps> = ({ coordinates }) => {
  useEffect(() => {
    new nmp_mapboxgl.Map({
      mapType: nmp_mapboxgl.Map.mapTypes.neshanVector,
      container: "map",
      zoom: 11,
      pitch: 0,
      center: coordinates,
      minZoom: 2,
      maxZoom: 21,
      trackResize: true,
      mapKey: "web.fcd433b8ddb9445eaf875e0fdc7f8c71",
      poi: true,
      traffic: false,
    });
  }, [coordinates]);

  return <div id="map" className="w-full h-full"></div>;
};
