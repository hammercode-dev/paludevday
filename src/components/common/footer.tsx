import Link from "next/link";
import Image from "next/image";
import {
  DiscordLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  GithubLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { EMAIL } from "@/features/pdd2026/constants";

const SOCIALS = [
  {
    name: "Discord",
    url: "https://discord.com/invite/M9mNK6MBbu",
    icon: DiscordLogoIcon,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/hmrcode",
    icon: InstagramLogoIcon,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/hammercode",
    icon: LinkedinLogoIcon,
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@hammercode-dev",
    icon: YoutubeLogoIcon,
  },
  {
    name: "GitHub",
    url: "https://github.com/hammercode-dev",
    icon: GithubLogoIcon,
  },
];

const Footer = () => {
  return (
    <footer className="bg-primaryBlack-900 relative overflow-hidden border-t border-white/10 pt-16 pb-8">
      <div className="bg-pdd-purple/10 absolute top-0 left-1/4 -z-10 h-64 w-64 rounded-full blur-[100px]" />
      <div className="bg-pdd-blue/10 absolute right-1/4 bottom-0 -z-10 h-64 w-64 rounded-full blur-[100px]" />

      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:gap-0">
          <div className="max-w-md space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logos/ic_pdd26.svg"
                alt="Palu Developer Day 2026"
                width={60}
                height={60}
                className="h-12 w-auto filter-[drop-shadow(0_0_15px_rgba(216,126,255,0.4))] md:h-16"
              />
            </Link>

            <div className="flex items-center gap-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:border-pdd-purple hover:text-pdd-purple rounded-full border border-white/10 bg-white/5 p-2 transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-2 md:text-right">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contact Us</h4>
              <p className="text-pdd-light/70 text-sm">Have questions?</p>
            </div>

            <a
              href={`mailto:${EMAIL}`}
              className="from-pdd-purple to-pdd-blue bg-linear-to-r bg-clip-text font-medium text-transparent"
            >
              {EMAIL}
            </a>
          </div>
        </div>

        <hr className="my-10 border-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-pdd-light/50 text-xs">
            &copy; {new Date().getFullYear()} Palu Developer Day. All rights
            reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-pdd-light/50 text-xs">Organized by</span>
            <Link
              href="https://hammercode.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/logos/ic_hmc.svg"
                alt="HammerCode"
                width={100}
                height={30}
                className="h-6 w-auto opacity-70 transition-opacity hover:opacity-100"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
