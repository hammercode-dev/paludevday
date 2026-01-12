"use client";

import { Mic } from "lucide-react";

const Proposal = () => {
  const handleEmailClick = () => {
    const email = "hammercode28@gmail.com";
    const subject = "Speaker Proposal - PDD 2026";
    const body = `Hello PDD 2026 Team,

I would like to submit a speaker proposal for PDD 2026.

Full Name:
Email:
Phone Number:
Area of Expertise:
Proposed Topic:
Brief Bio:
LinkedIn Profile (optional):

Thank you!`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div
      id="speaker-proposal"
      className="bg-primaryBlack-800 bg-opacity-[0.4] scroll-mt-20 py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Become a{" "}
            <span className="from-pdd-purple to-pdd-blue bg-linear-to-r bg-clip-text text-transparent">
              Speaker
            </span>
          </h2>
          <p className="text-pdd-light/80 mx-auto max-w-3xl text-lg md:text-xl">
            Share your expertise with the biggest community-led developer
            conference in Palu City. Submit your proposal now!
          </p>
        </div>

        <div className="mb-12 text-center">
          <button
            onClick={handleEmailClick}
            className="group from-pdd-purple hover:from-pdd-purple/90 hover:shadow-pdd-purple/50 to-pdd-blue hover:to-pdd-blue/90 relative inline-flex transform items-center gap-3 rounded-lg bg-linear-to-r px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Mic className="h-5 w-5" />
            <span>Submit Your Proposal</span>
          </button>
          <p className="text-pdd-light/60 mt-4 text-sm">
            Click to send your proposal via email
          </p>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
