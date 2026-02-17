"use client";

import { useState } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { projects, tools } from "@/lib/constants";
import { getAge, getTimeUntilBirthday } from "@/lib/utils";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import DiscordVerification from "@/components/DiscordVerification";
import Grid from "@/components/Grid";
import OpenRCBoot from "@/components/OpenRCBoot";

export default function Home() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted && <OpenRCBoot onComplete={() => setBooted(true)} />}
      <main
        className={`mx-auto flex min-h-screen max-w-6xl flex-col justify-center p-8 transition-opacity duration-500 ${
          booted ? "opacity-100" : "opacity-0"
        }`}
      >
        <title>Home</title>
        <Grid />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-5">
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_160px] gap-5">
            {/* Main */}
            <div className="relative w-full rounded-lg border border-neutral-700 bg-neutral-900 p-5">
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
                  <p className="mt-2 text-sm text-neutral-400">
                    a {getAge(new Date(2009, 0, 5))} y/o developer
                  </p>
                  <p className="text-sm text-neutral-400">
                    {getTimeUntilBirthday(new Date(2009, 0, 5))}
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="relative rounded-lg border border-neutral-700 bg-neutral-900 p-5">
              <p className="mb-3 text-xs font-bold tracking-widest text-gray-500 uppercase dark:text-gray-400">
                Socials
              </p>
              <div className="flex flex-row sm:flex-col gap-2">
                <a
                  href="https://github.com/quiteboring"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm text-neutral-300 hover:border-slate-500 transition-colors"
                >
                  <FaGithub className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://discord.com/users/1441859003708866601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm text-neutral-300 hover:border-slate-500 transition-colors"
                >
                  <FaDiscord className="h-4 w-4" />
                  Discord
                </a>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="relative w-full rounded-lg border border-neutral-700 bg-neutral-900 p-5">
            <p className="mb-3 text-xs font-bold tracking-widest text-gray-500 uppercase dark:text-gray-400">
              Tools
            </p>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-md border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm text-neutral-300"
                >
                  <tool.icon className="h-4 w-4" style={tool.color ? { color: tool.color } : undefined} />
                  {tool.name}
                </div>
              ))}
            </div>
          </div>

          {/* Discord Verification */}
          <div className="relative w-full rounded-lg border border-neutral-700 bg-neutral-900 p-5">
            <p className="text-xs mb-3 font-bold tracking-widest text-gray-500 uppercase dark:text-gray-400">
              Discord Verification
            </p>
            <DiscordVerification />
          </div>
        </div>

        {/* Projects */}
        <div className="relative w-full rounded-lg border border-neutral-700 bg-neutral-900 p-5 lg:h-full">
          <p className="mb-3 text-xs font-bold tracking-widest text-gray-500 uppercase dark:text-gray-400">
            Projects
          </p>
          <div className="grid gap-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
