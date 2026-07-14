"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { sections } from "@/lib/data";
import { FaDiscord } from "react-icons/fa";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  const observeSection = useCallback((id: string, element: HTMLAnchorElement | null) => {
    if (element) linkRefs.current.set(id, element);
    else linkRefs.current.delete(id);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    for (const { id } of sections) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const activeLink = linkRefs.current.get(activeSection);
    if (!container || !activeLink) return;

    const containerRect = container.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    setIndicator({
      left: linkRect.left - containerRect.left,
      width: linkRect.width,
    });
  }, [activeSection]);

  return (
    <nav className="fixed inset-x-0 bottom-8 z-50 flex justify-center">
      <div
        ref={containerRef}
        className="relative flex gap-1 rounded-xl border border-(--text-secondary)/20 bg-(--background-secondary)/80 px-2.5 py-2.5 backdrop-blur-sm"
      >
        <span
          className="absolute inset-y-1.5 rounded-md bg-(--text)/10 transition-all duration-300 ease-out"
          style={{ left: indicator.left, width: indicator.width }}
        />
        {sections.map((section) => (
          <a
            key={section.id}
            ref={(element) => observeSection(section.id, element)}
            href={`#${section.id}`}
            className="group relative rounded-lg px-3 py-2 text-(--text-secondary) transition-colors hover:text-(--text)"
          >
            <section.icon className="h-5 w-5" />
            <span className="pointer-events-none absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-(--text-secondary)/20 bg-(--background-secondary) px-3 py-1.5 text-sm text-(--text-secondary) opacity-0 transition-all duration-200 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100">
              {section.label}
            </span>
          </a>
        ))}
        <span className="mx-1 w-px self-stretch bg-(--text-secondary)/20" />
        <a
          href="https://github.com/quiteboring"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-lg px-3 py-2 text-(--text-secondary) transition-colors hover:text-(--text)"
        >
          <FiGithub className="h-5 w-5" />
          <span className="pointer-events-none absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-(--text-secondary)/20 bg-(--background-secondary) px-3 py-1.5 text-sm text-(--text-secondary) opacity-0 transition-all duration-200 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100">
            GitHub
          </span>
        </a>
        <a
          href="https://discord.com/users/1441859003708866601"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-lg px-3 py-2 text-(--text-secondary) transition-colors hover:text-(--text)"
        >
          <FaDiscord className="h-5 w-5" />
          <span className="pointer-events-none absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-(--text-secondary)/20 bg-(--background-secondary) px-3 py-1.5 text-sm text-(--text-secondary) opacity-0 transition-all duration-200 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100">
            Discord
          </span>
        </a>
      </div>
    </nav>
  );
}
