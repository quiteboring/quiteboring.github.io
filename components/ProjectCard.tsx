import { Project } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-neutral-900 border border-neutral-700 hover:border-slate-500 rounded-lg p-4 transition-colors">
      <div className="flex justify-between items-start">
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white hover:underline transition-colors"
          >
            {project.name}
          </a>
        ) : (
          <h3 className="font-semibold text-white">{project.name}</h3>
        )}
      </div>
      <p className="text-sm text-neutral-400 mt-2">{project.description}</p>
    </div>
  );
}
