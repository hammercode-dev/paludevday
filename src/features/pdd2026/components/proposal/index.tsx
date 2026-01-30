import { Button } from "@/components/ui/button";
import {
  EMAIL,
  PROPOSAL_BODY,
  PROPOSAL_SUBJECT,
} from "@/features/pdd2026/constants";
import { MicrophoneIcon } from "@phosphor-icons/react/dist/ssr";

const Proposal = () => {
  const handleEmailClick = () => {
    const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(
      PROPOSAL_SUBJECT
    )}&body=${encodeURIComponent(PROPOSAL_BODY)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div
      id="speaker-proposal"
      className="bg-primaryBlack-800 bg-opacity-[0.4] scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Become a <span className="pdd2026-gradient-text">Speaker</span>
          </h2>
          <p className="text-pdd-light/80 mx-auto max-w-3xl text-lg md:text-xl">
            Share your expertise with the biggest community-led developer
            conference in Palu City. Submit your proposal now!
          </p>
        </div>

        <div className="mb-12 text-center">
          <Button
            icon={<MicrophoneIcon className="h-5 w-5" />}
            onClick={handleEmailClick}
          >
            <span>Submit Your Proposal</span>
          </Button>
          <p className="text-pdd-light/60 mt-4 text-sm">
            Click to send your proposal via email
          </p>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
