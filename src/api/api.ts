import { PlaceSearchResult, SearchParams } from "../types";

const apiKey = process.env.REACT_APP_SERVICES_API_KEY;
const baseURL = process.env.REACT_APP_API_BASE_URL;

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "Api-Key": apiKey ?? "",
};

// TODO: error handler module can be injected and use on http request errors
async function getRequest(endPoint: string) {
  const response = await fetch(`${baseURL}${endPoint}`, {
    method: "GET",
    headers,
  });
  return response.json();
}

export function searchNearbyPlaces(
  params: SearchParams
): Promise<PlaceSearchResult> {
  const { term, lat, lng } = params;
  return getRequest(`/search?term=${term}&lat=${lat}&lng=${lng}`);
}
