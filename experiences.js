import CloudIcon from "@mui/icons-material/Cloud";
import LoginIcon from "@mui/icons-material/Login";
import GitHubIcon from "@mui/icons-material/GitHub";
import SecurityIcon from "@mui/icons-material/Security";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import GroupIcon from "@mui/icons-material/Group";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import WebIcon from "@mui/icons-material/Web";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import TouchAppIcon from "@mui/icons-material/TouchApp";

const experiences = [
  {
    name: "NRMA",
    full: "National Roads and Motorists' Association",
    url: "https://www.mynrma.com.au/",
    date: "May. 2021 - Nov. 2021",
    image: "/nrma.svg",
    points: [
      { text: "DevOps and cloud engineering in AWS", icon: CloudIcon },
      {
        text: "Lead cloud engineer and devops support for major change to member login funcionality, including full user migration",
        icon: LoginIcon,
      },
      {
        text: "Set up SIEM logging on all machines with AWS System manager",
        icon: SecurityIcon,
      },
      {
        text: "Presented GitHub actions as an alternative to Jenkins including secretless access via AWS federation",
        icon: GitHubIcon,
      },
    ],
  },
  {
    name: "WiseTech",
    full: "WiseTech Global",
    url: "https://www.wisetechglobal.com/",
    date: "Sept. 2020 - May. 2021",
    image: "/wisetech-global-logo.svg",
    points: [
      {
        text: "C# DotNet devlopment with MSSQL and Entity framework supporting the worlds' biggest logistics providers",
        icon: DirectionsBoatIcon,
      },
      {
        text: "Worked in small, customer facing team devloping new Human Resources Management module",
        icon: GroupIcon,
      },
      {
        text: "Implemented major refactoring to represent multi-modal shipping consignments",
        icon: FlightTakeoffIcon,
      },
      {
        text: "Worked on full-stack developing a low-code platform development tool using VueJS and DotNet.",
        icon: WebIcon,
      },
    ],
  },
  {
    name: "Sunswift",
    full: "UNSW Sunswift Racing",
    url: "https://sunswift.com/",
    date: "Feb. 2020 - present",
    image: "/sunswift_render.jpg",
    points: [
      {
        text: "Part of a team developing a record-breaking solar vehicle",
        icon: ElectricCarIcon,
      },
      {
        text: "Developed a customer focussed web and mobile application for monitoring and controlling the vehicle",
        icon: TouchAppIcon,
      },
      {
        text: "Worked with sponsor companies to make the most of their products in Sunswift technology; IBM, Google",
        icon: CloudIcon,
      },
    ],
  },
];

export default experiences;
