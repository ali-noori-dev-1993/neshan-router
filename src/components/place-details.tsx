import { Place } from "../types";
import PlaceDetailsTabs from "./place-details-tabs";
import PlaceInfo from "./place-info";

interface PlaceDetailProps {
  place: Place | null;
}

const addPhotoCn =
  "absolute bottom-[-16px] left-3 bg-white p-[6px] rounded-full cursor-pointer border-2 border-[#78737a] shadow-[0_3px_6px_rgba(0,0,0,.16),0_3px_6px_rgba(0,0,0,.23)]";

export default function PlaceDetails({ place }: PlaceDetailProps) {
  if (!place) return null;
  return (
    <div className="">
      <div className="relative shadow-[0_-7px_10px_7px_#bdbdbd]">
        <img
          src="../../images/placeholder.svg"
          alt={place.title}
          className="h-64 w-auto object-cover mx-auto mt-[-64px]"
        />

        <button className={addPhotoCn}>
          <img
            src="../../icons/add-photo.svg"
            alt="افزودن"
            width={25}
            height={25}
          />
        </button>
      </div>

      <div className="p-[22px_22px_9px]">
        <PlaceInfo item={place} />
      </div>

      <div className="border border-gray-100"></div>

      <PlaceDetailsTabs item={place} />
    </div>
  );
}
