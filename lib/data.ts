import { FiHome, FiFolder, FiLink } from "react-icons/fi";

export const sections = [
  { id: "home", label: "Home", icon: FiHome },
  { id: "projects", label: "Projects", icon: FiFolder },

];

export const projects = [
  {
    title: "Cobalt",
    desc: "A free Hypixel Skyblock oriented mod for Fabric",
    tags: ["Kotlin", "Java", "Typescript", "DiscordJS", "NextJS", "Tailwind"],
  },
  {
    title: "V5",
    desc: "Next-generation client Hypixel Skyblock client.",
    tags: ["Kotlin", "Java", "Javascript", "Typescript", "C#", "C++", "CMake"],
  },
  {
    title: "SlayerXPOverlayFabric",
    desc: "A Fabric mod for Minecraft that overlays Slayer XP, kills per hour, and quest progress directly on your screen.",
    tags: ["Kotlin", "Java", "CSS"],
  }
];
