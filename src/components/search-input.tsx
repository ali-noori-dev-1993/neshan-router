import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { searchNearbyPlaces } from "../api/api";
import { CoordinatesContext } from "../contexts";
import { useMapMarkers } from "../hooks";
import { Place } from "../types";

const inputWrapperCs =
  "flex items-center w-full h-10 py-2 px-4 gap-3 border border-[#d9d9d9] rounded-2xl";

interface SearchInputProps {
  open: boolean;
  onClose: VoidFunction;
  setFoundPlaces: (list: Place[]) => void;
}

export function SearchInput({
  open,
  onClose,
  setFoundPlaces,
}: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const { coordinates } = useContext(CoordinatesContext);
  const { addMarkers, removeMarkers } = useMapMarkers();

  const handleClose = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    event.stopPropagation();
    if (searchTerm) {
      setSearchTerm("");
    } else onClose();
  };

  // Effect hook to trigger the searchNearbyLocations API call when the search term changes
  useEffect(() => {
    let searchTimeout: NodeJS.Timeout;
    // Set a timeout of 700 ms before triggering the API call because we want to search only when the user has typed the whole search query
    if (searchTerm) {
      searchTimeout = setTimeout(() => {
        const [longitude, latitude] = coordinates as [number, number];
        searchNearbyPlaces({
          term: searchTerm,
          lng: longitude,
          lat: latitude,
        }).then((data) => {
          setFoundPlaces(data.items);
          removeMarkers();
          addMarkers(data.items);
        });
      }, 700);
    } else {
      setFoundPlaces([]);
      removeMarkers();
    }

    return () => clearTimeout(searchTimeout); // Cleanup timeout on unmount or searchTerm change
  }, [searchTerm]);

  return (
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
  );
}