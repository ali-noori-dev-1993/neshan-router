import { useContext, useEffect } from "react";
import { CoordinatesContext } from "../contexts";

// This component retrieves the user's current geolocation coordinates using the browser's navigator API.
export const GeolocationComponent = () => {
  const { setCoordinates } = useContext(CoordinatesContext);

  useEffect(() => {
    // Check if the browser supports geolocation
    if (navigator.geolocation) {
      // Retrieve the user's current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates([longitude, latitude]);
        },
        (error) => {
          console.log("Error retrieving location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  }, [setCoordinates]);

  return null;
};
