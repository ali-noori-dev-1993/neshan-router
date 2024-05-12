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

export interface GetDirectionParams {
  origin: string;
  destination: string;
}

export interface Direction {
  routes: DirectionRoute[];
}

export interface DirectionRoute {
  overview_polyline: OverviewPolyline;
  legs: RouteLeg[];
}

export interface RouteLeg {
  summary: string;
  distance: Distance;
  duration: Distance;
  steps: LegStep[];
}

export interface Distance {
  value: number;
  text: string;
}

export interface LegStep {
  name: string;
  instruction: string;
  bearing_after: number;
  type: string;
  distance: Distance;
  duration: Distance;
  polyline: string;
  start_location: number[];
  rotaryName?: string;
  modifier?: string;
  exit?: number;
}

export interface OverviewPolyline {
  points: string;
}
