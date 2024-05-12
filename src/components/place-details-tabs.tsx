import { useState } from "react";
import { Place } from "../types";
import PlaceGeneralInfo from "./place-general-info";

interface Tab {
  title: string;
  id: number;
}

const tabList: Tab[] = [
  { title: "اطلاعات عمومی", id: 0 },
  { title: "نظرات", id: 1 },
  { title: "تصاویر", id: 2 },
  { title: "درباره", id: 3 },
];

export default function PlaceDetailsTabs({ item }: { item: Place }) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="min-h-[256px]">
      <div className="flex h-[54px] justify-around shadow-[0_4px_10px_rgba(0,0,0,.08)]">
        {tabList.map((tab, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(tab.id)}
            className="relative flex items-center justify-center flex-1 h-full max-w-[97px]"
          >
            <span className="text-gray-700 text-sm font-medium leading-4 px-1">
              {tab.title}
            </span>

            {selectedTab === tab.id && (
              <div className="absolute bottom-0 right-1 bg-primary h-[3px] w-[calc(100%-10px)]"></div>
            )}
          </button>
        ))}
      </div>

      {selectedTab === 0 && <PlaceGeneralInfo item={item} />}
    </div>
  );
}
