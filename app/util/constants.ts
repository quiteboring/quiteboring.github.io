import { LanyardSuccess } from "../types/lanyard";
import { RiJavaLine } from "react-icons/ri";
import {
  TbBrandCpp,
  TbBrandJavascript,
  TbBrandKotlin,
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";

export const tools = [
  { icon: TbBrandKotlin, color: "#7f52ff" },
  { icon: RiJavaLine, color: "#f89820" },
  { icon: TbBrandCpp, color: "#8c20f8ff" },
  { icon: TbBrandMongodb, color: "#47a248" },
  { icon: TbBrandNextjs, color: "#FFFFFF" },
  { icon: TbBrandReact, color: "#61DAFB" },
  { icon: TbBrandTailwind, color: "#06B6D4" },
  { icon: TbBrandJavascript, color: "#f7df1e" },
  { icon: TbBrandTypescript, color: "#3178c6" },
];

export const projects = [
  {
    name: "Cobalt",
    description: "A Hypixel Skyblock QOL mod.",
    tech: [tools[0], tools[1]],
    link: "https://discord.gg/cobaltmod",
  },
  {
    name: "Scatter",
    description: "A native obfuscator.",
    tech: [tools[0], tools[1], tools[2]],
  },
];

export const statusColors: Record<
  LanyardSuccess["data"]["discord_status"],
  string
> = {
  online: "#23a55a",
  idle: "#f0b232",
  dnd: "#f23f43",
  offline: "#80848e",
};

export const discordId = "1367543367277219840";
