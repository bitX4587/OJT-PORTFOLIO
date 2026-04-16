import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import {
  SiExpo,
  SiPhp,
  SiTailwindcss,
  SiArduino,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiGodotengine,
  SiPycharm,
  SiPython,
  SiExpress,
  SiCplusplus,
  SiBootstrap,
  SiReact,
  SiHtml5,
  SiSqlite,
  SiFramer,
  SiVite,
  SiXendit,
  SiCss,
  SiSocket,
  SiInfinityfree,
  SiGmail,
  SiTinkercad,
} from "react-icons/si";
import { DiNodejs, DiTerminal, DiSublime, DiEclipse } from "react-icons/di";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaCode, FaCloud, FaJava, FaProjectDiagram } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

import ImageSlider from "../components/imageslider";

const toolIcons: Record<string, React.ReactNode> = {
  // Web
  React: <SiReact className="text-blue-500" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
  HTML: <SiHtml5 className="text-orange-500" />,
  CSS: <SiCss className="text-yellow-500" />,
  PHP: <SiPhp className="text-indigo-500" />,
  Express: <SiExpress className="text-gray-500" />,
  NodeJS: <DiNodejs className="text-green-600" />,

  // Styling
  Tailwind: <SiTailwindcss className="text-sky-400" />,
  Bootstrap: <SiBootstrap className="text-purple-500" />,

  // Database
  MySQL: <SiMysql className="text-orange-500" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  SQLite: <SiSqlite className="text-blue-400" />,

  // Mobile
  Expo: <SiExpo className="text-black" />,
  ReactNative: <TbBrandReactNative className="text-blue-600" />,

  // Game Dev
  Godot: <SiGodotengine className="text-blue-400" />,

  // Programming
  Python: <SiPython className="text-blue-600" />,
  Cpp: <SiCplusplus className="text-blue-700" />,
  Java: <FaJava className="text-orange-500" />,

  // Tools
  Git: <SiGit className="text-orange-600" />,
  GitHub: <SiGithub className="text-black" />,
  Postman: <SiPostman className="text-orange-500" />,
  Arduino: <SiArduino className="text-teal-500" />,
  Cloud: <FaCloud className="text-blue-500" />,
  Xendit: <SiXendit className="text-blue-500" />,
  Gmail: <SiGmail className="text-red-500" />,
  Socket: <SiSocket className="text-pink-500" />,
  InfinityFree: <SiInfinityfree className="text-purple-500" />,
  Tinkercad: <SiTinkercad className="text-red-500" />,
  Diagram: <FaProjectDiagram className="text-white" />,

  // IDEs / Editors
  VSCode: <VscVscodeInsiders className="text-blue-500" />,
  Sublime: <DiSublime className="text-orange-400" />,
  Eclipse: <DiEclipse className="text-purple-600" />,
  PyCharm: <SiPycharm className="text-green-500" />,

  Framer: <SiFramer className="text-pink-500" />,
  Vite: <SiVite className="text-purple-500" />,

  // Fallback
  CLI: <DiTerminal className="text-gray-500" />,
  Default: <FaCode className="text-gray-400" />,
};

// CLI Projects
import IAMC from "../assets/projects/CLI/C++/I AM C++.png";
import JavaLAb1 from "../assets/projects/CLI/Java/lab1.png";
import JavaLAb2 from "../assets/projects/CLI/Java/lab2.png";
import JavaLAb3 from "../assets/projects/CLI/Java/lab3.png";
import JavaLAb4 from "../assets/projects/CLI/Java/lab4.png";
import JavaLAb5 from "../assets/projects/CLI/Java/lab5.png";
import JavaLAb6 from "../assets/projects/CLI/Java/lab6.png";
import JavaLAb7 from "../assets/projects/CLI/Java/lab7.png";
import JavaLAb8 from "../assets/projects/CLI/Java/lab8.png";
import JavaLAb9 from "../assets/projects/CLI/Java/lab9.png";
import JavaLAb10 from "../assets/projects/CLI/Java/lab10.png";
import Alerts from "../assets/projects/CLI/Python/Alerts.png";
import ChatBot from "../assets/projects/CLI/Python/ChatBot.png";
import Grammar from "../assets/projects/CLI/Python/Grammar.png";
import GrinProgram from "../assets/projects/CLI/Python/Grin Program.png";
import MutantRPG from "../assets/projects/CLI/Python/Mutant RPG.png";
import MyAnimalDictionary from "../assets/projects/CLI/Python/My Animal Dictionary.png";
import PersonalData from "../assets/projects/CLI/Python/Personal Data.png";
import QueenState from "../assets/projects/CLI/Python/QueenState.png";
import Registration from "../assets/projects/CLI/Python/Registration.png";
import TkinterForm from "../assets/projects/CLI/Python/Tkinter Form.png";

// Diagram Projects
import SmartPathFITDFDLEVEL2 from "../assets/projects/Design/Smark Tracking PATHFIT APPLICATION DIAGRAM LEVEL 2 DFD.jpg";
import SmartBurialDFDLEVEL2 from "../assets/projects/Design/Smart Tracking Burial APPLICATION DIAGRAM LEVEL 2 DFD.png";

// Game Projects
import ComputerMatchMakingGame from "../assets/projects/Games/Computer Match Making Game.png";
import FoodMatchMakingGame from "../assets/projects/Games/Food Match Making Game.png";
import PlatformerGame from "../assets/projects/Games/Platformer Game.png";

// IoT Projects
import CO2ConcentrationIndicator from "../assets/projects/Simulation/CO2 Concentration Indicator.png";
import FireAlarmDetector from "../assets/projects/Simulation/Fire Alarm Detector.png";
import HelloWorldLCD from "../assets/projects/Simulation/Hello World 16 x 2.png";
import ObstacleDetector from "../assets/projects/Simulation/Obstacle Detector.png";
import WeatherStation from "../assets/projects/Simulation/Weather Station.png";

// Mobile Projects
import MyRecipe from "../assets/projects/Mobiles/My Recipe.jpg";

// Website Projects
import AnimeWebsite from "../assets/projects/Websites/Anime Website/desktop/cover.png";
import AnimeWebsite1 from "../assets/projects/Websites/Anime Website/desktop/cover1.png";
import AnimeWebsite2 from "../assets/projects/Websites/Anime Website/desktop/cover2.png";
import AnimeWebsite3 from "../assets/projects/Websites/Anime Website/desktop/cover3.png";
import AnimeWebsite4 from "../assets/projects/Websites/Anime Website/desktop/cover4.png";

import ArtGallery from "../assets/projects/Websites/Art-Gallery/desktop/cover.png";
import ArtGallery1 from "../assets/projects/Websites/Art-Gallery/desktop/cover1.png";
import ArtGallery2 from "../assets/projects/Websites/Art-Gallery/desktop/cover2.png";

import BarangayInfoSystem from "../assets/projects/Websites/Barangay Infosys/desktop/cover.png";
import BarangayInfoSystem1 from "../assets/projects/Websites/Barangay Infosys/desktop/cover1.png";
import BarangayInfoSystem2 from "../assets/projects/Websites/Barangay Infosys/desktop/cover2.png";
import BarangayInfoSystem3 from "../assets/projects/Websites/Barangay Infosys/desktop/cover3.png";
import BarangayInfoSystem4 from "../assets/projects/Websites/Barangay Infosys/desktop/cover4.png";
import BarangayInfoSystem5 from "../assets/projects/Websites/Barangay Infosys/desktop/cover5.png";
import BarangayInfoSystem6 from "../assets/projects/Websites/Barangay Infosys/desktop/cover6.png";
import BarangayInfoSystem7 from "../assets/projects/Websites/Barangay Infosys/desktop/cover7.png";
import BarangayInfoSystem8 from "../assets/projects/Websites/Barangay Infosys/desktop/cover8.png";
import BarangayInfoSystem9 from "../assets/projects/Websites/Barangay Infosys/desktop/cover9.png";
import BarangayInfoSystem10 from "../assets/projects/Websites/Barangay Infosys/desktop/cover10.png";
import BarangayInfoSystem11 from "../assets/projects/Websites/Barangay Infosys/desktop/cover11.png";
import BarangayInfoSystem12 from "../assets/projects/Websites/Barangay Infosys/desktop/cover12.png";

import FreshNest from "../assets/projects/Websites/E-Grocery/desktop/cover.png";
import FreshNest1 from "../assets/projects/Websites/E-Grocery/desktop/cover1.png";
import FreshNest2 from "../assets/projects/Websites/E-Grocery/desktop/cover2.png";

import EHomes5BookingSystem from "../assets/projects/Websites/E-Homes-5-Apartment/desktop/cover.png";
import EHomes5BookingSystem1 from "../assets/projects/Websites/E-Homes-5-Apartment/desktop/cover1.png";
import EHomes5BookingSystem2 from "../assets/projects/Websites/E-Homes-5-Apartment/desktop/cover2.png";
import EHomes5BookingSystem3 from "../assets/projects/Websites/E-Homes-5-Apartment/desktop/cover3.png";
import EHomes5BookingSystem4 from "../assets/projects/Websites/E-Homes-5-Apartment/desktop/cover4.png";
import EHomes5BookingSystem5 from "../assets/projects/Websites/E-Homes-5-Apartment/desktop/cover5.png";

import GraduatesEbook from "../assets/projects/Websites/Graduates E-book/desktop/cover.png";
import GraduatesEbook1 from "../assets/projects/Websites/Graduates E-book/desktop/cover1.png";
import GraduatesEbook2 from "../assets/projects/Websites/Graduates E-book/desktop/cover2.png";
import GraduatesEbook3 from "../assets/projects/Websites/Graduates E-book/desktop/cover3.png";
import GraduatesEbook4 from "../assets/projects/Websites/Graduates E-book/desktop/cover4.png";

import InformationHub from "../assets/projects/Websites/Information Hub/desktop/cover.png";
import InformationHub1 from "../assets/projects/Websites/Information Hub/desktop/cover1.png";
import InformationHub2 from "../assets/projects/Websites/Information Hub/desktop/cover2.png";
import InformationHub3 from "../assets/projects/Websites/Information Hub/desktop/cover3.png";
import InformationHub4 from "../assets/projects/Websites/Information Hub/desktop/cover4.png";

import FirstPortfolio from "../assets/projects/Websites/Mark's First Portfolio Website/desktop/cover.png";
import FreelancePortfolio from "../assets/projects/Websites/Mark's Freelance Website/cover.png";

import NailsBeautyAndBeyond from "../assets/projects/Websites/Nails, Beauty and Beyond/desktop/cover.png";
import NailsBeautyAndBeyond1 from "../assets/projects/Websites/Nails, Beauty and Beyond/desktop/cover1.png";
import NailsBeautyAndBeyond2 from "../assets/projects/Websites/Nails, Beauty and Beyond/desktop/cover2.png";
import NailsBeautyAndBeyond3 from "../assets/projects/Websites/Nails, Beauty and Beyond/desktop/cover3.png";
import NailsBeautyAndBeyond4 from "../assets/projects/Websites/Nails, Beauty and Beyond/desktop/cover4.png";
import NailsBeautyAndBeyond5 from "../assets/projects/Websites/Nails, Beauty and Beyond/desktop/cover5.png";
import NailsBeautyAndBeyond6 from "../assets/projects/Websites/Nails, Beauty and Beyond/desktop/cover6.png";
import NailsBeautyAndBeyond7 from "../assets/projects/Websites/Nails, Beauty and Beyond/desktop/cover7.png";
import NailsBeautyAndBeyond8 from "../assets/projects/Websites/Nails, Beauty and Beyond/desktop/cover8.png";

import OrgMerchWebsite from "../assets/projects/Websites/OrgMerch Website/desktop/cover.png";
import OrgMerchWebsite1 from "../assets/projects/Websites/OrgMerch Website/desktop/cover1.png";
import OrgMerchWebsite2 from "../assets/projects/Websites/OrgMerch Website/desktop/cover2.png";
import OrgMerchWebsite3 from "../assets/projects/Websites/OrgMerch Website/desktop/cover3.png";
import OrgMerchWebsite4 from "../assets/projects/Websites/OrgMerch Website/desktop/cover4.png";
import OrgMerchWebsite5 from "../assets/projects/Websites/OrgMerch Website/desktop/cover5.png";
import OrgMerchWebsite6 from "../assets/projects/Websites/OrgMerch Website/desktop/cover6.png";
import OrgMerchWebsite7 from "../assets/projects/Websites/OrgMerch Website/desktop/cover7.png";
import OrgMerchWebsite8 from "../assets/projects/Websites/OrgMerch Website/desktop/cover8.png";
import OrgMerchWebsite9 from "../assets/projects/Websites/OrgMerch Website/desktop/cover9.png";
import OrgMerchWebsite10 from "../assets/projects/Websites/OrgMerch Website/desktop/cover10.png";
import OrgMerchWebsite11 from "../assets/projects/Websites/OrgMerch Website/desktop/cover11.png";
import OrgMerchWebsite12 from "../assets/projects/Websites/OrgMerch Website/desktop/cover12.png";
import OrgMerchWebsite13 from "../assets/projects/Websites/OrgMerch Website/desktop/cover13.png";
import OrgMerchWebsite14 from "../assets/projects/Websites/OrgMerch Website/desktop/cover14.png";

import SmartWeather from "../assets/projects/Websites/Smart Weather/desktop/cover.png";
import SmartWeather1 from "../assets/projects/Websites/Smart Weather/desktop/cover1.png";

// Reusable Components
import CategoryContainer from "../components/categorycont";
import Button from "../components/button";

const projects = [
  {
    images: [
      BarangayInfoSystem,
      BarangayInfoSystem1,
      BarangayInfoSystem2,
      BarangayInfoSystem3,
      BarangayInfoSystem4,
      BarangayInfoSystem5,
      BarangayInfoSystem6,
      BarangayInfoSystem7,
      BarangayInfoSystem8,
      BarangayInfoSystem9,
      BarangayInfoSystem10,
      BarangayInfoSystem11,
      BarangayInfoSystem12,
    ],
    title: "Barangay Information System",
    desc: "A web-based information management system designed to organize and manage barangay records, improving accessibility and data handling efficiency.",
    category: "Website",
    link: "a",
    tools: [
      "HTML",
      "Bootstrap",
      "JavaScript",
      "PHP",
      "MySQL",
      "Xendit",
      "InfinityFree",
    ],
  },
  {
    images: [FreelancePortfolio],
    title: "Codex Intel - Freelance Portfolio Website",
    desc: "A freelance portfolio website showcasing projects, skills, and credentials with a modern and responsive UI design.",
    category: "Website",
    link: "https://mark-daniel-partoza-portfolio-v-1.vercel.app/",
    tools: ["React", "Framer", "Vite", "Tailwind", "Gmail"],
  },
  {
    images: [
      GraduatesEbook,
      GraduatesEbook1,
      GraduatesEbook2,
      GraduatesEbook3,
      GraduatesEbook4,
    ],
    title: "Graduates E-Book",
    desc: "A digital publication system designed to present graduate profiles and achievements in an organized e-book format.",
    category: "Website",
    link: "https://graduates-ebook-management.vercel.app/",
    tools: [
      "React",
      "Bootstrap",
      "JavaScript",
      "MongoDB",
      "Express",
      "NodeJS",
      "Socket",
    ],
  },
  {
    images: [FirstPortfolio],
    title: "BitX4587 - First Website Portfolio",
    desc: "An early-stage portfolio project showcasing foundational web development skills and UI structuring.",
    category: "Website",
    link: "https://bitx4587.github.io/PORTFOLIO-1/",
    tools: ["HTML", "CSS", "JavaScript", "GitHub"],
  },
  {
    images: [
      AnimeWebsite,
      AnimeWebsite1,
      AnimeWebsite2,
      AnimeWebsite3,
      AnimeWebsite4,
    ],
    title: "Anime Page",
    desc: "A themed website displaying anime collections with interactive UI components and responsive design.",
    category: "Website",
    link: "https://bitx4587.github.io/ANIME-WEBSITE/",
    tools: ["HTML", "JavaScript", "Tailwind", "GitHub"],
  },
  {
    images: [ArtGallery, ArtGallery1, ArtGallery2],
    title: "Digital Art Gallery",
    desc: "A responsive gallery platform for showcasing digital artworks with clean UI presentation and categorization.",
    category: "Website",
    link: "https://art-gallery-system.is-great.org/Art_Collection_System/src/index.php",
    tools: ["HTML", "Bootstrap", "JavaScript", "PHP", "MySQL", "InfinityFree"],
  },
  {
    images: [FreshNest, FreshNest1, FreshNest2],
    title: "FreshNest E-Commerce",
    desc: "A modern e-commerce frontend design focused on clean product presentation and user-friendly navigation.",
    category: "Website",
    link: "https://bitx4587.github.io/E-Grocery",
    tools: ["HTML", "JavaScript", "Tailwind", "GitHub"],
  },
  {
    images: [
      EHomes5BookingSystem,
      EHomes5BookingSystem1,
      EHomes5BookingSystem2,
      EHomes5BookingSystem3,
      EHomes5BookingSystem4,
      EHomes5BookingSystem5,
    ],
    title: "E-Homes 5 Apartment",
    desc: "A rental management system for apartment bookings, tenant tracking, and unit availability management.",
    category: "Website",
    link: "https://e-homes-5-apartment.great-site.net/src/index.php?i=1",
    tools: [
      "HTML",
      "Bootstrap",
      "JavaScript",
      "PHP",
      "MySQL",
      "Gmail",
      "InfinityFree",
    ],
  },
  {
    images: [
      InformationHub,
      InformationHub1,
      InformationHub2,
      InformationHub3,
      InformationHub4,
    ],
    title: "Information Hub Portal",
    desc: "A centralized information system for organizing and accessing structured data efficiently.",
    category: "Website",
    link: "https://information-hub-system.great-site.net/",
    tools: ["HTML", "Bootstrap", "JavaScript", "PHP", "MySQL", "InfinityFree"],
  },
  {
    images: [
      NailsBeautyAndBeyond,
      NailsBeautyAndBeyond1,
      NailsBeautyAndBeyond2,
      NailsBeautyAndBeyond3,
      NailsBeautyAndBeyond4,
      NailsBeautyAndBeyond5,
      NailsBeautyAndBeyond6,
      NailsBeautyAndBeyond7,
      NailsBeautyAndBeyond8,
    ],
    title: "Nails Beauty & Beyond",
    desc: "A service booking system for salon appointments with scheduling and service management features.",
    category: "Website",
    link: "https://hair-nails-and-beyond.is-best.net/beyond/src/index.php",
    tools: [
      "HTML",
      "Bootstrap",
      "JavaScript",
      "PHP",
      "MySQL",
      "Gmail",
      "InfinityFree",
    ],
  },
  {
    images: [
      OrgMerchWebsite,
      OrgMerchWebsite1,
      OrgMerchWebsite2,
      OrgMerchWebsite3,
      OrgMerchWebsite4,
      OrgMerchWebsite5,
      OrgMerchWebsite6,
      OrgMerchWebsite7,
      OrgMerchWebsite8,
      OrgMerchWebsite9,
      OrgMerchWebsite10,
      OrgMerchWebsite11,
      OrgMerchWebsite12,
      OrgMerchWebsite13,
      OrgMerchWebsite14,
    ],
    title: "OrgMerch Store",
    desc: "An online store interface for showcasing and managing organizational merchandise products.",
    category: "Website",
    link: "https://org-merch.great-site.net/src/index.php",
    tools: [
      "HTML",
      "Bootstrap",
      "JavaScript",
      "PHP",
      "MySQL",
      "Xendit",
      "InfinityFree",
    ],
  },
  {
    images: [SmartWeather, SmartWeather1],
    title: "Smart Weather",
    desc: "A weather information web app displaying real-time weather updates and forecasts.",
    category: "Website",
    link: "https://bitx4587.github.io/Weather-App/",
    tools: ["HTML", "Tailwind", "JavaScript", "GitHub"],
  },

  {
    images: [IAMC],
    title: "Shopping Game - CLI",
    desc: "A terminal-based story driven shopping game for managing and tracking items using command-line interaction.",
    category: "CLI",
    link: "#",
    tools: ["Cpp", "CLI", "Default"],
  },
  {
    images: [JavaLAb1],
    title: "Java Lab 1 – Introduction to Java",
    desc: "Basic Java programming exercises covering syntax, variables, and input/output operations.",
    category: "CLI",
    link: "#",
    tools: ["Java", "Eclipse", "CLI", "Default"],
  },
  {
    images: [JavaLAb2],
    title: "Java Lab 2 – Control Structures",
    desc: "Exercises focused on conditional statements and looping structures in Java.",
    category: "CLI",
    link: "#",
    tools: ["Java", "Eclipse", "CLI", "Default"],
  },
  {
    images: [JavaLAb3],
    title: "Java Lab 3 – Arrays and Strings",
    desc: "Practice on array manipulation and string handling in Java.",
    category: "CLI",
    link: "#",
    tools: ["Java", "Eclipse", "CLI", "Default"],
  },
  {
    images: [JavaLAb4],
    title: "Java Lab 4 – Methods and Functions",
    desc: "Implementation of reusable methods and function-based programming concepts.",
    category: "CLI",
    link: "#",
    tools: ["Java", "Eclipse", "CLI", "Default"],
  },
  {
    images: [JavaLAb5],
    title: "Java Lab 5 – Object-Oriented Basics",
    desc: "Introduction to OOP concepts including classes and objects.",
    category: "CLI",
    link: "#",
    tools: ["Java", "Eclipse", "CLI", "Default"],
  },
  {
    images: [JavaLAb6],
    title: "Java Lab 6 – Inheritance",
    desc: "Practice on inheritance and code reusability in object-oriented programming.",
    category: "CLI",
    link: "#",
    tools: ["Java", "Eclipse", "CLI", "Default"],
  },
  {
    images: [JavaLAb7],
    title: "Java Lab 7 – Polymorphism",
    desc: "Exercises on method overriding and polymorphism concepts.",
    category: "CLI",
    link: "#",
    tools: ["Java", "Eclipse", "CLI", "Default"],
  },
  {
    images: [JavaLAb8],
    title: "Java Lab 8 – Exception Handling",
    desc: "Handling runtime errors using try-catch and exception handling techniques.",
    category: "CLI",
    link: "#",
    tools: ["Java", "Eclipse", "CLI", "Default"],
  },
  {
    images: [JavaLAb9],
    title: "Java Lab 9 – Email GUI System",
    desc: "Developed a Gmail-like email interface using Java GUI, featuring message composition, inbox-style layout, and basic email interaction functionality with event handling.",
    category: "CLI",
    link: "#",
    tools: ["Java", "Eclipse", "CLI", "Default"],
  },
  {
    images: [JavaLAb10],
    title: "Java Lab 10 – Final Project Exercise",
    desc: "Final laboratory exercise combining all learned Java programming concepts.",
    category: "CLI",
    link: "#",
    tools: ["Java", "Eclipse", "CLI", "Default"],
  },
  {
    images: [Alerts],
    title: "Python Alerts System - CLI",
    desc: "A simple python-based alert system demonstrating event handling and notifications.",
    category: "CLI",
    link: "#",
    tools: ["PyCharm", "Python", "CLI", "Default"],
  },
  {
    images: [ChatBot],
    title: "Python Chatbot Console App - CLI",
    desc: "A basic console-based chatbot system using Python logic and input handling.",
    category: "CLI",
    link: "#",
    tools: ["PyCharm", "Python", "CLI", "Default"],
  },
  {
    images: [Grammar],
    title: "Grammar Checker Tool - CLI",
    desc: "A rule-based grammar checking program implemented in Python.",
    category: "CLI",
    link: "#",
    tools: ["PyCharm", "Python", "CLI", "Default"],
  },
  {
    images: [GrinProgram],
    title: "Grin Utility Program - CLI",
    desc: "A small utility program demonstrating structured programming concepts in Python.",
    category: "CLI",
    link: "#",
    tools: ["PyCharm", "Python", "CLI", "Default"],
  },
  {
    images: [MutantRPG],
    title: "Mutant RPG Console Game - CLI",
    desc: "A text-based RPG game built using Python showcasing logic, combat, and decision-making systems.",
    category: "CLI",
    link: "#",
    tools: ["PyCharm", "Python", "CLI", "Default"],
  },
  {
    images: [MyAnimalDictionary],
    title: "My Animal Dictionary - CLI",
    desc: "A simple dictionary application that stores and retrieves animal information via terminal.",
    category: "CLI",
    link: "#",
    tools: ["PyCharm", "Python", "CLI", "Default"],
  },
  {
    images: [PersonalData],
    title: "Personal Data Management System",
    desc: "A CLI-based system for storing and managing personal data records.",
    category: "CLI",
    link: "#",
    tools: ["PyCharm", "Python", "CLI", "Default"],
  },
  {
    images: [QueenState],
    title: "Queen State Problem Solver",
    desc: "A logic-based problem-solving program using algorithmic approaches in Python.",
    category: "CLI",
    link: "#",
    tools: ["PyCharm", "Python", "CLI", "Default"],
  },
  {
    images: [Registration],
    title: "Student Registration System",
    desc: "A CLI registration system for managing student enrollment data.",
    category: "CLI",
    link: "#",
    tools: ["PyCharm", "Python", "CLI", "Default"],
  },
  {
    images: [TkinterForm],
    title: "Python Tkinter Form App",
    desc: "A GUI-based form application built using Python Tkinter for user input handling.",
    category: "CLI",
    link: "#",
    tools: ["PyCharm", "Python", "CLI", "Default", "Tkinter"],
  },

  {
    images: [MyRecipe],
    title: "My Recipe",
    desc: "A mobile recipe management app featuring offline storage, OCR-based text scanning, recipe categorization, and an interactive UI with expandable and collapsible recipe cards for better organization and accessibility.",
    category: "Mobile",
    link: "#",
    tools: ["ReactNative", "SQLite", "Expo"],
  },

  {
    images: [ComputerMatchMakingGame],
    title: "Computer Matchmaking Game",
    desc: "An educational game that matches computer components with their correct functions.",
    category: "Games",
    link: "#",
    tools: ["Python", "PyCharm"],
  },
  {
    images: [FoodMatchMakingGame],
    title: "Food Matching Game",
    desc: "A fun memory-based matching game involving food items and categories.",
    category: "Games",
    link: "#",
    tools: ["Python", "PyCharm"],
  },
  {
    images: [PlatformerGame],
    title: "2D Platformer Game",
    desc: "A simple 2D platformer featuring movement mechanics, levels, and obstacles.",
    category: "Games",
    link: "#",
    tools: ["Python", "PyCharm"],
  },

  {
    images: [CO2ConcentrationIndicator],
    title: "CO₂ Concentration Indicator",
    desc: "An IoT system that monitors and displays CO₂ levels using sensor-based input.",
    category: "IoT",
    link: "https://www.tinkercad.com/things/e9VWD5oKaWQ-co2-concentration-indicator",
    tools: ["Arduino", "Cpp", "Tinkercad"],
  },
  {
    images: [FireAlarmDetector],
    title: "Fire Alarm Detection System",
    desc: "An Arduino-based fire detection system that triggers alerts when smoke or heat is detected.",
    category: "IoT",
    link: "https://www.tinkercad.com/things/1C9Lt3EVcvF-fire-alarm-detector?sharecode=y9_IcFXJ0J53n5E_jCF_o9ZP1jzKUJrHCd5DhQS1Z4c",
    tools: ["Arduino", "Cpp", "Tinkercad"],
  },
  {
    images: [HelloWorldLCD],
    title: "LCD Display System",
    desc: "A basic Arduino project displaying text output on an LCD screen.",
    category: "IoT",
    link: "https://www.tinkercad.com/things/4KuG9XeFVnx-hello-world-16-x-2",
    tools: ["Arduino", "Cpp", "Tinkercad"],
  },
  {
    images: [ObstacleDetector],
    title: "Obstacle Detection System",
    desc: "An IoT-based system that detects obstacles using ultrasonic sensors.",
    category: "IoT",
    link: "https://www.tinkercad.com/things/fmVng5FDEzT-obstacle-detector",
    tools: ["Arduino", "Cpp", "Tinkercad"],
  },
  {
    images: [WeatherStation],
    title: "Smart Weather Station",
    desc: "An IoT weather monitoring system tracking temperature and humidity in real-time.",
    category: "IoT",
    link: "https://www.tinkercad.com/things/iN7GpE38AWv-weather-station",
    tools: ["Arduino", "Cpp", "Tinkercad"],
  },

  {
    images: [SmartPathFITDFDLEVEL2],
    title: "Smart PathFIT System DFD - Level 2",
    desc: "A structured data flow diagram representing the Smart PathFIT System processes.",
    category: "Diagrams",
    link: "#",
    tools: ["Diagram"],
  },
  {
    images: [SmartBurialDFDLEVEL2],
    title: "Smart Burial System DFD - Level 2",
    desc: "A structured data flow diagram representing the Smart Burial System processes.",
    category: "Diagrams",
    link: "#",
    tools: ["Diagram"],
  },
];

const categories = [
  "All",
  "Website",
  "Mobile",
  "Games",
  "CLI",
  "IoT",
  "Diagrams",
];

function Projects({ expanded }: { expanded: boolean }) {
  const [category, setCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0); // 👈 add this

  const filteredProjects =
    category === "All"
      ? projects
      : projects.filter((p) => p.category === category);

  return (
    <div className="grid grid-cols-1 place-items-center">
      {/* PREVIEW MODE */}
      {!expanded && (
        <div className="relative w-full max-w-lg mx-auto cursor-pointer">
          {" "}
          {/* 👈 max-w-sm */}
          <h1 className="text-xl font-bold text-center m-3">My Projects</h1>
          <ImageSlider
            images={projects.map((p) => p.images[0])}
            autoPlay={true}
            interactive={false}
            onSlideChange={setActiveIndex}
          />
          <div className="text-center md:text-justify">
            <div className="flex gap-2 justify-center text-2xl border p-2 flex-wrap">
              {projects[activeIndex].tools?.map(
                (
                  tool,
                  i, // 👈 use activeIndex
                ) => (
                  <div key={i} className="hover:scale-110 transition">
                    {toolIcons[tool]}
                  </div>
                ),
              )}
            </div>
            <div className="p-5">
              <h3 className="font-semibold">{projects[activeIndex].title}</h3>{" "}
              {/* 👈 */}
              <p className="mt-1 text-gray-600 text-sm">
                {projects[activeIndex].desc}
              </p>{" "}
              {/* 👈 */}
            </div>
          </div>
        </div>
      )}

      {/* EXPANDED MODE */}
      {expanded && (
        <div className="grid grid-cols-1 mx-5">
          <h1 className="text-xl font-bold text-center mt-3">My Projects</h1>
          <CategoryContainer classname="flex mt-4 mb-2 gap-2 flex-wrap justify-center">
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`p-2 md:px-4 md:py-2 rounded ${
                  category === cat
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:cursor-pointer`}
              >
                {cat}
              </Button>
            ))}
          </CategoryContainer>

          {filteredProjects.map((project, index) => (
            <div
              className="relative w-full max-w-lg mx-auto border my-3 rounded-lg"
              key={index}
            >
              <div className="relative">
                <ImageSlider
                  images={project.images}
                  autoPlay={true}
                  interactive={true}
                  showNavigation={true}
                  compact={true}
                />
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2 z-10 bg-black/60 hover:bg-blue-600 
      text-white p-2 rounded-full backdrop-blur-sm transition duration-300 shadow-md"
                  >
                    <FiExternalLink size={18} />
                  </a>
                )}
              </div>
              <div className="text-center md:text-justify">
                <div className="flex gap-2 justify-center text-2xl border p-2 flex-wrap">
                  {project.tools?.map((tool, i) => (
                    <div
                      key={i}
                      className="hover:scale-110 transition cursor-pointer"
                    >
                      {toolIcons[tool]}
                    </div>
                  ))}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="mt-1 text-gray-600 text-sm">{project.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
