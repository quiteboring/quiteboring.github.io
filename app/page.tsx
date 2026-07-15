import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="mx-auto px-6 max-w-5xl">
      <Navbar />
      <div className="pointer-events-none fixed left-1/2 top-1/2 -z-10 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_50%,var(--accent-primary),transparent_30%)] opacity-25 blur-[80px]" />

      <main>
        <Hero />
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
