import { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiMongodb,
  SiKotlin,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiExpo,
  SiGithub,
  SiArchlinux,
} from "react-icons/si";
import { PythonIcon, FigmaIcon, VSCodeIcon, IntelliJIcon } from "@/components/CustomIcons";
import { GrJava } from "react-icons/gr";
import { BsWindows } from "react-icons/bs";
import { ComponentType, SVGProps } from "react";

export interface Tool {
  name: string;
  icon: IconType | ComponentType<SVGProps<SVGSVGElement>>;
  color?: string;
}

export const tools: Tool[] = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: PythonIcon },
  { name: "Java", icon: GrJava, color: "#E76F00" },
  { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "React Native", icon: SiReact, color: "#61DAFB" },
  { name: "Expo", icon: SiExpo, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "VS Code", icon: VSCodeIcon, color: "#007ACC" },
  { name: "IntelliJ IDEA", icon: IntelliJIcon },
  { name: "Figma", icon: FigmaIcon },
  { name: "Windows", icon: BsWindows, color: "#0078D4" },
  { name: "Arch Linux", icon: SiArchlinux, color: "#1793D1" },
];

export interface Project {
  name: string;
  description: string;
  url?: string;
}

export const discordIds: string[] = ["1441859003708866601", "1367543367277219840"];

export const projects: Project[] = [
  {
    name: "Cobalt",
    description: "a fabric mod for hypixel skyblock w/ automation features",
    url: "https://cobalt.quiteboring.dev",
  },
  {
    name: "Music Player",
    description: "a simple music player app for ios devices",
    url: "https://github.com/quiteboring/music-player",
  },
  {
    name: "Website",
    description: "my personal website built w/ nextjs",
  },
];
