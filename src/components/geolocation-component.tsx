import nmp_mapboxgl from "@neshan-maps-platform/mapbox-gl";
import { LngLatLike } from "mapbox-gl";
import { useContext, useEffect } from "react";
import { CoordinatesContext, MapContext } from "../contexts";

// This component retrieves the user's current geolocation coordinates using the browser's navigator API.
export const GeolocationComponent = () => {
  const { coordinates, setCoordinates } = useContext(CoordinatesContext);
  const { map } = useContext(MapContext);

  useEffect(() => {
    // Check if the browser supports geolocation
    if (navigator.geolocation) {
      // Retrieve the user's current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userCoordinates: LngLatLike = [longitude, latitude];
          setCoordinates(userCoordinates);
          map?.setCenter(userCoordinates);
        },
        (error) => {
          console.log("Error retrieving location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  }, [setCoordinates, map]);

  // Creates a marker on the map representing the user's current location.
  useEffect(() => {
    let marker: mapboxgl.Marker | undefined;
    if (map) {
      const popup = new nmp_mapboxgl.Popup({ offset: 30 }).setText("مکان شما");

      marker = new nmp_mapboxgl.Marker({ color: "#f05e60" })
        .setPopup(popup)
        .setLngLat(coordinates)
        .addTo(map as any)
        .togglePopup();
    }

    return () => {
      marker?.remove();
    };
  }, [coordinates, map]);

  return null;
};
