import polyline from "@mapbox/polyline";
import {
  circleId,
  imageId,
  layerId,
  lineId,
  pointsId,
  routeId,
  sourceId,
} from "../constants";
import { Direction, NeshanMap, Place, PlaceType } from "../types";

export function getPlaceTypeLabel(type: PlaceType) {
  switch (type) {
    case "restaurant":
      return "رستوران";
    case "cafe":
      return "کافی‌شاپ";
    case "hotel":
      return "هتل";
    default:
      return "مکان";
  }
}

export function getPlaceIcon(type: PlaceType) {
  switch (type) {
    case "restaurant":
      return "meal_delivery.png";
    case "cafe":
      return "cafe.png";
    case "hotel":
      return "hotel.png";
    default:
      return "place.png";
  }
}

export function removeDirection(map: NeshanMap | null) {
  if (map?.getLayer(lineId)) map.removeLayer(lineId);
  if (map?.getLayer(circleId)) map.removeLayer(circleId);
  if (map?.getSource(routeId)) map.removeSource(routeId);
  if (map?.getSource(pointsId)) map.removeSource(pointsId);
}

export function showDirectionsOnMap(
  direction: Direction,
  map: NeshanMap | null
) {
  removeDirection(map);

  const [routes, points] = extractRoutesAndPoints(direction);
  const routeObj = createRouteObject(routes);
  const pointsObj = createPointsObject(points);

  addRouteSource(map, routeObj);
  addPointsSource(map, pointsObj);
  addRouteLayer(map);
  addPointsLayer(map);
}

function extractRoutesAndPoints(direction: Direction) {
  const routes = [];
  const points = [];

  for (let k = 0; k < direction.routes.length; k++) {
    for (let j = 0; j < direction.routes[k].legs.length; j++) {
      for (let i = 0; i < direction.routes[k].legs[j].steps.length; i++) {
        const step = direction.routes[k].legs[j].steps[i]["polyline"];
        const point = direction.routes[k].legs[j].steps[i]["start_location"];

        const route = polyline.decode(step, 5);
        route.map((item) => item.reverse());

        routes.push(route);
        points.push(point);
      }
    }
  }

  return [routes, points];
}

function createRouteObject(routes: any[]) {
  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "MultiLineString",
          coordinates: routes,
        },
      },
    ],
  };
}

function createPointsObject(points: any[]) {
  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "MultiPoint",
          coordinates: points,
        },
      },
    ],
  };
}

function addRouteSource(map: NeshanMap | null, routeObj: any) {
  map?.addSource(routeId, {
    type: "geojson",
    data: routeObj,
  });
}

function addPointsSource(map: NeshanMap | null, pointsObj: any) {
  map?.addSource(pointsId, {
    type: "geojson",
    data: pointsObj,
  });
}

function addRouteLayer(map: NeshanMap | null) {
  map?.addLayer({
    id: lineId,
    type: "line",
    source: routeId,
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#250ECD",
      "line-width": 9,
    },
  });
}

function addPointsLayer(map: NeshanMap | null) {
  map?.addLayer({
    id: circleId,
    type: "circle",
    source: pointsId,
    paint: {
      "circle-color": "#9fbef9",
      "circle-stroke-color": "#FFFFFF",
      "circle-stroke-width": 2,
      "circle-radius": 5,
    },
  });
}

export function removeMarkers(map: NeshanMap | null) {
  if (map?.getLayer(layerId)) map.removeLayer(layerId);
  if (map?.getSource(sourceId)) map.removeSource(sourceId);
  if (map?.hasImage(imageId)) map.removeImage(imageId);
}

export function addMarkers(places: Place[], map: NeshanMap | null) {
  removeMarkers(map);
  loadMarkerImage(map);
  addMarkerFeatures(map, places);
  addMarkerLayer(map);
}

function loadMarkerImage(map: NeshanMap | null) {
  map?.loadImage("../../icons/marker.png", (error, image) => {
    if (error) throw error;
    if (image) map.addImage(imageId, image);
  });
}

function addMarkerFeatures(map: NeshanMap | null, places: Place[]) {
  map?.addSource(sourceId, {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: places.map((item) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [item.location.x, item.location.y],
        },
        properties: {
          title: item.title,
        },
      })),
    },
  });
}

function addMarkerLayer(map: NeshanMap | null) {
  map?.addLayer({
    id: layerId,
    type: "symbol",
    source: sourceId,
    layout: {
      "icon-image": imageId,
      "text-field": ["get", "title"],
      "text-offset": [0, -2.25],
      "text-anchor": "top",
    },
  });
}
