import { EVENT_AGENDA } from "@/features/pdd2026/constants";
import { ClockIcon, UsersIcon } from "@phosphor-icons/react/dist/ssr";

const Agenda = () => {
  return (
    <section
      id="agenda"
      className="relative scroll-mt-28 overflow-hidden md:scroll-mt-32"
    >
      <div className="mx-auto max-w-6xl space-y-16 px-5">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Event <span className="pdd2026-gradient-text">Agenda</span>
          </h2>
          <p className="text-pdd-light/70 mx-auto max-w-2xl text-lg">
            Explore sessions and speakers throughout the event, from people who
            actually build and work in tech.
          </p>
        </div>

        <div className="space-y-6">
          {EVENT_AGENDA.map((agenda, index) => (
            <div
              key={`agenda-${index}`}
              className="group relative flex flex-col justify-between gap-2 rounded-2xl border border-white/10 bg-white/5 p-6 drop-shadow-sm backdrop-blur-xl transition-all duration-300 hover:scale-102 hover:border-white/30 hover:bg-white/10"
            >
              <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-purple-600 via-blue-500 to-purple-600 opacity-5 blur-2xl transition duration-500 group-hover:opacity-20" />

              <div className="bg-pdd-dark-blue flex w-fit items-center gap-1 rounded-lg px-2 py-1 font-mono text-xs md:text-sm">
                <ClockIcon /> {agenda.time} (WITA)
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold md:text-xl">
                  {agenda.activity}
                </h3>
                {agenda.speaker && (
                  <p className="inline-flex items-center gap-2 text-sm md:text-base">
                    <UsersIcon /> {agenda.speaker}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
