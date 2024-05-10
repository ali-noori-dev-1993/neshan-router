import { PlaceType } from "../types";

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
