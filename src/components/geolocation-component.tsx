import { useEffect } from "react";

interface GeolocationProps {
  onCoordinatesChange: (coordinates: mapboxgl.LngLatLike) => void;
}

export const GeolocationComponent: React.FC<GeolocationProps> = ({
  onCoordinatesChange,
}) => {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onCoordinatesChange([longitude, latitude]);
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
