export type NavList = {
  id: number;
  name: string;
  navigate_url: string;
};

export type SpeakerList = {
  id: number;
  name: string;
  role: string;
  img: string;
  title?: string;
  companyLogo: string;
};

export type RundownList = {
  id: number;
  title: string;
  description: string;
  timeline: string;
};

export type SpeakerProposal = {
  fullName: string;
  email: string;
  phoneNumber: string;
  expertise: string;
  speakingTopic: string;
  bio: string;
  linkedinUrl?: string;
};

export type SponsorProposal = {
  companyName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  sponsorshipLevel: "Gold" | "Silver" | "Bronze";
  description: string;
};

export type MediaPartnerProposal = {
  organizationName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  mediaType: string;
  reachDescription: string;
};
