interface ProjectCardProps {
  title: string;
  desc: string;
  tags?: string[];
}

export default function ProjectCard({ title, desc, tags = [] }: ProjectCardProps) {
  return (
    <div className="group w-full rounded-xl border border-(--text-secondary)/20 bg-(--background-secondary)/80 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-(--accent-secondary)/40 hover:shadow-[0_0_20px_var(--accent-secondary)/10]">
      <h4 className="mb-1 font-semibold">{title}</h4>
      <p className="mb-2.5 text-sm text-(--text-secondary) leading-relaxed">{desc}</p>
      <ul className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-(--accent-secondary)/20 px-2 py-0.5 text-xs text-(--accent-secondary)"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}