"use client";

import { Button } from "@/components/ui/button";
import { BroadcastIcon } from "@phosphor-icons/react/dist/ssr";

const CallForMediaPartners = () => {
  const handleEmailClick = () => {
    const email = "hammercode28@gmail.com";
    const subject = "Media Partnership Inquiry - PDD 2026";
    const body = `Hello PDD 2026 Team,

I am interested in becoming a media partner for PDD 2026.

Organization Name:
Contact Person:
Email:
Phone Number:
Type of Media (Blog/Podcast/YouTube/Community/etc):
Audience Reach & Description:

Please send me more information about media partnership opportunities.

Thank you!`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div id="media-partner" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl p-5">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Media{" "}
            <span className="from-pdd-purple to-pdd-blue bg-linear-to-r bg-clip-text text-transparent">
              Partnership
            </span>
          </h2>
          <p className="text-pdd-light/80 mx-auto max-w-3xl text-lg md:text-xl">
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
