import { Place } from "../types";
import { getPlaceIcon, getPlaceTypeLabel } from "../utils";

export default function PlaceInfo({ item }: { item: Place }) {
  return (
    <div className="flex flex-col gap-[2px] w-full">
      <div className="flex items-center gap-1">
        <img
          src={`../../images/${getPlaceIcon(item.type)}`}
          width={18}
          height={18}
          alt="مکان"
        />

        <h2 className="font-medium m-0">{item.title}</h2>
      </div>

      <div className="text-xs text-gray-500">
        {getPlaceTypeLabel(item.type)}
      </div>

      <span className="text-xs text-gray-500">{item.address}</span>
    </div>
  );
}
