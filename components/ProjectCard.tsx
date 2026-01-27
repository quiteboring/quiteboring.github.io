import { Project } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-neutral-900 border border-transparent hover:border-slate-500 rounded-lg p-4 transition-colors">
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
      {project.tags && project.tags.length > 0 && (
        <div className="flex gap-2 mt-3 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-neutral-700 text-neutral-300 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
