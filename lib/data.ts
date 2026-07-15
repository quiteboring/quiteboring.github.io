import { FiHome, FiFolder, FiUser } from "react-icons/fi";

export const discordId = "1441859003708866601";

export const sections = [
  { id: "home", label: "Home", icon: FiHome },
  { id: "about", label: "About Me", icon: FiUser },
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
