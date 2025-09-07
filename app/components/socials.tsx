import { FaGithub, FaDiscord } from "react-icons/fa";

export function Socials({ discordId }: { discordId: string }) {
  return (
    <div className="col-span-1 flex justify-center rounded-[10px] bg-black p-3 text-left ring-1 ring-white/10">
      <div>
        <p className="text-xs text-white/60">My socials are</p>
        <div className="flex items-center gap-4 mt-2">
          <a
            href="https://github.com/quiteboring"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white"
            aria-label="GitHub Profile"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href={`https://discordapp.com/users/${discordId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white"
            aria-label="Discord Profile"
          >
            <FaDiscord className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
