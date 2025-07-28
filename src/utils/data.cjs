import {
  Code2,
  Briefcase,
  Heart,
  Coffee,
  BookOpen,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/ems.jpg";
import PROJECT_IMG_2 from "../assets/images/weather.jpg";
import PROJECT_IMG_3 from "../assets/images/login.jpg";
import PROJECT_IMG_4 from "../assets/images/todo.jpg";
// import { color, number } from "framer-motion";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "HTML", level: 95, color: "bg-orange-500" },
      { name: "CSS", level: 85, color: "bg-blue-600" },
      { name: "JavaScript", level: 88, color: "bg-green-600" },
      { name: "React", level: 85, color: "bg-cyan-500" },
      { name: "Tailwind CSS", level: 82, color: "bg-pink-500" },
    ],
  },

  {
    title: "Backend",
    icon: Server,
    description: "Building robust server-side solution",
    skills: [
      { name: "Node.js", level: 82, color: "bg-green-500" },
      { name: "Express.js", level: 80, color: "bg-cyan-500" },
      { name: "REST APIs", level: 90, color: "bg-orange-500" },
    ],
  },

  {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data storage",
    skills: [
      { name: "MongoDB", level: 75, color: "bg-green-600" },
      { name: "MySQL", level: 80, color: "bg-blue-700" },
    ],
  },

  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and scaling applications",
    skills: [
      { name: "Git", level: 80, color: "bg-orange-700" },
      // { name: "Postman", level: 85, color: "bg-purple-600" },
    ],
  },
];

export const TECH_STACK = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "React",
  "Node.Js",
  "Express.Js",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
];

export const STATS = [
  { number: "3+", label: "Projects Completed" },
  { number: "Fresher", label: "Years Experience" },
  { number: "4+", label: "Technologies" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Expense Management System",
    description:
      "This app includes user authentication with JWT, income and expense tracking, interactive charts, and the ability to export data in Excel format.",
    image: PROJECT_IMG_1,
    tags: [
      "React",
      "JavaScript",
      "Node.Js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/kittu0699/Expense-Management-System",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Developed a Weather App using React JS. Here we will get the current Weather data from OpenWeatherMap API and display the weather data like Temperature,  Weather condition, Humidity and Wind Speed according to the city.",
    image: PROJECT_IMG_2,
    tags: ["React", "CSS", "Open Source API"],
    liveUrl: "#",
    githubUrl: "https://github.com/kittu0699/weather-app",
    featured: true,
    category: "Web Application",
  },
  {
    id: 3,
    title: "Login Form",
    description:
      "Developed a full-stack login system using React.js, Node.js & Express.js, and MySQL.",
    image: PROJECT_IMG_3,
    tags: ["React", "CSS", "Node.js", "Express.js", "MySQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/kittu0699/Login-Form",
    featured: true,
    category: "Web Application",
  },
  {
    id: 4,
    title: "TO-DO List",
    description:
      "Developed a dynamic To-Do List web application using React.js for state management and CSS for responsive UI design.",
    image: PROJECT_IMG_4,
    tags: ["React", "CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/kittu0699/TO-DO-LIST",
    featured: true,
    category: "Web Application",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2023",
    title: "Started Coding Journey",
    company: "Self-taught",
    description:
      "Began learning web development with HTML, CSS, and JavaScript. Built my first website and fell in love with creating digital experiences.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2024",
    title: "First Internship",
    company: "Rays Edutech PVT Ltd.",
    description:
      "Joined as a frontend intern, working with React and learning modern development practices.",
    icon: Briefcase,
    color: "bg-green-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/kittu0699",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/kishan-mishra-9a2940334/",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: "https://x.com/KishanM03917650",
    color: "hover:text-sky-400",
    bgColor: "hover:bg-sky-500/10",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:kishanmishra0607@gmail.com",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-500/10",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "PATNA, BIHAR",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kishanmishra0607@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9110073545",
  },
];
