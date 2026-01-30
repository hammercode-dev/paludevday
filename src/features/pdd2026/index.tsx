import Hero from "./components/hero";
import Speakers from "./components/speakers";
import Ticket from "./components/ticket";
import CallForSponsors from "./components/call-for-sponsors";
import CallForMediaPartners from "./components/call-for-media-partners";
import Support from "./components/support";

const Pdd2026 = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      <Hero />
      <Ticket />
      <Speakers />
      <CallForSponsors />
      <Support />
      <CallForMediaPartners />
    </div>
  );
};

export default Pdd2026;
