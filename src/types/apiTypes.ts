export interface SearchParams {
  term: string;
  lat: number;
  lng: number;
}

export interface PlaceSearchResult {
  count: number;
  items: Place[];
}

export interface Place {
  title: string;
  address?: string;
  category: string;
  type: PlaceType;
  region: string;
  neighbourhood?: string;
  location: Location;
}

export type PlaceType = "restaurant" | "cafe" | "hotel";

interface Location {
  x: number;
  y: number;
  z: string;
}
