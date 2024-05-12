import {
  Direction,
  GetDirectionParams,
  PlaceSearchResult,
  SearchParams,
} from "../types";

const apiKey = process.env.REACT_APP_SERVICES_API_KEY ?? "";
const baseURL = process.env.REACT_APP_API_BASE_URL;

// TODO: error handler module can be injected and use on http request errors
async function getRequest(endPoint: string) {
  const response = await fetch(`${baseURL}${endPoint}`, {
    method: "GET",
    headers: { "Api-Key": apiKey },
  });
  return response.json();
}

export function searchNearbyPlaces(
  params: SearchParams
): Promise<PlaceSearchResult> {
  const { term, lat, lng } = params;
  return getRequest(`/v1/search?term=${term}&lat=${lat}&lng=${lng}`);
}

export function fetchDirection(params: GetDirectionParams): Promise<Direction> {
  const { destination, origin } = params;
  return getRequest(
    `/v4/direction?type=car&origin=${origin}&destination=${destination}`
  );
}
