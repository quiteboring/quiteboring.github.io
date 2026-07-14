"use client";

import { useEffect, useState } from "react";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";
import GithubRepo from "@/components/ui/GithubRepo";

interface Repo {
  name: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  archived: boolean;
  fork: boolean;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/quiteboring/repos?per_page=30")
      .then((res) => res.json())
      .then((data: Repo[]) =>
        setRepos(
          data
            .filter((r) => !r.fork)
            .sort((a, b) => b.stargazers_count + b.forks_count - (a.stargazers_count + a.forks_count))
            .slice(0, 8),
        ),
      )
      .catch(() => { });
  }, []);

  return (
    <section id="projects" className="flex min-h-screen flex-col justify-center">
      <h2 className="mb-8 text-sm tracking-widest text-(--accent-primary) font-semibold mono">
        PROJECTS
      </h2>

      <div className="grid gap-10 items-start md:grid-cols-5">
        <div className="md:col-span-3">
          <div className="space-y-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>

        <div className="md:col-span-2 rounded-xl border border-(--text-secondary)/20 bg-(--background-secondary)/80 p-5 backdrop-blur-sm">
          <h3 className="mb-2 text-sm tracking-widest text-(--text-secondary) mono">CODE</h3>
          <p className="mb-6 text-2xl font-semibold text-(--text)">GitHub</p>
          <div className="space-y-3">
            {repos.map((repo) => (
              <GithubRepo
                key={repo.name}
                name={repo.name}
                html_url={repo.html_url}
                stargazers_count={repo.stargazers_count}
                forks_count={repo.forks_count}
                language={repo.language}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}