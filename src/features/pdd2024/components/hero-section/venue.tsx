import { CalendarIcon, MapPinIcon } from "@phosphor-icons/react/dist/ssr";

const Venue = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2 text-sm md:text-base">
        <MapPinIcon />
        Palu, Indonesia
      </div>
      <div className="flex items-center gap-2 text-sm md:text-base">
        <CalendarIcon />
        November, 30th 2024
      </div>
    </div>
  );
};

export default Venue;
