"use client";

import { Button } from "@/components/ui/button";
import {
  EMAIL,
  MEDIA_PARTNER_BODY,
  MEDIA_PARTNER_SUBJECT,
} from "@/features/pdd2026/constants";
import { BroadcastIcon } from "@phosphor-icons/react/dist/ssr";

const CallForMediaPartners = () => {
  const handleEmailClick = () => {
    const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(
      MEDIA_PARTNER_SUBJECT
    )}&body=${encodeURIComponent(MEDIA_PARTNER_BODY)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div id="media-partner" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl space-y-12 p-5">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Media <span className="pdd2026-gradient-text">Partnership</span>
          </h2>

          <p className="text-pdd-light/70 mx-auto max-w-2xl text-lg">
            Join us as a media partner to cover the biggest developer conference
            in Palu City and amplify the voice of tech community.
          </p>
        </div>

        <div className="text-center">
          <Button
            icon={<BroadcastIcon className="h-5 w-5" />}
            onClick={handleEmailClick}
          >
            <span>Become a Media Partner</span>
          </Button>
          <p className="text-pdd-light/60 mt-4 text-sm">
            Partner with us to spread the word
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallForMediaPartners;
