import { useDirection } from "../hooks";
import { Place } from "../types";
import PlaceAction, { PlaceActionProps } from "./place-action";
import PlaceInfo from "./place-info";

interface PlaceItemProps {
  item: Place;
  setSelectedPlace: (place: Place) => void;
}

const saveCn =
  "bg-white hover:bg-gray-100 border border-[#99999959] rounded-full p-1 transition-colors";

export default function PlaceItem({ item, setSelectedPlace }: PlaceItemProps) {
  const getDirectionData = useDirection();

  const actions: PlaceActionProps[] = [
    {
      iconName: "route.svg",
      title: "مسیرها",
      onClick: () => getDirectionData(item),
    },
    { iconName: "phone.svg", title: "تماس" },
    { iconName: "share.svg", title: "ارسال" },
  ];

  return (
    <div
      onClick={() => setSelectedPlace(item)}
      className="cursor-pointer flex flex-col py-2 bg-white hover:bg-[#e9f3fc] transition-colors"
    >
      <div className="flex items-start mx-4">
        <PlaceInfo item={item} />

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
