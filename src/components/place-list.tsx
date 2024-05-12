import { Place } from "../types";
import PlaceItem from "./place-item";
import SectionSeparator from "./section-separator";

interface PlaceListProps {
  places: Place[];
  setSelectedPlace: (place: Place) => void;
}

export default function PlaceList({
  places,
  setSelectedPlace,
}: PlaceListProps) {
  return (
    <ul>
      {places.map((place, index) => (
        <div key={index}>
          <PlaceItem item={place} setSelectedPlace={setSelectedPlace} />
          {index < places.length - 1 && <SectionSeparator />}
        </div>
      ))}
    </ul>
  );
}
