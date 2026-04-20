import { useState } from "react";

import StudentElection from "../assets/credentials/College Student Council Election/img.jpg";
import StudentElection1 from "../assets/credentials/College Student Council Election/img1.jpg";

import DigitalFrontierSeminar3 from "../assets/credentials/Digital Frontier 3 Days Seminar/img3.jpg";
import DigitalFrontierSeminar4 from "../assets/credentials/Digital Frontier 3 Days Seminar/img4.jpg";

import CpEFest from "../assets/credentials/CPE FEST/Fastest Geek.jpg";

import ICpEP7thRegionalEvent1 from "../assets/credentials/ICpEP 7th Regional Event/img1.jpg";
import ICpEP7thRegionalEvent2 from "../assets/credentials/ICpEP 7th Regional Event/img2.jpg";

import AcademicCoordinatorOfficer from "../assets/credentials/ICpEP Officer/img.jpg";

import ROTC from "../assets/credentials/ROTC NSTP/img.jpg";
import ROTC4 from "../assets/credentials/ROTC NSTP/img4.jpg";
import ROTC6 from "../assets/credentials/ROTC NSTP/img6.jpg";

import ImageSlider from "../components/imageslider";

function Credentials({ expanded }: { expanded: boolean }) {
  const imagesPath = [
    {
      images: [AcademicCoordinatorOfficer],
      title: "Academic Coordinator Officer",
      desc: "Served as an ICpEP-SE Academic Coordinator Officer, organizing activities, coordinating schedules, and ensuring smooth team communication.",
    },
    {
      images: [DigitalFrontierSeminar3],
      title: "Digital Frontier: 3 Days Seminar",
      desc: "Participated in a 3-day seminar covering hardware basics, networking fundamentals, and web & mobile development.",
    },
    {
      images: [DigitalFrontierSeminar4],
      title: "Digital Frontier: Event Organizer & Officer",
      desc: "Served as an organizer and officer during the seminar, assisting in coordination and event execution.",
    },
    {
      images: [ICpEP7thRegionalEvent1, ICpEP7thRegionalEvent2],
      title: "ICpEP 7th Regional Convention",
      desc: "Joined ICpEP’s regional convention, attended tech seminars, and placed 3rd Runner-Up in a Python programming competition.",
    },
    {
      images: [StudentElection, StudentElection1],
      title: "College Student Council Election",
      desc: "Elected Public Relations Officer, managing communications, student engagement, and information dissemination within the council.",
    },
    {
      images: [CpEFest],
      title: "CPE Fest – Fastest Geek Award",
      desc: "Earned Fastest Geek Award for quick problem-solving and strong technical performance in timed challenges.",
    },
    {
      images: [ROTC4, ROTC, ROTC6],
      title: "Reserve Officers' Training Corps",
      desc: "Served as ROTC cadet focused on discipline, leadership, and teamwork, and received a Duty of Honor Certificate.",
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
