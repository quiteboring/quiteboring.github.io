export interface Project {
  name: string;
  description: string;
  url?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    name: "Cobalt",
    description: "a fabric mod for Hypixel Skyblock w/ automation features",
    url: "https://cobalt.quiteboring.dev",
    tags: ["Java", "Kotlin"],
  },
  {
    name: "Music Player",
    description: "a simple music player app for IOS devices",
    url: "https://github.com/quiteboring/music-player",
    tags: ["TypeScript", "React Native", "Expo"],
  },
  {
    name: "Website",
    description: "my personal website built w/ nextjs",
    tags: ["TypeScript", "React", "Next.js", "Tailwind"],
  },
];
