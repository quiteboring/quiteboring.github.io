import { FiFolder, FiLink } from "react-icons/fi";
import CodeEditor from "@/components/ui/CodeEditor";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="relative">
          <div className="pointer-events-none absolute -inset-32 bg-[radial-gradient(ellipse_at_center,var(--accent-primary)_0%,transparent_70%)] opacity-30" />
          <p className="mb-2 text-sm text-(--accent-secondary) mono">Hi, my name is</p>
          <h1 className="my-6 text-5xl font-bold tracking-tight sm:text-7xl">Nathan</h1>
          <p className="max-w-lg text-(--text-secondary)">
            Developer. High School Student. Bored.
          </p>
          <div className="mt-8 flex gap-3">
            <Button href="#projects" icon={<FiFolder className="h-4 w-4" />}>Projects</Button>
            <Button href="#socials" variant="outline" icon={<FiLink className="h-4 w-4" />}>Socials</Button>
          </div>
        </div>
        <CodeEditor />
      </div>
    </section>
  );
}