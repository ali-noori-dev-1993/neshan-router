import {
  Direction,
  GetDirectionParams,
  PlaceSearchResult,
  SearchParams,
} from "../types";

const apiKey = process.env.REACT_APP_SERVICES_API_KEY ?? "";
const baseURL = process.env.REACT_APP_API_BASE_URL;

async function getRequest(endPoint: string) {
  try {
    const response = await fetch(`${baseURL}${endPoint}`, {
      method: "GET",
      headers: { "Api-Key": apiKey },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error in getRequest:", error);
    return null;
  }
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
