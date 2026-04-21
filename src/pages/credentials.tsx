import { useState } from "react";

import StudentElection1 from "../assets/credentials/College Student Council Election/img1.jpg";
import StudentElection2 from "../assets/credentials/College Student Council Election/img2.jpg";

import CPEChallenge2ndYearBreadboarding1 from "../assets/credentials/CPE Challenge 2nd Year/Breadboarding Comp/img1.jpg";

import CPEGeek1 from "../assets/credentials/Digital Frontier 3 Days Seminar/CPEGeek/img1.jpg";
import CPEGeek2 from "../assets/credentials/Digital Frontier 3 Days Seminar/CPEGeek/img2.jpg";
import CPEGeek3 from "../assets/credentials/Digital Frontier 3 Days Seminar/CPEGeek/img3.jpg";

import CPEChallenge2ndYearPitching1 from "../assets/credentials/CPE Challenge 2nd Year/Pitching/img1.jpg";

import CPEChallenge2ndYearProgramming1 from "../assets/credentials/CPE Challenge 2nd Year/Programming Comp/img1.jpg";
import CPEChallenge2ndYearProgramming2 from "../assets/credentials/CPE Challenge 2nd Year/Programming Comp/img2.jpg";
import CPEChallenge2ndYearProgramming3 from "../assets/credentials/CPE Challenge 2nd Year/Programming Comp/img3.jpg";

import CPEChallenge2ndYearQuizBowl2 from "../assets/credentials/CPE Challenge 2nd Year/Quiz Bowl Comp/img2.jpg";

import DigitalFrontierSeminarAwards1 from "../assets/credentials/Digital Frontier 3 Days Seminar/Awards/img1.jpg";
import DigitalFrontierSeminarAwards2 from "../assets/credentials/Digital Frontier 3 Days Seminar/Awards/img2.jpg";
import DigitalFrontierSeminarAwards3 from "../assets/credentials/Digital Frontier 3 Days Seminar/Awards/img3.jpg";

import DigitalFrontierDaysSeminar2 from "../assets/credentials/Digital Frontier 3 Days Seminar/Day1,2,3/img2.jpg";

import DigitalFrontierSeminarOfficers1 from "../assets/credentials/Digital Frontier 3 Days Seminar/Officers/img1.jpg";
import DigitalFrontierSeminarOfficers2 from "../assets/credentials/Digital Frontier 3 Days Seminar/Officers/img2.jpg";
import DigitalFrontierSeminarOfficers3 from "../assets/credentials/Digital Frontier 3 Days Seminar/Officers/img3.jpg";

import ICpEP7thRegionalEvent1 from "../assets/credentials/ICpEP 7th Regional Event/img1.jpg";
import ICpEP7thRegionalEvent2 from "../assets/credentials/ICpEP 7th Regional Event/img2.jpg";
import ICpEP7thRegionalEvent3 from "../assets/credentials/ICpEP 7th Regional Event/img3.jpg";

import AcademicCoordinatorOfficer from "../assets/credentials/ICpEP Officer/img1.jpg";

import ROTC1 from "../assets/credentials/ROTC NSTP/img1.jpg";
import ROTC2 from "../assets/credentials/ROTC NSTP/img2.jpg";
import ROTC3 from "../assets/credentials/ROTC NSTP/img3.jpg";

import ImageSlider from "../components/imageslider";

function Credentials({ expanded }: { expanded: boolean }) {
  const imagesPath = [
    {
      images: [AcademicCoordinatorOfficer],
      title: "Academic Coordinator Officer",
      desc: "Served as an ICpEP-SE Academic Coordinator Officer, organizing activities, coordinating schedules, and ensuring smooth team communication.",
    },
    {
      images: [
        ICpEP7thRegionalEvent1,
        ICpEP7thRegionalEvent2,
        ICpEP7thRegionalEvent3,
      ],
      title: "ICpEP 7th Regional Convention",
      desc: "Joined ICpEP’s regional convention, attended tech seminars, and placed 3rd Runner-Up in Python programming.",
    },
    {
      images: [DigitalFrontierDaysSeminar2, DigitalFrontierSeminarAwards2],
      title: "Digital Frontier: 3 Days Seminar",
      desc: "Participated in a 3-day seminar covering hardware, networking, and web & mobile development.",
    },
    {
      images: [DigitalFrontierSeminarAwards3, DigitalFrontierSeminarAwards1],
      title: "Digital Frontier: Recognitions",
      desc: "Received recognition for participation and contributions during the seminar.",
    },
    {
      images: [
        DigitalFrontierSeminarOfficers1,
        DigitalFrontierSeminarOfficers3,
        DigitalFrontierSeminarOfficers2,
      ],
      title: "Digital Frontier: Event Officers",
      desc: "Served as an organizer and officer, assisting in coordination and event execution.",
    },
    {
      images: [CPEGeek2, CPEGeek3],
      title: "CPE Geek – Fastest Geek",
      desc: "Participated in the Fastest Geek competition for quick problem-solving and strong technical performance in CPE Challenge events.",
    },
    {
      images: [
        CPEChallenge2ndYearProgramming2,
        CPEChallenge2ndYearProgramming3,
        CPEGeek1,
        CPEChallenge2ndYearProgramming1,
        CPEChallenge2ndYearBreadboarding1,
        CPEChallenge2ndYearQuizBowl2,
      ],
      title: "CPE Challenge Competitions",
      desc: "Participated in multiple CPE Challenge events across programming, design, and project pitching from 1st to 2nd year.",
    },
    {
      images: [CPEChallenge2ndYearPitching1],
      title: "Graduates E-Book Project Pitching",
      desc: "Successfully defended the Graduates E-Book project.",
    },
    {
      images: [StudentElection2, StudentElection1],
      title: "College Student Council Election",
      desc: "Elected Public Relations Officer, managing communications and student engagement.",
    },
    {
      images: [ROTC3, ROTC1, ROTC2],
      title: "Reserve Officers' Training Corps",
      desc: "Served as a PVT/3rd Class Cadet, awarded Duty of Honor for discipline and service.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const safeIndex = activeIndex >= imagesPath.length ? 0 : activeIndex;
  const activeItem = imagesPath[safeIndex];
  const textShadow = { textShadow: "0 2px 8px rgba(0,0,0,0.8)" };

  return (
    <div className="grid grid-cols-1">
      {/* ================= PREVIEW MODE ================= */}
      {!expanded && (
        <div className="relative cursor-pointer w-full max-w-xl mx-auto text-center">
          <h1 className="text-xl font-bold m-3">My Credentials</h1>

          <ImageSlider
            variant="credentials"
            images={imagesPath.map((p) => p.images[0])}
            autoPlay={true}
            interactive={false}
            onSlideChange={setActiveIndex}
          />

          {/* Gradient overlay for readability */}
          <div className=" rounded-b-4xl absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

          {/* Text content */}
          <div className="absolute bottom-0 z-20 p-4 text-left text-white">
            <h3 className="font-semibold" style={textShadow}>
              {activeItem.title}
            </h3>

            <p
              className="text-xs leading-snug text-white/90 line-clamp-2"
              style={textShadow}
            >
              {activeItem.desc}
            </p>
          </div>
        </div>
      )}

      {/* ================= EXPANDED MODE ================= */}
      {expanded && (
        <div className="grid grid-cols-1 mx-5 mb-3">
          <h1 className="text-xl font-bold text-center mt-3">My Credentials</h1>
          {imagesPath.map((project, index) => (
            // ✅ After — smaller card, constrained width
            <div
              key={index}
              className="bg-gray-900 shadow-[0_8px_30px_rgba(0,0,0,0.3)] w-full max-w-lg mx-auto text-center my-3 rounded-4xl shadow-sm"
            >
              <ImageSlider
                variant="credentials"
                mode="focus"
                images={project.images}
                autoPlay={true}
                interactive={true}
                showNavigation={true}
              />
              <div className="text-left p-5">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-snug">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Credentials;
