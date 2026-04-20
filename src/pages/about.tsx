import Me from "../assets/MARK.jpg";
import { useState } from "react";

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
    {
      tag: "Frontend",
      text: "Developed responsive web applications using React, Tailwind CSS, and PHP — delivering polished, mobile-first user interfaces.",
    },
    {
      tag: "Mobile",
      text: "Built mobile applications using Expo with offline storage powered by SQLite, enabling seamless on-device data access.",
    },
    {
      tag: "Backend",
      text: "Implemented authentication systems, admin dashboards, and full CRUD systems with secure database-driven architecture.",
    },
    {
      tag: "Integrations",
      text: "Integrated email notifications using PHPMailer and third-party API services including booking and payment systems.",
    },
    {
      tag: "Freelance",
      text: "Accommodated and successfully completed projects for 10+ freelance clients across web, mobile, IoT, and design domains.",
    },
  ],
  education: [
    {
      level: "Elementary",
      school: "Calbayog East Central School",
      years: "2011 – 2017",
      color: "bg-green-500",
    },
    {
      level: "High School",
      school: "Calbayog City National High School",
      years: "2017 – 2021",
      color: "bg-blue-500",
    },
    {
      level: "College",
      school: "Northwest Samar State University",
      years: "2021 – Present",
      badge: "Bachelor of Science in Computer Engineering",
      color: "bg-purple-500",
    },
  ],
  testimonials: [
    {
      quote:
        "Hey bro. I got 95 grade — not bad. The website/database you created was great. I would recommend you to my friends. Thank you again!",
      name: "Arnel",
      role: "Student",
    },
    {
      quote:
        "Sige po, sama nyo nadin po dun sa explanation HAHA! Thank youu po!",
      name: "Sheena",
      role: "Student",
    },
    {
      quote: "Solid po ng progress sir! Salamat!",
      name: "Kobe",
      role: "Student",
    },
    { quote: "Ang galing sir, salamat po.", name: "Jesmane", role: "Student" },
    { quote: "Nice, Thankyouuuuusooomuchhh ya", name: "Paul", role: "Student" },
  ],
  languages: ["English – Professional proficiency", "Tagalog – Native"],
};

function Slider({
  items,
  renderSlide,
}: {
  items: any[];
  renderSlide: (item: any) => React.ReactNode;
}) {
  const [cur, setCur] = useState(0);
  const prev = () => setCur((c) => (c - 1 + items.length) % items.length);
  const next = () => setCur((c) => (c + 1) % items.length);
  return (
    <div>
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-400 ease-in-out"
          style={{ transform: `translateX(-${cur * 100}%)` }}
        >
          {items.map((item, i) => (
            <div key={i} className="min-w-full">
              {renderSlide(item)}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="flex gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCur(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${i === cur ? "bg-white scale-125" : "bg-gray-600"} cursor-pointer`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="text-gray-400 hover:text-white border border-gray-700 rounded-lg px-2 py-0.5 text-sm transition cursor-pointer"
          >
            ←
          </button>
          <button
            onClick={next}
            className="text-gray-400 hover:text-white border border-gray-700 rounded-lg px-2 py-0.5 text-sm transition cursor-pointer"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

function About({ expanded }: { expanded: boolean }) {
  return (
    <div className="grid grid-cols-1">
      {/* PREVIEW MODE */}
      {!expanded && (
        <div className="bg-gray-900 shadow-[0_8px_30px_rgba(0,0,0,0.3)] rounded-4xl hover:transition duration-300 cursor-pointer w-full max-w-xl mx-auto">
          <div className="grid grid-cols-[140px_1fr] md:grid-cols-[200px_1fr] items-start">
            <img
              className="w-full h-auto rounded-l-4xl "
              src={profile.img}
              alt={profile.name}
            />
            <div className="text-start self-center pl-3 pr-3 md:p-3">
              <h2 className="font-bold mb-1 text-gray-400 text-sm md:text-lg">
                About Me
              </h2>
              <h3 className="text-gray-500 mb-1 text-xs md:text-sm">
                {profile.name}
              </h3>
              <p className="text-gray-600 text-left text-xs max-h-16 md:max-h-full overflow-y-auto pr-1 leading-snug">
                {profile.summary}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* EXPANDED MODE */}
      {expanded && (
        <div className="grid grid-cols-1 place-items-center mx-5">
          <h1 className="text-xl font-bold text-center mt-5 mb-4">About Me</h1>
          <div className="max-w-xl w-full space-y-4">
            {/* Photo + Name */}
            <div className="flex justify-center">
              <img
                className="w-60 md:w-72 rounded-4xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] "
                src={profile.img}
                alt={profile.name}
              />
            </div>

            {/* Contact */}
            <div className="bg-gray-900 shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-gray-800 rounded-3xl p-5">
              <h3 className="text-center font-semibold text-white mb-2">
                {profile.name}
              </h3>
              <div className="text-sm text-gray-400 space-y-1">
                <p>📧 {profile.contact.email}</p>
                <p>📱 {profile.contact.phone}</p>
                <p>📍 {profile.contact.location}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                ["3+", "Years exp."],
                ["10+", "Clients"],
                ["100%", "Completion"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  className="bg-gray-900 shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-gray-800 rounded-2xl p-3 text-center transition-transform duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="text-xl font-bold text-white">{n}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{l}</div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-gray-900 shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-gray-800 rounded-3xl p-5">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                Summary
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {profile.summary}
              </p>
            </div>

            {/* Education Tree */}
            <div className="bg-gray-900 shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-gray-800 rounded-3xl p-5">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
                Education
              </h4>
              <div className="relative pl-4">
                {profile.education.map((edu, i) => (
                  <div key={i} className="relative pl-6 mb-0">
                    {/* vertical line */}
                    {i < profile.education.length - 1 && (
                      <div className="absolute left-[5px] top-3 bottom-0 w-px bg-gray-700" />
                    )}
                    {/* dot */}
                    <div
                      className={`absolute left-0 top-2.5 w-2.5 h-2.5 rounded-full ${edu.color}`}
                    />
                    <div className="bg-gray-800 rounded-2xl p-3 mb-4">
                      <div className="text-xs uppercase tracking-wider text-gray-500">
                        {edu.level}
                      </div>
                      <div className="text-sm font-medium text-white mt-0.5">
                        {edu.school}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5">
                        {edu.years}
                      </div>
                      {edu.badge && (
                        <span className="inline-block mt-2 text-xs bg-purple-900/50 text-purple-300 px-2 py-0.5 rounded-full">
                          {edu.badge}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Slider */}
            <div className="bg-gray-900 shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-gray-800 rounded-3xl p-5">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                Experience
              </h4>
              <Slider
                items={profile.experience}
                renderSlide={(item) => (
                  <div className="bg-gray-800 rounded-2xl p-4">
                    <span className="inline-block text-xs font-medium bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded-full mb-2">
                      {item.tag}
                    </span>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                )}
              />
            </div>

            {/* Skills */}
            <div className="bg-gray-900 shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-gray-800 rounded-3xl p-5">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs border border-gray-700 text-gray-400 px-2.5 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonials Slider */}
            <div className="bg-gray-900 shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-gray-800 rounded-3xl p-5">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                What clients say
              </h4>
              <Slider
                items={profile.testimonials}
                renderSlide={(item) => (
                  <div className="bg-gray-800 rounded-2xl p-4">
                    <div className="text-2xl text-gray-600 font-serif leading-none mb-1">
                      "
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed italic">
                      {item.quote}
                    </p>
                    <div className="mt-3">
                      <div className="text-sm font-medium text-white">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500">{item.role}</div>
                    </div>
                  </div>
                )}
              />
            </div>

            {/* Languages */}
            <div className="bg-gray-900 shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-gray-800 rounded-3xl mb-5 p-5">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                Languages
              </h4>
              {profile.languages.map((l) => (
                <p key={l} className="text-sm text-gray-400">
                  {l}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
