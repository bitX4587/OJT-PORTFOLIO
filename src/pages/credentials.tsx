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
      desc: "Served as an Academic Coordinator Officer for ICpEP-SE, responsible for organizing academic-related activities, coordinating schedules, and ensuring smooth communication within the team.",
    },
    {
      images: [DigitalFrontierSeminar3, DigitalFrontierSeminar4],
      title: "Digital Frontier: 3 Days Seminar",
      desc: "Attended a 3-day immersive seminar covering key areas of modern technology and digital innovation. The program included hands-on learning and technical discussions, with certifications earned in Hardware Basics (Day 1), Networking Fundamentals (Day 2), and Web & App Development (Day 3).",
    },
    {
      images: [ICpEP7thRegionalEvent1, ICpEP7thRegionalEvent2],
      title: "ICpEP 7th Regional Convention",
      desc: "Participated in the 7th Regional Convention of the Institute of Computer Engineers of the Philippines (ICpEP), joining technical seminars and collaborative learning activities on advancements in computer engineering. Competed in a Python programming competition and earned 3rd Runner-Up.",
    },
    {
      images: [StudentElection, StudentElection1],
      title: "College Student Council Election",
      desc: "Elected as Public Relations Officer in the institutional student council, responsible for managing communication, promoting student engagement, and ensuring transparent information flow throughout the electoral and governance process.",
    },
    {
      images: [CpEFest],
      title: "CPE Fest – Fastest Geek Award",
      desc: "Participated in CPE Fest and received the Fastest Geek Award, recognizing quick problem-solving skills, technical knowledge, and efficiency in completing competitive challenges under time pressure.",
    },
    {
      images: [ROTC4, ROTC, ROTC6],
      title: "Reserve Officers' Training Corps (ROTC)",
      desc: "Served as a Private 3rd Class Cadet in the ROTC program, undergoing structured training focused on discipline, leadership, teamwork, and responsibility. Awarded the Duty of Honor Certificate in recognition of exemplary performance.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const safeIndex = activeIndex >= imagesPath.length ? 0 : activeIndex;
  const activeItem = imagesPath[safeIndex];

  return (
    <div className="grid grid-cols-1">
      {/* ================= PREVIEW MODE ================= */}
      {!expanded && (
        <div className="cursor-pointer w-full max-w-xl mx-auto text-center">
          <h1 className="text-xl font-bold m-3">My Credentials</h1>

          <ImageSlider
            images={imagesPath.map((p) => p.images[0])}
            autoPlay={true}
            interactive={false}
            onSlideChange={setActiveIndex}
          />

          <div className="text-center p-5 md:text-justify transition-all duration-300">
            <h3 className="font-semibold">{activeItem.title}</h3>
            <p className="mt-1 text-gray-600 text-sm">{activeItem.desc}</p>
          </div>
        </div>
      )}

      {/* ================= EXPANDED MODE ================= */}
      {expanded && (
        <div className="grid grid-cols-1 mx-5">
          <h1 className="text-xl font-bold text-center mt-3">My Credentials</h1>
          {imagesPath.map((project, index) => (
            // ✅ After — smaller card, constrained width
            <div
              key={index}
              className="border w-full max-w-lg mx-auto text-center my-3 rounded-lg shadow-sm"
            >
              <ImageSlider
                images={project.images}
                autoPlay={true}
                interactive={true}
                showNavigation={true}
                compact={true}
              />
              <div className="text-center p-5 md:text-justify">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Credentials;
