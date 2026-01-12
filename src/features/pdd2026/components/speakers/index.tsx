import { speakerLists } from "@/constants";
import Image from "next/image";

const colorVariants = [
  "from-pdd-purple to-pdd-blue",
  "from-purple-600 to-blue-500",
  "from-indigo-600 to-purple-500",
  "from-violet-600 to-indigo-500",
  "from-purple-500 to-cyan-500",
];

const Speakers = () => {
  return (
    <div id="speakers" className="w-full py-24">
      <div className="mx-auto max-w-7xl space-y-12 px-5">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Meet Our{" "}
            <span className="from-pdd-purple to-pdd-blue bg-linear-to-r bg-clip-text text-transparent">
              Speakers
            </span>
          </h2>
          <p className="text-pdd-light/80 mx-auto max-w-3xl text-lg md:text-xl">
            Explore inspiring talks and cutting-edge insights from leading
            voices at Palu Developer Day. Discover our lineup of speakers for
            this year&apos;s event!
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-wrap justify-center gap-4">
            {speakerLists.map((item, index) => (
              <div
                key={item.id}
                className="group relative w-96 overflow-hidden rounded-lg shadow-2xl transition-all duration-300"
              >
                <div className="relative h-full min-h-125 overflow-hidden bg-black/20 md:min-h-137.5">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={600}
                    height={800}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div
                    className={`absolute inset-0 bg-linear-to-br ${colorVariants[index % colorVariants.length]} opacity-70 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-60`}
                  ></div>

                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>

                  <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_2px,transparent_2px,transparent_4px)]"></div>

                  <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
                    <Image
                      src={item.companyLogo}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="object-contain"
                    />

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-white transition-all duration-300 group-hover:bg-linear-to-r md:text-3xl">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold text-white/90 italic md:text-base">
                            {item.role}
                          </p>
                        </div>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10">
                        <p className="text-sm leading-relaxed text-white/90 md:text-base">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
