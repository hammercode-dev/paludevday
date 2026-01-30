import Image from "next/image";
import Link from "next/link";
import {
  REGISTRATION_BENEFITS,
  REGISTRATION_PRICE,
  REGISTRATION_URL,
} from "@/features/pdd2026/constants";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr";

const Ticket = () => {
  return (
    <section id="ticket" className="w-full">
      <div className="mx-auto max-w-6xl px-5">
        <div className="bg-primaryBlack-800 bg-opacity-60 border-pdd-purple/20 relative mx-auto w-fit overflow-hidden rounded-3xl border backdrop-blur-xs">
          <div className="bg-pdd-purple/10 pointer-events-none absolute inset-0 blur-3xl" />

          <div className="relative grid items-stretch gap-8 p-6 md:grid-cols-[auto_1fr] md:gap-12 md:p-10">
            <Link
              href={REGISTRATION_URL}
              className="group relative block space-y-3 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-102"
            >
              <Image
                src="/assets/images/qr-code_ticket_pdd2026.png"
                alt="QR Code Registration Palu Developer Day 2026"
                width={300}
                height={300}
                className="relative w-full max-w-xs rounded-xl object-contain"
              />
              <p className="text-pdd-light text-center text-sm font-bold">
                Click or Scan to Register
              </p>
            </Link>

            <div className="flex h-full flex-col justify-between gap-6">
              <div className="space-y-1">
                <p className="text-pdd-light/60 font-medium tracking-wider uppercase">
                  Regular Price
                </p>
                <div className="pdd2026-gradient-text text-5xl font-bold md:text-7xl">
                  {REGISTRATION_PRICE}
                </div>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {REGISTRATION_BENEFITS.map((benefit, index) => (
                  <li
                    key={index}
                    className="text-pdd-light/90 flex items-center gap-3"
                  >
                    <div className="bg-pdd-purple/20 text-pdd-purple flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      <CheckIcon weight="bold" size={14} />
                    </div>
                    <span className="text-sm md:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/10 pt-6">
                <div className="flex flex-wrap items-center justify-center gap-4 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm md:justify-start">
                  <Image
                    unoptimized
                    src="/assets/images/ticket_pdd2026.png"
                    alt="PDD 2026 Ticket Preview"
                    width={120}
                    height={40}
                    className="shrink-0 rounded-md object-contain"
                  />
                  <div className="space-y-0.5 text-center md:text-left">
                    <p className="text-sm font-medium text-white">
                      Your Ticket
                    </p>
                    <p className="text-pdd-light/50 text-xs font-semibold">
                      Secure your spot at the epicenter of innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ticket;
