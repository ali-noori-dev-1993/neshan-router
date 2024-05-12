import { Place } from "../types";

interface HistoryItemProps {
  item: Place;
  setSelectedPlace: (place: Place) => void;
}

export default function HistoryItem({
  item,
  setSelectedPlace,
}: HistoryItemProps) {
  return (
    <div
      onClick={() => setSelectedPlace(item)}
      className="flex gap-[10px] cursor-pointer p-[10px]"
    >
      <img src="../../icons/history.svg" className="h-7 w-7 object-contain" />
      <div>
        <h5 className="text-sm">{item.title}</h5>
        <p className="text-xs text-gray-500 my-1">{item.address}</p>
      </div>
    </div>
  );
}
