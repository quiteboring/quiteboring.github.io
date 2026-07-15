import { FiFolder, FiUser, FiChevronDown } from "react-icons/fi";
import CodeEditor from "@/components/ui/CodeEditor";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
        <div className="relative text-left">
          <p className="mb-2 text-sm font-semibold text-(--accent-secondary) uppercase mono">Hi, my name is</p>
          <h1 className="my-6 text-5xl font-bold tracking-tight sm:text-7xl">Nathan</h1>
          <p className="text-(--text-secondary)">
            Developer. High School Student. Bored.
          </p>
          <div className="mt-8 flex gap-3 justify-start">
            <Button href="#about" icon={<FiUser className="h-4 w-4" />}>About Me</Button>
            <Button href="#projects" variant="outline" icon={<FiFolder className="h-4 w-4" />}>Projects</Button>
          </div>
        </div>
        <CodeEditor />
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-(--text-secondary) hover:text-(--text) transition-colors flex flex-col items-center gap-1"
        aria-label="Scroll down"
      >
        <span className="mono text-xs font-semibold tracking-widest">scroll</span>
        <FiChevronDown className="mt-3 h-5 w-5" />
      </a>
    </section>
  );
}