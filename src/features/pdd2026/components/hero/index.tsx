import { EVENT_DATE, EVENT_LOCATION } from "@/features/pdd2026/constants";
import { CalendarIcon, MapPinIcon } from "@phosphor-icons/react/dist/ssr";

const Hero = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-5 pt-12">
      <div className="space-y-5 text-center">
        <div className="group relative mx-auto w-fit">
          <div className="pdd2026-gradient absolute -inset-0.5 rounded-full opacity-75 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
          <span className="pdd2026-gradient relative flex items-center rounded-full px-5 py-2.5 text-sm leading-none font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-105">
            Today!
          </span>
        </div>

        <h1 className="text-4xl leading-tight font-bold md:text-6xl">
          <span className="pdd2026-gradient-text">Palu Developer Day</span>
          <br />
          <span className="text-5xl text-white md:text-7xl">2026</span>
        </h1>

        <p className="text-pdd-light/80 mx-auto max-w-3xl text-xl md:text-2xl">
          The Biggest Community-Led Developer Conference in Palu City
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-4 md:gap-8">
          <div className="text-pdd-purple flex flex-wrap items-center justify-center gap-2">
            <CalendarIcon className="size-5" />
            <span className="text-sm md:text-base">{EVENT_DATE}</span>
          </div>
          <div className="text-pdd-blue flex flex-wrap items-center justify-center gap-2">
            <MapPinIcon className="size-5" />
            <span className="text-sm text-balance md:text-base">
              {EVENT_LOCATION}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
