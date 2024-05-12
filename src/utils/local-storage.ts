import { LocalStorageKeys, Place } from "../types";

export function getSearchHistory() {
  const searchHistoryJSON = localStorage.getItem(
    LocalStorageKeys.SEARCH_HISTORY
  );
  const searchHistory: Place[] = searchHistoryJSON
    ? JSON.parse(searchHistoryJSON)
    : [];
  return searchHistory;
}

export function updateSearchHistory(newSearchEntry: Place) {
  const searchHistory = getSearchHistory();
  searchHistory.unshift(newSearchEntry);
  localStorage.setItem(
    LocalStorageKeys.SEARCH_HISTORY,
    JSON.stringify(searchHistory)
  );
}
