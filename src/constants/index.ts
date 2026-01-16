import { NavList, RundownList, SpeakerList } from "@/types";

export const navLists: NavList[] = [
  {
    id: 1,
    name: "Speakers",
    navigate_url: "#speakers",
  },
  // {
  //   id: 2,
  //   name: "Partners",
  //   navigate_url: "#partners",
  // },
  // {
  //   id: 3,
  //   name: "Speaker",
  //   navigate_url: "#speaker-proposal",
  // },
  {
    id: 4,
    name: "Sponsor",
    navigate_url: "#sponsor",
  },
  {
    id: 5,
    name: "Media Partner",
    navigate_url: "#media-partner",
  },
];

export const speakerLists: SpeakerList[] = [
  {
    id: 1,
    name: "Anugerah Aidin Yotolembah",
    role: "AI/ML Engineer",
    img: "/speakers/speaker1.jpeg",
    title: "Guardiant of Automation : AI Agent Assemble",
    companyLogo: "/companies/lintasarta.png",
  },
];

export const rundownLists: RundownList[] = [
  {
    id: 1,
    title: "Gate Open (Registration)",
    description: "",
    timeline: "08:00-09:00",
  },
  {
    id: 2,
    title: "Opening of Palu Developer Day 2024",
    description: "Panitia Palu Developer Day 2024",
    timeline: "08:30-08:40",
  },
  {
    id: 3,
    title: "Prayer",
    description: "",
    timeline: "08:40-08:45",
  },
  {
    id: 4,
    title: "Singing the National Anthem",
    description: "",
    timeline: "08:45-08:50",
  },
  {
    id: 5,
    title: "Report from the Lead of Committee",
    description: "",
    timeline: "08:50-08:55",
  },
  {
    id: 6,
    title: "Welcome Speech from the Student Senate of UIN Datokarama",
    description: "",
    timeline: "08:55-09:05",
  },
  {
    id: 7,
    title: "Welcome Speech from the Lead of HammerCode 2024",
    description: "Khairun Nisa Cipta Hapsari",
    timeline: "09:05-09:15",
  },
  {
    id: 8,
    title: "Talkshow & QnA",
    description:
      "Fendi Irfan Amorokhman (Data Engineer at OY Indonesia), Rian Apriansyah (Software Engineer at Unit4)",
    timeline: "09:15-11:15",
  },
  {
    id: 9,
    title: "Award Presentation for Speakers",
    description: "",
    timeline: "11:15-11.25",
  },
  {
    id: 10,
    title: "Games",
    description: "",
    timeline: "11:25-11:55",
  },
  {
    id: 11,
    title: "Closing",
    description: "",
    timeline: "11:55-12:30",
  },
];
