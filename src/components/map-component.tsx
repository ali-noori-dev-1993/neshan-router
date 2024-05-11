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

    const popup = new nmp_mapboxgl.Popup({ offset: 25 }).setText("مکان شما");

    new nmp_mapboxgl.Marker({ color: "#1975d2" })
      .setPopup(popup)
      .setLngLat(coordinates)
      .addTo(map as any)
      .togglePopup();

    setMap(map);
  }, [coordinates, setMap]);

  return <div id="map" className="w-full h-full"></div>;
};
