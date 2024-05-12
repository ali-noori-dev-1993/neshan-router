import "@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css";
import { ToastContainer } from "react-toastify";
import {
  GeolocationComponent,
  MapComponent,
  SearchComponent,
} from "./components";
import { CoordinatesContextProvider, MapContextProvider } from "./providers";

export default function App() {
  return (
    <div className="w-full h-full relative">
      <MapContextProvider>
        <CoordinatesContextProvider>
          <GeolocationComponent />
          <MapComponent />
          <SearchComponent />
          <ToastContainer theme="colored" rtl position="bottom-left" />
        </CoordinatesContextProvider>
      </MapContextProvider>
    </div>
  );
}
