import { Project } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-lg border border-neutral-700 bg-neutral-900 p-4 transition-colors duration-100 hover:border-slate-500">
      <div className="flex items-start justify-between">
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white transition-colors hover:underline"
          >
            {project.name}
          </a>
        ) : (
          <h3 className="font-semibold text-white">{project.name}</h3>
        )}
      </div>
      <p className="mt-2 text-sm text-neutral-400">{project.description}</p>
    </div>
  );
}
