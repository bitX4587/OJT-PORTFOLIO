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
    "A passionate web developer with over 3 years of experience in creating high-impact Websites/Web Apps, IoT & Simulations, Mobile Apps, Games, and Designs. I specialize in creating responsive, user-friendly interfaces using modern web technologies and frameworks.",

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
        <div className="border hover:transition duration-300 cursor-pointer w-full max-w-xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <h2 className="text-xl font-bold text-center m-3 md:hidden">
              About Me
            </h2>

            <img
              className="w-full md:w-60 h-auto md:h-60 object-cover"
              src={profile.img}
              alt={profile.name}
            />

            <div className="text-center p-4 md:text-justify">
              <h2 className="hidden md:block text-xl font-bold">About Me</h2>

              <h3 className="mt-1 font-semibold text-gray-700">
                {profile.name}
              </h3>

              <p className="mt-2 text-gray-600 text-sm">{profile.summary}</p>
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
              <img className="p-5 w-80" src={profile.img} alt={profile.name} />
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
