import { Place } from "../types";
import PlaceItem from "./place-item";
import SectionSeparator from "./section-separator";

interface PlaceListProps {
  places: Place[];
}

export default function PlaceList({ places }: PlaceListProps) {
  return (
    <ul>
      {places.map((place, index) => (
        <div key={index}>
          <PlaceItem item={place} />
          {index < places.length - 1 && <SectionSeparator />}
        </div>
      ))}
    </ul>
  );
}
