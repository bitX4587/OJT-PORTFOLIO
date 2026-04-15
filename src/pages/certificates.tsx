import ICpEP7thPythonProgrammingCompCert from "../assets/certificates/7TH ICPEP PYTHON PROGRAMMING.jpg";
import AWSAIPractitionerChallengeCert from "../assets/certificates/AWS AI PRACTITIONER CHALLENGE.png";
import CLAProgrammingEssentialsCert from "../assets/certificates/CLA PROGRAMMING ESSENTIALS.png";
import PCAPProgrammingEssentialsCert from "../assets/certificates/PCAP PROGRAMMING ESSENTIALS.png.png";
import CPEChallengeBreadboardingCompCert from "../assets/certificates/CPE CHALLENGE BREADBOARDING.jpg";
import CPEChallengeParticipationCert from "../assets/certificates/CPE CHALLENGE PARTICIPATION.jpg";
import CPEFESTDAY1Cert from "../assets/certificates/CPE FEST 1ST DAY.jpg";
import CPEFESTDAY2Cert from "../assets/certificates/CPE FEST 2ND DAY.jpg";
import CPEFESTDAY3Cert from "../assets/certificates/CPE FEST 3RD DAY.jpg";
import CPEFESTAWARDEECOMMITTEECert from "../assets/certificates/CPE FEST AWARDEE COMMITTEE.jpg";
import CPEFESTFastestGeekCert from "../assets/certificates/CPE FEST FASTEST GEEK CHALLENGE.jpg";
import PythonProgrammingChampCert from "../assets/certificates/PYTHON PROGRAMMING CHAMPION.jpg";

function certificates({ expanded }: { expanded: boolean }) {
  const imagesPath = [
    {
      img: ICpEP7thPythonProgrammingCompCert,
      title: "Python Programming Competition – 3rd Runner-Up",
      desc: "Competed in the ICpEP Student Edition 7th Regional Convention Python programming contest and earned 3rd Runner-Up, recognizing proficiency in algorithmic thinking and programming under pressure.",
    },
    {
      img: AWSAIPractitionerChallengeCert,
      title: "AWS AI Practitioner Challenge",
      desc: "Completed the AWS AI Practitioner Challenge, gaining foundational knowledge in artificial intelligence concepts, cloud-based AI services, and practical applications within the AWS ecosystem.",
    },
    {
      img: CLAProgrammingEssentialsCert,
      title: "C Language Programming Essentials",
      desc: "Completed foundational training in C programming, covering variables, control structures, functions, and basic problem-solving techniques.",
    },
    {
      img: PCAPProgrammingEssentialsCert,
      title: "Python Programming Essentials (PCAP)",
      desc: "Completed PCAP certification covering core Python programming concepts including data structures, functions, object-oriented programming, and error handling.",
    },
    {
      img: CPEChallengeBreadboardingCompCert,
      title: "CPE Breadboarding Competition",
      desc: "Participated in a Computer Engineering breadboarding competition, applying circuit design and hardware assembly skills in a hands-on technical challenge.",
    },
    {
      img: CPEChallengeParticipationCert,
      title: "CPE Technical Challenge Participation",
      desc: "Participated in a Computer Engineering technical challenge involving problem-solving activities and engineering-based practical tasks.",
    },
    {
      img: CPEFESTDAY1Cert,
      title: "CPE Fest Day 1 – Hardware Basics",
      desc: "Attended Day 1 of CPE Fest focusing on hardware fundamentals, including basic computer components and system architecture.",
    },
    {
      img: CPEFESTDAY2Cert,
      title: "CPE Fest Day 2 – Networking Fundamentals",
      desc: "Attended Day 2 of CPE Fest covering networking basics, including data communication principles and network structures.",
    },
    {
      img: CPEFESTDAY3Cert,
      title: "CPE Fest Day 3 – Web & App Development",
      desc: "Attended Day 3 of CPE Fest focused on web and mobile application development, covering modern development tools and workflows.",
    },
    {
      img: CPEFESTAWARDEECOMMITTEECert,
      title: "CPE Fest Committee Award",
      desc: "Recognized as an active committee member of CPE Fest for contributing to event organization and coordination.",
    },
    {
      img: CPEFESTFastestGeekCert,
      title: "CPE Fest – Fastest Geek Award",
      desc: "Awarded Fastest Geek at CPE Fest for demonstrating quick thinking, problem-solving ability, and technical knowledge under time pressure.",
    },
    {
      img: PythonProgrammingChampCert,
      title: "Python Programming Champion",
      desc: "Recognized as a champion in a Python programming competition for outstanding algorithmic thinking and coding performance.",
    },
  ];
  return (
    <>
      {!expanded && (
        <div className="grid grid-cols-1">
          <div className="border max-w-xl mx-auto hover:transition duration-300 cursor-pointer">
            <h1 className="text-xl font-bold text-center m-3">
              My Certificates
            </h1>
            <img src={imagesPath[0].img} alt={imagesPath[0].title} />
            <div className="text-center p-5 md:text-justify">
              <h3 className="font-semibold">{imagesPath[0].title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{imagesPath[0].desc}</p>
            </div>
          </div>
        </div>
      )}
      {expanded && (
        <>
          <div className="grid grid-cols-1 mx-5">
            <h1 className="text-xl font-bold text-center m-3">
              My Certificates
            </h1>
            {imagesPath.map((project, index) => (
              <div
                className="border max-w-xl mx-auto hover:transition duration-300"
                key={index}
              >
                <img src={project.img} alt={project.title} />
                <div className="text-center p-5 md:text-justify">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="mt-1 text-gray-600 text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default certificates;
