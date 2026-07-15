interface ProjectCardProps {
  title: string;
  desc: string;
  tags?: string[];
}

export default function ProjectCard({ title, desc, tags = [] }: ProjectCardProps) {
  return (
    <div className="group rounded-xl border border-(--text-secondary)/20 bg-(--background-secondary)/50 px-5 py-4 backdrop-blur-sm">
      <h4 className="mb-1 font-semibold">{title}</h4>
      <p className="mb-2.5 text-sm text-(--text-secondary) leading-relaxed">{desc}</p>
      <ul className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-(--text-secondary)/20 px-2 py-0.5 text-xs text-(--text)"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}