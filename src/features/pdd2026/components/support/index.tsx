import Image from "next/image";
import { SponsorTier, MediaPartner } from "@/types";

const SPONSOR_TIERS: SponsorTier[] = [
  {
    name: "Platinum",
    color: "text-purple-400",
    glow: "from-purple-600 via-blue-500 to-purple-600",
    sponsors: [
      { name: "Dicoding", logo: "/assets/sponsors/dicoding.png" },
      { name: "IDCloudHost", logo: "/assets/sponsors/idcloudhost.png" },
      { name: "OJK", logo: "/assets/sponsors/ojk-sekawan.png" },
      { name: "Bank Sulteng", logo: "/assets/sponsors/bank-sulteng.png" },
      { name: "CPM", logo: "/assets/sponsors/cpm-brm.png" },
    ],
  },
  {
    name: "Silver",
    color: "text-gray-300",
    glow: "from-gray-400 via-gray-300 to-gray-400",
    sponsors: [
      { name: "Bisso", logo: "/assets/sponsors/bisso.png" },
      {
        name: "TujuhSembilan ART",
        logo: "/assets/sponsors/tujuhsembilan-art.png",
      },
    ],
  },
  {
    name: "Bronze",
    color: "text-amber-400",
    glow: "from-amber-500 via-orange-500 to-amber-500",
    sponsors: [],
  },
  {
    name: "Supporting Partners",
    color: "text-emerald-400",
    glow: "from-emerald-500 via-teal-500 to-emerald-500",
    sponsors: [
      { name: "HMTI UNTAD", logo: "/assets/sponsors/hmti-untad.png" },
      { name: "WPU", logo: "/assets/sponsors/wpu.png" },
      { name: "WPU Course", logo: "/assets/sponsors/wpu-course.png" },
    ],
  },
];

const MEDIA_PARTNERS: MediaPartner[] = [
  {
    name: "Animedia Tadulako",
    logo: "/assets/media-partners/animedia-tadulako.png",
  },
  {
    name: "LPM Hitam Putih",
    logo: "/assets/media-partners/lpm-hitam-putih.png",
  },
  { name: "BPM FT-UNTAD", logo: "/assets/media-partners/bpm-ft-untad.png" },
  { name: "Floin.Hub", logo: "/assets/media-partners/floin-hub.png" },
  { name: "DPC UIN Palu", logo: "/assets/media-partners/dpc-uin-palu.png" },
  {
    name: "OSIS SMA 2 Palu",
    logo: "/assets/media-partners/osis-sma-2-palu.png",
  },
  {
    name: "HMPS-SI Adhiguna Palu",
    logo: "/assets/media-partners/hmps-si-adhiguna-palu.png",
  },
  {
    name: "HIMA-SI UIN Palu",
    logo: "/assets/media-partners/hima-si-uin-palu.png",
  },
  {
    name: "HIMATIF UIN Palu",
    logo: "/assets/media-partners/himatif-uin-palu.png",
  },
  {
    name: "HMPTI UNISA Palu",
    logo: "/assets/media-partners/hmpti-unisa-palu.png",
  },
  {
    name: "OSIS SMK 3 Palu",
    logo: "/assets/media-partners/osis-smk-3-palu.png",
  },
  { name: "De.Code", logo: "/assets/media-partners/decode.png" },
];

const Support = () => {
  return (
    <section
      id="support"
      className="relative scroll-mt-28 overflow-hidden md:scroll-mt-32"
    >
      <div className="mx-auto max-w-6xl space-y-16 px-5">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Our <span className="pdd2026-gradient-text">Support</span>
          </h2>
          <p className="text-pdd-light/70 mx-auto max-w-2xl text-lg">
            Proudly supported by our valued partners and community working
            together to empower developers and future innovators.
          </p>
        </div>

        <div className="space-y-20">
          {SPONSOR_TIERS.map((tier) => (
            <div key={tier.name} className="space-y-8">
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-white/5" />
                </div>
                <div className="relative flex justify-center">
                  <span
                    className={`px-6 py-2 text-xl font-bold ${tier.color} rounded-full border border-white/10 bg-black/50 backdrop-blur-xl`}
                  >
                    {tier.name}
                  </span>
                </div>
              </div>

              {tier.sponsors.length > 0 ? (
                <div className="flex flex-wrap items-center justify-center gap-6">
                  {tier.sponsors.map((sponsor) => {
                    return (
                      <div
                        key={sponsor.name}
                        className="group relative flex flex-col space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                      >
                        <div
                          className={`absolute -inset-1 rounded-3xl bg-linear-to-r ${tier.glow} opacity-0 blur-2xl transition duration-500 group-hover:opacity-20`}
                        />

                        <div className="relative flex h-full flex-col items-center justify-center gap-4">
                          <div className="flex h-20 w-full items-center justify-center rounded-xl transition-all duration-300 md:h-24">
                            <Image
                              src={sponsor.logo}
                              alt={sponsor.name}
                              width={200}
                              height={120}
                              className="max-h-full max-w-full object-contain drop-shadow-2xl filter transition-all duration-300 group-hover:scale-110"
                            />
                          </div>

                          <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

                          <p className="text-center text-sm font-semibold tracking-wide text-white/90">
                            {sponsor.name}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="group relative mx-auto max-w-4xl">
                  <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 opacity-50 blur-xl transition-opacity group-hover:opacity-75" />
                  <div className="relative rounded-3xl border border-dashed border-white/20 p-12 text-center">
                    <div className="inline-flex items-center gap-2 text-white/40">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-white/40" />
                      <div
                        className="h-2 w-2 animate-pulse rounded-full bg-white/40"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <div
                        className="h-2 w-2 animate-pulse rounded-full bg-white/40"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>
                    <p className="mt-4 text-lg font-medium text-white/50">
                      Spots Available - Be Part of Innovation
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="space-y-8">
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-white/5" />
              </div>
              <div className="relative flex justify-center">
                <span className="text-pdd-light rounded-full border border-white/10 bg-black/50 px-6 py-2 text-xl font-bold backdrop-blur-xl">
                  Media Partners
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
              {MEDIA_PARTNERS.map((partner) => {
                return (
                  <div
                    key={partner.name}
                    className="group relative flex flex-col items-center justify-center space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                  >
                    <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-blue-600 to-purple-600 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" />

                    <div className="relative flex h-20 w-full items-center justify-center md:h-24">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={100}
                        height={80}
                        className="max-h-full max-w-full object-contain grayscale filter transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                      />
                    </div>

                    <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

                    <p className="text-center text-xs font-semibold text-white/60 transition-colors duration-300 group-hover:text-white/90 md:text-sm">
                      {partner.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
