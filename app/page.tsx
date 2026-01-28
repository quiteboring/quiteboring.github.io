import Image from "next/image";
import { FaDiscord, FaGithub } from "react-icons/fa";
import ProjectCard from "@/components/ProjectCard";
import DiscordVerification from "@/components/DiscordVerification";
import { projects, tools } from "@/lib/constants";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center p-8">
      <title>Home</title>

      {/* Main Card */}
      <div className="relative mb-8 w-full rounded-lg border border-neutral-700 bg-neutral-900 p-5">
        <div className="absolute top-5 right-5 flex gap-3">
          <a
            href="https://discord.com/users/1441859003708866601"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 transition-colors hover:text-white"
          >
            <FaDiscord className="h-5 w-5" />
          </a>

          <a
            href="https://github.com/quiteboring"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 transition-colors hover:text-white"
          >
            <FaGithub className="h-5 w-5" />
          </a>
        </div>

        <div className="flex items-start gap-4">
          <Image
            src="/profile.png"
            alt="Profile Picture"
            className="rounded-lg"
            width={100}
            height={100}
          />

          <div>
            <h1 className="text-2xl font-bold">
              Nathan
            </h1>
            <div className="mt-2 h-0.5 bg-gradient-to-r from-zinc-800 to-transparent"></div>
            <p className="mt-2 text-sm text-neutral-400">a passionate 17 y/o developer</p>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="mb-8">
        <p className="mb-3 text-xs font-bold tracking-widest text-gray-500 uppercase dark:text-gray-400">
          Tools
        </p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-sm text-neutral-300"
            >
              <tool.icon className="h-4 w-4" style={tool.color ? { color: tool.color } : undefined} />
              {tool.name}
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div>
        <p className="mb-3 text-xs font-bold tracking-widest text-gray-500 uppercase dark:text-gray-400">
          Projects
        </p>
        <div className="grid gap-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* Discord Verification */}
      <div className="mt-8">
        <p className="mb-3 text-xs font-bold tracking-widest text-gray-500 uppercase dark:text-gray-400">
          Discord Verification
        </p>
        <DiscordVerification />
      </div>
    </main>
  );
}
