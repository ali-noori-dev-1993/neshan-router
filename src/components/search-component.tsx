import { useContext, useState } from "react";
import { MapContext } from "../contexts";
import { Place } from "../types";
import { addMarkers, removeDirection } from "../utils";
import PlaceDetails from "./place-details";
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
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const { map } = useContext(MapContext);

  const handleClose = (searchTerm: string) => {
    if (selectedPlace) {
      removeDirection(map);
      addMarkers(foundPlaces, map);
      setSelectedPlace(null);
    } else if (searchTerm) return true;
    else setOpen(false);
  };

  return (
    <div
      onClick={() => setOpen(true)}
      className={`${generalCs} ${open ? openCn : closeCn}`}
    >
      <SearchInput
        open={open}
        onClose={handleClose}
        setFoundPlaces={setFoundPlaces}
      />

      {open && (
        <div className="h-full overflow-auto">
          <PlaceDetails place={selectedPlace} />

          {!selectedPlace && (
            <PlaceList
              places={foundPlaces}
              setSelectedPlace={setSelectedPlace}
            />
          )}

          {!foundPlaces.length && <SearchHistory />}
        </div>
      )}
    </div>
  );
}
