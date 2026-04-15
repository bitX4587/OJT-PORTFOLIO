import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaDiscord,
  FaReddit,
  FaWhatsapp,
} from "react-icons/fa";

import { SiFiverr, SiUpwork } from "react-icons/si";
import { MdEmail } from "react-icons/md";

function Contacts() {
  return (
    <div className="grid grid-cols-1 place-items-center mx-5 ">
      <div className="border p-4">
        <h2 className="text-2xl font-bold mb-5">Contact Me</h2>

        <div className="flex justify-center flex-wrap gap-4 mb-8">
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61585938461800"
            className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full hover:scale-110 transition"
          >
            <FaFacebook size={24} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/llemaurc/"
            className="w-12 h-12 flex items-center justify-center bg-pink-500 text-white rounded-full hover:scale-110 transition"
          >
            <FaInstagram size={24} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mark-daniel-partoza-71499530b"
            className="w-12 h-12 flex items-center justify-center bg-blue-700 text-white rounded-full hover:scale-110 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            target="_blank"
            href="https://www.fiverr.com/markdaniel04"
            className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full hover:scale-110 transition"
          >
            <SiFiverr size={24} />
          </a>
          <a
            target="_blank"
            href="https://www.upwork.com/freelancers/~019b8051112d5b614c?mp_source=share"
            className="w-12 h-12 flex items-center justify-center bg-emerald-600 text-white rounded-full hover:scale-110 transition"
          >
            <SiUpwork size={24} />
          </a>
          <a
            target="_blank"
            href="https://www.reddit.com/user/llemaurc/"
            className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-full hover:scale-110 transition"
          >
            <FaReddit size={24} />
          </a>
          <a
            target="_blank"
            href="https://discordapp.com/users/llemaurc"
            className="w-12 h-12 flex items-center justify-center bg-indigo-600 text-white rounded-full hover:scale-110 transition"
          >
            <FaDiscord size={24} />
          </a>
          <a
            target="_blank"
            href="https://wa.link/rqget8"
            className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full hover:scale-110 transition"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md p-5 space-y-3">
          <div className="flex items-center gap-2">
            <MdEmail size={24} />
            <span>partozamark2005@gmail.com</span>
          </div>

          <div className="flex items-center gap-2">
            <FaWhatsapp size={24} />
            <span>+63 9637865397</span>
          </div>

          <div className="text-gray-500 text-sm">
            Feel free to message me anytime for projects, collaborations, or
            freelance work.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
