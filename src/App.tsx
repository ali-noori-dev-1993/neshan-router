import { MapComponent, MapTypes } from "@neshan-maps-platform/mapbox-gl-react";
import "@neshan-maps-platform/mapbox-gl-react/dist/style.css";
import { SearchComponent } from "./components";

export default function App() {
  return (
    <div className="w-full h-full relative">
      <MapComponent
        options={{
          mapKey: "web.fcd433b8ddb9445eaf875e0fdc7f8c71",
          mapType: MapTypes.neshanRaster,
          zoom: 11,
          center: [59.6067, 36.2972],
          poi: true,
        }}
      />

      <SearchComponent />
    </div>
  );
}
