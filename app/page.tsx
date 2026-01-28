import Image from "next/image";
import { FaDiscord, FaGithub } from "react-icons/fa";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/constants";

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto flex flex-col justify-center">
      <div className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-5 mb-8 relative">
        <div className="absolute top-5 right-5 flex gap-3">
          <a href="https://discord.com/users/1441859003708866601" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
            <FaDiscord className="w-5 h-5" />
          </a>

          <a href="https://github.com/quiteboring" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
            <FaGithub className="w-5 h-5" />
          </a>
        </div>

        <div className="flex items-start gap-4">
          <Image src="/profile.png" alt="Profile Picture" className="rounded-lg" width={100} height={100} />
          
          <div>
            <h1 className="text-2xl font-bold flex flex-wrap items-center gap-x-2">
              Nathan
              <span className="text-sm text-neutral-600">(quiteboring)</span>
            </h1>
            <div className="h-0.5 mt-2 bg-gradient-to-r from-zinc-800 to-transparent"></div>
            <p className="mt-2 text-sm text-neutral-400">a passionate 17 y/o developer</p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">
          projects
        </p>
        <div className="grid gap-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
