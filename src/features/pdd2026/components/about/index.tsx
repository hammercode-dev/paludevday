import Image from "next/image";

const About = () => {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="bg-primaryBlack-800 bg-opacity-60 border-pdd-purple/20 relative rounded-2xl border p-8 backdrop-blur-xs md:p-12">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="flex items-center justify-center gap-6">
              <div className="group relative">
                <div className="bg-pdd-purple/20 group-hover:bg-pdd-purple/30 absolute inset-0 rounded-full blur-lg transition-all"></div>
                <Image
                  src="/assets/logos/ic_pdd26.svg"
                  alt="pdd-2026-logo"
                  width={80}
                  height={80}
                  className="relative h-20 w-20 md:h-24 md:w-24"
                />
              </div>
              <span className="text-pdd-purple">X</span>
              <div className="group relative">
                <div className="bg-pdd-blue/20 group-hover:bg-pdd-blue/30 absolute inset-0 rounded-full blur-lg transition-all"></div>
                <Image
                  src="/assets/logos/ic_hmc.svg"
                  alt="hammercode-logo"
                  width={80}
                  height={80}
                  className="relative h-20 w-20 md:h-24 md:w-24"
                />
              </div>
            </div>

            <p className="text-pdd-light/80 max-w-4xl leading-relaxed md:text-lg">
              <span className="pdd2026-gradient-text">Palu Developer Day</span>{" "}
              aims to inspire the young generation of Palu City in the field of
              software engineering and technological creativity. The event
              brings together professionals and industry experts to share
              knowledge and the latest trends. bringing together developers,
              tech enthusiasts, and industry professionals. Join us to learn,
              network, and grow together as we shape the future of technology in
              Central Sulawesi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
