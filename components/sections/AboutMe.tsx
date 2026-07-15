import DiscordVerification from "@/components/ui/DiscordVerification";

const interests = [
  "Guitar",
  "Artificial Intelligence",
  "Cybersecurity",
  "Reverse Engineering",
  "Coding",
  "Video Games",
];

export default function AboutMe() {
  return (
    <section id="about" className="flex min-h-screen flex-col justify-center py-24">
      <h2 className="mb-4 text-sm tracking-widest text-(--accent-primary) uppercase font-semibold mono text-left">
        About Me
      </h2>
      <div className="grid gap-10 lg:grid-cols-5 items-start">
        <div className="lg:col-span-3 space-y-3 text-left">
          <p className="text-4xl font-bold text-(--text) leading-tight">A bit about me</p>
          <p className="text-base font-medium text-(--text-secondary) leading-relaxed">
            Hello! I'm Nathan, a high school student interested in programming and open-source development.
            I enjoy building projects, learning new technologies, and spending my free time playing guitar, speedcubing, and reading.
          </p>
        </div>

        <div className="lg:col-span-2 space-y-3">
          <div className="w-full rounded-lg border border-(--text-secondary)/15 bg-(--background-secondary)/50 p-5">
            <p className="mono mb-3 block text-xs font-semibold tracking-wide text-(--text-secondary) uppercase">Interests</p>
            <ul className="space-y-2">
              {interests.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold text-(--text-secondary)">
                  <span className="h-1.5 w-1.5 rounded-full bg-(--accent-primary) shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <DiscordVerification />
        </div>
      </div>
    </section>
  );
}
