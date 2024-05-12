import SDKMap from "@neshan-maps-platform/mapbox-gl/dist/src/core/Map";
import { Map } from "mapbox-gl";

export type NeshanMap = SDKMap & Map;

export interface IToastService {
  success(msg: string, id?: string): void;
  error(msg: string, id?: string): void;
}
