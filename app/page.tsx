import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <Navbar />

      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  );
}
