import { FiStar, FiGitBranch, FiArrowUpRight } from "react-icons/fi";

interface GithubRepoProps {
  name: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
  Java: "#b07219",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  Ruby: "#701516",
  C: "#555555",
  "C++": "#f34b7d",
  "C#": "#178600",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Lua: "#000080",
  Dart: "#00B4AB",
  Zig: "#ec915c",
  Vue: "#41b883",
  Svelte: "#ff3e00",
};

export default function GithubRepo({ name, html_url, stargazers_count, forks_count, language }: GithubRepoProps) {
  return (
    <a
      href={html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full rounded-xl border border-(--text-secondary)/20 px-5 py-3 pr-12 transition-all duration-300 hover:border-(--accent-secondary)/40"
    >
      <h3 className="text-sm font-semibold text-(--text)">{name}</h3>
      <div className="mt-1.5 flex items-center gap-3 text-xs text-(--text-secondary)">
        {language && (
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: languageColors[language] || "#8b8b8b" }} />
            {language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <FiStar className="h-3 w-3" />
          {stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <FiGitBranch className="h-3 w-3" />
          {forks_count}
        </span>
      </div>
      <span className="absolute inset-y-0 right-5 flex items-center">
        <FiArrowUpRight className="h-4 w-4 text-(--text-secondary) opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}
