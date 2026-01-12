import { speakerLists } from "@/constants";
import { Calendar, MapPin, QrCode } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const REGISTRATION_URL = "https://tally.so/r/pbyyyV";

const Hero = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-5 pt-12 pb-16">
      <div className="space-y-5 text-center">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="group relative">
            <div className="from-pdd-purple to-pdd-blue absolute -inset-0.5 rounded-full bg-linear-to-r opacity-75 blur-sm transition-opacity duration-300 group-hover:opacity-100"></div>
            <span className="from-pdd-purple to-pdd-blue relative flex items-center rounded-full bg-linear-to-r px-5 py-2.5 text-sm leading-none font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-105">
              Coming Soon
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-1.5 leading-none backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10">
            <span className="text-sm font-bold">{speakerLists.length}</span>
            <span className="text-sm font-semibold text-white/90">
              Speaker{speakerLists.length > 1 ? "s" : ""}
            </span>
          </div>
        </div>

        <h1 className="text-4xl leading-tight font-bold md:text-6xl">
          <span className="from-pdd-purple to-pdd-blue bg-linear-to-r bg-clip-text text-transparent">
            Palu Developer Day
          </span>
          <br />
          <span className="text-5xl text-white md:text-7xl">2026</span>
        </h1>

        <p className="text-pdd-light/80 mx-auto max-w-3xl text-xl md:text-2xl">
          The Biggest Community-Led Developer Conference in Palu City
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-4 md:gap-8">
          <div className="text-pdd-purple flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span className="text-sm md:text-base">2026</span>
          </div>
          <div className="text-pdd-blue flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span className="text-sm md:text-base">Palu City</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 px-5 pt-12">
          <div className="relative">
            <div className="from-pdd-purple/20 to-pdd-blue/20 absolute inset-0 rounded-2xl bg-linear-to-r blur-2xl" />

            <div className="relative flex flex-col items-center gap-5 rounded-2xl border border-white/20 bg-linear-to-br from-white/10 to-white/5 p-5 backdrop-blur-sm md:p-7">
              <Link
                href={REGISTRATION_URL}
                className="shadow-pdd-purple/20 rounded-xl shadow-lg transition-transform duration-300 hover:scale-102"
              >
                <Image
                  src="/assets/images/qr-code_ticket_pdd2026.png"
                  alt="QR Code Registration Palu Developer Day 2026"
                  width={360}
                  height={360}
                  className="w-full rounded-lg"
                />
              </Link>

              <div className="space-y-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <QrCode className="text-pdd-purple h-4 w-4" />
                  <p className="font-semibold text-white">Register Now</p>
                </div>
                <p className="text-pdd-light/70 text-sm text-balance">
                  <strong>Scan or click the QR code</strong> to register for the
                  event
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
