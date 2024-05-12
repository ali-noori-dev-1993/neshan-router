import { useContext } from "react";
import { fetchDirection } from "../api";
import { CoordinatesContext, MapContext } from "../contexts";
import { Place } from "../types";
import {
  addMarkers,
  getPlaceIcon,
  getPlaceTypeLabel,
  showDirectionsOnMap,
} from "../utils";
import PlaceAction, { PlaceActionProps } from "./place-action";

interface PlaceItemProps {
  item: Place;
}

const saveCn =
  "bg-white hover:bg-gray-100 border border-[#99999959] rounded-full p-1 transition-colors";

export default function PlaceItem({ item }: PlaceItemProps) {
  const { map } = useContext(MapContext);
  const { coordinates } = useContext(CoordinatesContext);

  const getDirectionData = async () => {
    const direction = await fetchDirection({
      origin: [...(coordinates as [number, number])].reverse().toString(),
      destination: `${item.location.y},${item.location.x}`,
    });

    addMarkers([item], map);
    showDirectionsOnMap(direction, map);
  };

  const actions: PlaceActionProps[] = [
    { iconName: "route.svg", title: "مسیرها", onClick: getDirectionData },
    { iconName: "phone.svg", title: "تماس" },
    { iconName: "share.svg", title: "ارسال" },
  ];

  return (
    <div className="cursor-pointer flex flex-col py-2 bg-white hover:bg-[#e9f3fc] transition-colors">
      <div className="flex items-start mx-4">
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

        <button className={saveCn}>
          <img width={24} height={24} alt="ذخیره" src="../../icons/save.svg" />
        </button>
      </div>

      <div className="pt-2 flex gap-1 pr-4">
        {actions.map((item, index) => (
          <PlaceAction key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
