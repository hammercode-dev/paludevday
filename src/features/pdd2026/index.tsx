import { Fragment } from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Speakers from "./components/speakers";
import CallForSponsors from "./components/call-for-sponsors";
import CallForMediaPartners from "./components/call-for-media-partners";

const Pdd2026 = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Speakers />
      {/* <Proposal /> */}
      <CallForSponsors />
      <CallForMediaPartners />
    </Fragment>
  );
};

export default Pdd2026;
