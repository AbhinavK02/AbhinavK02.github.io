// IMPORT ICONS
import { 
  FaPython, FaJava, FaLinux, FaDocker, FaGitAlt, 
  FaMicrochip, FaIndustry, FaTools, FaBroadcastTower, 
  FaCode, FaCube, FaPencilRuler, FaLayerGroup, FaPrint, 
  FaMemory, FaProjectDiagram 
} from "react-icons/fa";

import { 
  SiArduino, SiRaspberrypi, SiEspressif, SiJson, 
  SiCplusplus, SiGithubactions, SiFlutter, SiMysql, 
  SiMathworks, SiSolidworks, SiKicad, SiLatex 
} from "react-icons/si";

// MASTER SKILLS DATABASE
export const skillsDB = {
  // --- First List (Embedded & Hardware) ---
  arduino: {
    name: "Arduino",
    icon: <SiArduino />
  },
  raspberrypi: {
    name: "Raspberry Pi",
    icon: <SiRaspberrypi />
  },
  esp32: {
    name: "ESP32",
    icon: <SiEspressif />
  },
  plc: {
    name: "PLC Programming",
    icon: <FaIndustry />
  },
  pcbdesign: {
    name: "PCB Design",
    icon: <FaMemory />
  },
  pcbassembly: {
    name: "PCB Assembly",
    icon: <FaTools />
  },
  embedded: {
    name: "Embedded Systems",
    icon: <FaMicrochip />
  },
  lorawan: {
    name: "LoRaWAN",
    icon: <FaBroadcastTower />
  },
  cpp: {
    name: "C/C++",
    icon: <SiCplusplus />
  },
  json: {
    name: "JSON",
    icon: <SiJson />
  },

  // --- Second List (Software & DevOps) ---
  git: {
    name: "Git",
    icon: <FaGitAlt />
  },
  githubactions: {
    name: "GitHub Actions",
    icon: <SiGithubactions />
  },
  python: {
    name: "Python",
    icon: <FaPython />
  },
  flutter: {
    name: "Flutter",
    icon: <SiFlutter />
  },
  mysql: {
    name: "MySQL",
    icon: <SiMysql />
  },
  java: {
    name: "Java",
    icon: <FaJava />
  },
  kivy: {
    name: "Kivy",
    icon: <FaCode /> 
  },
  linux: {
    name: "Linux",
    icon: <FaLinux />
  },
  docker: {
    name: "Docker",
    icon: <FaDocker />
  },

  // --- Third List (Engineering & Design) ---
  matlab: {
    name: "MATLAB",
    icon: <SiMathworks />
  },
  simulink: {
    name: "Simulink",
    icon: <SiMathworks /> // Same as Matlab
  },
  solidworks: {
    name: "SolidWorks",
    icon: <SiSolidworks />
  },
  modeling3d: {
    name: "3D Modelling",
    icon: <FaCube />
  },
  drawing: {
    name: "Eng. Drawing",
    icon: <FaPencilRuler />
  },
  twinactivate: {
    name: "TwinActivate",
    icon: <FaProjectDiagram />
  },
  kicad: {
    name: "KiCAD",
    icon: <SiKicad />
  },
  latex: {
    name: "LaTeX",
    icon: <SiLatex />
  },
  slicing: {
    name: "Slicing Software",
    icon: <FaLayerGroup />
  },
  printing3d: {
    name: "3D Printing",
    icon: <FaPrint />
  }
};

// 2. YOUR PROJECTS
// Instead of typing "Java" again, just use the key "java"
export const projects = [
  {
    title: "Automated Worksheet Generator",
    description: "A Java & MySQL app for generating worksheets...",
    // LINKING THE SKILLS HERE:
    techStack: ["java", "mysql", "git"], 
    sourceUrl: "https://github.com/AbhinavK02/worksheet-gen",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React...",
    techStack: ["react", "git"],
    sourceUrl: "https://github.com/AbhinavK02/portfolio",
  },
  {
    title: "IoT Weather Station",
    description: "An Arduino-based weather monitor...",
    techStack: ["arduino", "python"],
    sourceUrl: "https://github.com/AbhinavK02/iot-station",
  }
];

// Helper function to export the DB if needed elsewhere
export const getSkill = (key) => skillsDB[key];