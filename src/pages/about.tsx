import Me from "../assets/MARK.jpg";

const profile = {
  img: Me,
  name: "Mark Daniel Marbella Partoza",
  contact: {
    email: "partozamark2005@gmail.com",
    phone: "+63 962 786 5397",
    location: "Philippines",
  },
  summary:
    "Software developer with over 3 years of experience in creating high-impact Websites/Web Apps, IoT & Simulations, Mobile Apps, Games, and Designs. I specialize in creating responsive, user-friendly interfaces using modern web technologies and frameworks.",

  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "PHP",
    "SQL",
    "React",
    "Tailwind CSS",
    "Bootstrap",
    "Express.js",
    "Node.js",
    "React Native (Expo)",
    "SQLite",
    "Firebase",
    "Git",
    "GitHub",
    "API Integration",
    "Responsive Design",
  ],

  experience: [
    "Developed responsive web applications using React, Tailwind CSS, and PHP.",
    "Built mobile applications using Expo with offline storage using SQLite.",
    "Implemented authentication systems, admin dashboards, and CRUD systems.",
    "Integrated email notifications using PHPMailer and API services.",
    "Developed booking systems and database-driven applications.",
  ],

  education:
    "Bachelor of Science in Computer Engineering - Northwest Samar State University (2025)",

  languages: ["English - Professional proficiency", "Tagalog - Native"],
};

function about({ expanded }: { expanded: boolean }) {
  return (
    <div className="grid grid-cols-1">
      {/* PREVIEW MODE */}
      {!expanded && (
        <div className="rounded-lg md:border hover:transition duration-300 cursor-pointer w-full max-w-xl mx-auto">
          <div className="grid grid-cols-[140px_1fr] md:grid-cols-[200px_1fr] items-start">
            {/* IMAGE */}
            <div>
              <img
                className="w-full h-auto rounded-l-lg"
                src={profile.img}
                alt={profile.name}
              />
            </div>

            {/* INFO */}
            <div className="text-start self-center pl-3 pr-3 md:p-3">
              <h2 className="font-bold mb-1 text-sm md:text-lg">About Me</h2>

              <h3 className="text-gray-700 mb-1 text-xs md:text-sm">
                {profile.name}
              </h3>

              <p className="text-gray-600 text-justify text-xs max-h-16 md:max-h-full overflow-y-auto pr-1">
                {profile.summary}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* EXPANDED MODE */}
      {expanded && (
        <div className="grid grid-cols-1 place-items-center mx-5">
          <h1 className="text-xl font-bold text-center mt-5">About Me</h1>

          <div className="max-w-xl w-full">
            <div className="flex justify-center w-full">
              <img
                className="m-5 w-60 md:w-80 rounded-lg"
                src={profile.img}
                alt={profile.name}
              />
            </div>

            <div className="border max-w-xl mx-auto p-5 text-justify">
              <h3 className="text-center font-semibold text-gray-700">
                {profile.name}
              </h3>

              {/* CONTACT */}
              <div className="text-sm text-gray-600 mt-2">
                <p>📧 {profile.contact.email}</p>
                <p>📱 {profile.contact.phone}</p>
                <p>📍 {profile.contact.location}</p>
              </div>

              {/* SUMMARY */}
              <p className="mt-4 text-gray-600 text-sm">{profile.summary}</p>

              {/* SKILLS */}
              <div className="mt-5">
                <h4 className="font-semibold">Skills</h4>
                <p className="text-sm text-gray-600 mt-1">
                  {profile.skills.join(" • ")}
                </p>
              </div>

              {/* EXPERIENCE */}
              <div className="mt-5">
                <h4 className="font-semibold">Experience</h4>
                <ul className="text-sm text-gray-600 list-disc ml-5 mt-1">
                  {profile.experience.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* EDUCATION */}
              <div className="mt-5">
                <h4 className="font-semibold">Education</h4>
                <p className="text-sm text-gray-600 mt-1">
                  {profile.education}
                </p>
              </div>

              {/* LANGUAGES */}
              <div className="mt-5">
                <h4 className="font-semibold">Languages</h4>
                <p className="text-sm text-gray-600 mt-1">
                  {profile.languages.join(" • ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default about;
