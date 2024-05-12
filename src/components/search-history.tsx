import { Place } from "../types";
import { getSearchHistory } from "../utils";
import EmptySearchHistory from "./empty-search-history";
import HistoryItem from "./history-item";
import SectionSeparator from "./section-separator";

interface SearchHistoryProps {
  setSelectedPlace: (place: Place) => void;
}

export default function SearchHistory({
  setSelectedPlace,
}: SearchHistoryProps) {
  const history = getSearchHistory();

  const historyList = (
    <div>
      {history.map((item, index) => (
        <div>
          <HistoryItem
            key={index}
            item={item}
            setSelectedPlace={setSelectedPlace}
          />
          {index < history.length - 1 && (
            <div className="self-stretch border-t border-gray-200 mx-5"></div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <SectionSeparator />
      {history.length ? historyList : <EmptySearchHistory />}
    </div>
  );
}
