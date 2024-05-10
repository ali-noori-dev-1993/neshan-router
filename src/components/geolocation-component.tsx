import { useEffect } from "react";

interface GeolocationProps {
  onCoordinatesChange: (coordinates: mapboxgl.LngLatLike) => void;
}

// This component retrieves the user's current geolocation coordinates using the browser's navigator API.
export const GeolocationComponent = ({
  onCoordinatesChange,
}: GeolocationProps) => {
  useEffect(() => {
    // Check if the browser supports geolocation
    if (navigator.geolocation) {
      // Retrieve the user's current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // onCoordinatesChange([longitude, latitude]);
        },
        (error) => {
          console.log("Error retrieving location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  }, [onCoordinatesChange]);

  return null;
};
