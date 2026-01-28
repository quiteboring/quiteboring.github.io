export interface Project {
  name: string;
  description: string;
  url?: string;
}

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
