import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { searchNearbyPlaces } from "../api/api";
import { Place } from "../types";
import PlaceList from "./place-list";
import SearchHistory from "./search-history";

interface SearchComponentProps {
  coordinates: mapboxgl.LngLatLike;
}

// Define CSS classes for styling
const generalCs =
  "fixed flex flex-col shadow-[0_4px_12px_rgba(0,_0,_0,_.25)] bg-[#fff] transition-all";
const closeCn = "right-7 top-7 w-[388px] rounded-2xl";
const openCn = "h-full right-0 top-0 w-[420px]";
const inputWrapperCs =
  "flex items-center w-full h-10 py-2 px-4 gap-3 border border-[#d9d9d9] rounded-2xl";

export function SearchComponent({ coordinates }: SearchComponentProps) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [foundPlaces, setFoundPlaces] = useState<Place[]>([]);

  const handleClose = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    event.stopPropagation();
    if (searchTerm) {
      setSearchTerm("");
      setFoundPlaces([]);
    } else setOpen(false);
  };

  // Effect hook to trigger the searchNearbyLocations API call when the search term changes
  useEffect(() => {
    let searchTimeout: NodeJS.Timeout;
    // Set a timeout of 700 ms before triggering the API call because we want to search only when the user has typed the whole search query
    if (searchTerm)
      searchTimeout = setTimeout(() => {
        const [longitude, latitude] = coordinates as [number, number];
        searchNearbyPlaces({
          term: searchTerm,
          lng: longitude,
          lat: latitude,
        }).then((data) => setFoundPlaces(data.items));
      }, 700);

    return () => clearTimeout(searchTimeout); // Cleanup timeout on unmount or searchTerm change
  }, [searchTerm]);

  return (
    <div
      onClick={() => setOpen(true)}
      className={`${generalCs} ${open ? openCn : closeCn}`}
    >
      <div className={open ? "p-4" : ""}>
        <div className={`${inputWrapperCs} ${open ? "bg-[#f5f5f5]" : ""}`}>
          <input
            placeholder="جستجو"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none w-full bg-transparent"
          />
          <FaSearch className="h-full cursor-pointer" />

          {open && (
            <div className="flex gap-2 h-full">
              <hr className="border-l border-l-[#d9d9d9] h-full" />
              <IoCloseSharp
                onClick={handleClose}
                className="text-xl cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>

      {open && (
        <div className="h-full overflow-auto">
          <PlaceList places={foundPlaces} />
          {!foundPlaces.length && <SearchHistory />}
        </div>
      )}
    </div>
  );
}
