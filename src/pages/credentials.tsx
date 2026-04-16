import StudentElection from "../assets/credentials/College Student Council Election/img.jpg";
import DigitalFrontierSeminar from "../assets/credentials/Digital Frontier 3 Days Seminar/img4.jpg";
import CpEFest from "../assets/credentials/CPE FEST/Fastest Geek.jpg";
import ICpEP7thRegionalEvent from "../assets/credentials/ICpEP 7th Regional Event/img1.jpg";
import AcademicCoordinatorOfficer from "../assets/credentials/ICpEP Officer/img.jpg";
import ROTC from "../assets/credentials/ROTC NSTP/img1.jpg";

function Credentials({ expanded }: { expanded: boolean }) {
  const imagesPath = [
    {
      img: AcademicCoordinatorOfficer,
      title: "Academic Coordinator Officer",
      desc: "Served as an Academic Coordinator Officer for ICpEP-SE, responsible for organizing academic-related activities, coordinating schedules, and ensuring smooth communication within the team.",
    },
    {
      img: DigitalFrontierSeminar,
      title: "Digital Frontier: 3 Days Seminar",
      desc: "Attended a 3-day immersive seminar covering key areas of modern technology and digital innovation. The program included hands-on learning and technical discussions, with certifications earned in Hardware Basics (Day 1), Networking Fundamentals (Day 2), and Web & App Development (Day 3).",
    },
    {
      img: ICpEP7thRegionalEvent,
      title: "ICpEP 7th Regional Convention",
      desc: "Participated in the 7th Regional Convention of the Institute of Computer Engineers of the Philippines (ICpEP), joining technical seminars and collaborative learning activities on advancements in computer engineering. Competed in a Python programming competition and earned 3rd Runner-Up, recognizing strong analytical thinking and programming proficiency.",
    },
    {
      img: StudentElection,
      title: "College Student Council Election",
      desc: "Elected as Public Relations Officer in the institutional student council, responsible for managing communication, promoting student engagement, and ensuring transparent information flow throughout the electoral and governance process.",
    },
    {
      img: CpEFest,
      title: "CPE Fest – Fastest Geek Award",
      desc: "Participated in CPE Fest and received the Fastest Geek Award, recognizing quick problem-solving skills, technical knowledge, and efficiency in completing competitive challenges under time pressure.",
    },
    {
      img: ROTC,
      title: "Reserve Officers' Training Corps (ROTC)",
      desc: "Served as a Private 3rd Class Cadet in the ROTC program, undergoing structured training focused on discipline, leadership, teamwork, and responsibility. Awarded the Duty of Honor Certificate in recognition of exemplary performance, dedication, and commitment to assigned duties.",
    },
  ];

  return (
    <div className="grid grid-cols-1">
      {!expanded && (
        <div className="hover:duration-300 cursor-pointer w-full max-w-xl mx-auto text-center">
          <h1 className="text-xl font-bold text-center m-3">My Credentials</h1>
          <div className="flex justify-center">
            <img
              className="w-full"
              src={imagesPath[0].img}
              alt={imagesPath[0].title}
            />
          </div>
          <div className="text-center p-5 md:text-justify">
            <h3 className="font-semibold">{imagesPath[0].title}</h3>
            <p className="mt-1 text-gray-600 text-sm">{imagesPath[0].desc}</p>
          </div>
        </div>
      )}

      {expanded && (
        <>
          <div className="grid grid-cols-1 mx-5">
            <h1 className="text-xl font-bold text-center mt-3">
              My Credentials
            </h1>

            {imagesPath.map((project, index) => (
              <div
                key={index}
                className="border hover:w-full max-w-xl mx-auto text-center my-3 rounded-lg"
              >
                <div className="flex justify-center">
                  <img
                    className="w-full rounded-t-lg"
                    src={project.img}
                    alt={project.title}
                  />
                </div>

                <div className="text-center p-5 md:text-justify">
                  <h3 className="font-semibold">{project.title}</h3>

                  <p className="mt-2 text-sm text-gray-600">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Credentials;
