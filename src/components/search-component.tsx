import { useState } from "react";
import { Place } from "../types";
import PlaceList from "./place-list";
import SearchHistory from "./search-history";
import { SearchInput } from "./search-input";

const closeCn = "right-7 top-7 w-[388px] rounded-2xl";
const openCn = "h-full right-0 top-0 w-[420px]";
const generalCs =
  "fixed flex flex-col shadow-[0_4px_12px_rgba(0,_0,_0,_.25)] bg-[#fff] transition-all";

export function SearchComponent() {
  const [open, setOpen] = useState(false);
  const [foundPlaces, setFoundPlaces] = useState<Place[]>([]);

  return (
    <div
      onClick={() => setOpen(true)}
      className={`${generalCs} ${open ? openCn : closeCn}`}
    >
      <SearchInput
        open={open}
        onClose={() => setOpen(false)}
        setFoundPlaces={setFoundPlaces}
      />

      {open && (
        <div className="h-full overflow-auto">
          <PlaceList places={foundPlaces} />
          {!foundPlaces.length && <SearchHistory />}
        </div>
      )}
    </div>
  );
}
