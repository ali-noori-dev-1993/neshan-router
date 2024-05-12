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
  const existingIndex = searchHistory.findIndex(
    (item) => item.title === newSearchEntry.title
  );
  if (existingIndex !== -1) {
    searchHistory.splice(existingIndex, 1);
  }
  searchHistory.unshift(newSearchEntry);
  localStorage.setItem(
    LocalStorageKeys.SEARCH_HISTORY,
    JSON.stringify(searchHistory)
  );
}
