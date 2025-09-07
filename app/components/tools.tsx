import {
  TbBrandJavascript,
  TbBrandKotlin,
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";
import { RiJavaLine } from "react-icons/ri";

const tools = [
  { icon: <TbBrandKotlin />, color: "#7f52ff" },
  { icon: <RiJavaLine />, color: "#f89820" },
  { icon: <TbBrandMongodb />, color: "#47a248" },
  { icon: <TbBrandNextjs />, color: "#FFFFFF" },
  { icon: <TbBrandReact />, color: "#61DAFB" },
  { icon: <TbBrandTailwind />, color: "#06B6D4" },
  { icon: <TbBrandJavascript />, color: "#f7df1e" },
  { icon: <TbBrandTypescript />, color: "#3178c6" },
];

export function Tools() {
  return (
    <div className="col-span-3 grid grid-cols-8 gap-2 rounded-[10px] bg-black p-3 text-left ring-2 ring-white/10">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="flex items-center justify-center text-2xl"
          style={{ color: tool.color }}
        >
          {tool.icon}
        </div>
      ))}
    </div>
  );
}

