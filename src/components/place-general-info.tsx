import { useDirection } from "../hooks";
import { Place } from "../types";
import SectionSeparator from "./section-separator";

interface Action {
  title: string;
  iconName: string;
  onClick?: VoidFunction;
  isPrimary?: boolean;
}

interface Info {
  text: React.ReactNode;
  iconName: string;
}

const iconCn = "object-contain w-6 h-6";
const actionCn =
  "flex justify-center items-center border-2 border-primary rounded-xl h-[42px] w-[42px]";

export default function PlaceGeneralInfo({ item }: { item: Place }) {
  const getDirectionData = useDirection();

  const infoList: Info[] = [
    { text: item.address ?? "", iconName: "location.png" },
    { text: "ساعت کاری: باز است - 9 تا 21", iconName: "clock.png" },
    { text: "شماره تماس: 02166402334", iconName: "phone.svg" },
    {
      text: (
        <span>
          صفحه اینستاگرام:{" "}
          <a
            href="https://www.instagram.com/p/nikowich/"
            target="_blank"
            className="text-primary hover:underline"
          >
            p/nikowich@
          </a>
        </span>
      ),
      iconName: "world.png",
    },
  ];

  const actionList: Action[] = [
    {
      title: "مسیریابی",
      iconName: "routing.svg",
      isPrimary: true,
      onClick: () => getDirectionData(item),
    },
    {
      title: "ذخیره",
      iconName: "bookmark.svg",
    },
    {
      title: "اشتراک گذاری",
      iconName: "share-outline.svg",
    },
    {
      title: "تماس",
      iconName: "call.svg",
    },
  ];

  return (
    <div>
      <div className="flex justify-evenly py-3 px-5 mt-2">
        {actionList.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className="flex flex-col items-center max-w-[72px]"
          >
            <div
              className={`${actionCn} ${action.isPrimary ? "bg-primary" : ""}`}
            >
              <img
                alt={action.title}
                src={`../../icons/${action.iconName}`}
                className={iconCn}
              />
            </div>

            <span className="text-gray-700 text-xs font-bold mt-2">
              {action.title}
            </span>
          </button>
        ))}
      </div>

      <SectionSeparator />

      <div className="py-3 px-5 text-xs">
        {infoList.map((item, index) => (
          <div key={index} className="flex items-center gap-[10px] my-1">
            <img
              src={`../../icons/${item.iconName}`}
              alt="location"
              className={iconCn}
            />
            <span className="text-gray-700">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
