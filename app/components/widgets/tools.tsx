import { tools } from "../../util/constants";

export function Tools() {
  return (
    <div className="col-span-3 grid grid-cols-8 gap-2 rounded-[10px] bg-black p-3 text-left ring-2 ring-white/10">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="flex items-center justify-center text-2xl"
          style={{ color: tool.color }}
        >
          {<tool.icon />}
        </div>
      ))}
    </div>
  );
}
