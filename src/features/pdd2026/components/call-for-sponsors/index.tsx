"use client";

import { Button } from "@/components/ui/button";
import {
  EMAIL,
  SPONSOR_BODY,
  SPONSOR_SUBJECT,
} from "@/features/pdd2026/constants";
import {
  MedalIcon,
  CheckIcon,
  GearIcon,
  FileTextIcon,
  HandshakeIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react/dist/ssr";

const PROPOSAL_FILE = "/assets/proposal/pdd2026-proposal.pdf";

const CallForSponsors = () => {
  const handleEmailClick = () => {
    const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(
      SPONSOR_SUBJECT
    )}&body=${encodeURIComponent(SPONSOR_BODY)}`;
    window.location.href = mailtoLink;
  };

  const tiers = [
    {
      icon: <GearIcon className="h-6 w-6" />,
      name: "Automator",
      subtitle: "Silver Tier",
      price: "High Visibility",
      highlight: false,
      color: "text-gray-300",
      accent: "group-hover:shadow-gray-400/50 border-white/10",
      features: [
        "L logo placement",
        "MC ad-libs during events",
        "Standard Booth space",
        "Certificate logo inclusion",
      ],
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      name: "AI Guardian",
      subtitle: "Platinum Tier",
      price: "Premium Partner",
      highlight: true,
      color:
        "from-pdd-purple to-pdd-blue bg-linear-to-r bg-clip-text text-transparent",
      accent:
        "shadow-purple-500/20 border-purple-500/50 bg-linear-to-br from-purple-500/10 to-blue-500/10",
      features: [
        "XL logo placement (Prime spots)",
        "Main stage speaking slot (10m)",
        "Premium Booth space",
        "Main screen branding",
        "Merch distribution opportunity",
      ],
    },
    {
      icon: <HandshakeIcon className="h-6 w-6" />,
      name: "Supporter",
      subtitle: "Bronze Tier",
      price: "Community Support",
      highlight: false,
      color: "text-amber-400",
      accent: "group-hover:shadow-amber-500/50 border-white/10",
      features: [
        "M logo placement",
        "MC ad-libs during breaks",
        "Social media acknowledgement",
        "Community support recognition",
      ],
    },
  ];

  return (
    <div id="sponsor" className="relative scroll-mt-20 overflow-hidden py-24">
      <div className="bg-pdd-purple/20 absolute top-1/2 left-1/2 -z-10 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />

      <div className="mx-auto max-w-7xl space-y-12 px-5 md:space-y-24">
        <div className="space-y-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Sponsor{" "}
            <span className="from-pdd-purple to-pdd-blue bg-linear-to-r bg-clip-text text-transparent">
              PDD 2026
            </span>
          </h2>
          <p className="text-pdd-light/70 mx-auto max-w-2xl text-lg">
            Connect with hundreds of developers, designers, and tech
            enthusiasts. Choose the tier that fits your brand&apos;s goals.
          </p>
          <Button
            icon={<FileTextIcon className="h-5 w-5" />}
            onClick={() =>
              window.open(PROPOSAL_FILE, "_blank", "noopener,noreferrer")
            }
          >
            View Proposal
          </Button>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3 lg:items-center">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`group relative flex flex-col space-y-6 rounded-3xl border p-8 backdrop-blur-xl transition-all duration-300 ${
                tier.highlight
                  ? `z-10 bg-black/40 lg:scale-110 ${tier.accent}`
                  : `bg-white/5 hover:border-white/30 hover:bg-white/10 ${tier.accent}`
              } `}
            >
              {tier.highlight && (
                <div className="from-pdd-purple to-pdd-blue absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r px-4 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-lg shadow-purple-500/25">
                  Most Exclusive
                </div>
              )}

              <div className="flex items-center justify-between">
                <div
                  className={`rounded-xl p-3 ${
                    tier.highlight
                      ? "from-pdd-purple/20 to-pdd-blue/20 bg-linear-to-br"
                      : "bg-white/5 text-white"
                  }`}
                >
                  {tier.icon}
                </div>
                <div className="text-right">
                  <p
                    className={`text-sm font-bold tracking-wider uppercase ${tier.color}`}
                  >
                    {tier.subtitle}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                <p className="text-pdd-light/60 text-sm">{tier.price}</p>
              </div>

              <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

              <ul className="flex-1 space-y-4">
                {tier.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-pdd-light/80 flex items-start gap-3"
                  >
                    <div
                      className={`rounded-full p-0.5 ${tier.highlight ? "bg-linear-to-br from-purple-500/20 to-blue-500/20 text-purple-400" : "bg-white/10 text-white"}`}
                    >
                      <CheckIcon className="h-3 w-3" />
                    </div>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleEmailClick}
                className={`w-full cursor-pointer rounded-xl py-3 font-semibold transition-all duration-300 ${
                  tier.highlight
                    ? "from-pdd-purple to-pdd-blue bg-linear-to-r text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
                    : "bg-white/10 text-white hover:bg-white/20"
                } `}
              >
                Select {tier.subtitle}
              </button>
            </div>
          ))}
        </div>

        <div className="space-y-6 text-center">
          <p className="text-pdd-light/60">Looking for a custom arrangement?</p>
          <button
            onClick={handleEmailClick}
            className="group relative inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-full bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-white/20"
          >
            <div className="from-pdd-purple/20 to-pdd-blue/20 absolute inset-0 -z-10 bg-linear-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <MedalIcon className="h-5 w-5" />
            <span>Contact Us for Custom Packages</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallForSponsors;
