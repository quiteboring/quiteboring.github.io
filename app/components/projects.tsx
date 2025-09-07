const projects = [
	{
		name: "Cobalt",
		description: "A Hypixel Skyblock QOL mod.",
		tech: ["Kotlin", "Java"],
	},
	{
		name: "Scatter",
		description: "A native obfuscator.",
		tech: ["Kotlin", "Java", "C++"],
	}
];

export function Projects() {
	return (
		<>
			<div className="projectsScroll flex w-full flex-col rounded-[10px] bg-black p-6 ring-2 ring-white/10 lg:h-full lg:overflow-y-auto">
				<div>
					<h2 className="text-xl font-semibold text-white">Projects</h2>
					<div className="mt-1 h-1 w-10 bg-[#4682b4]" />
				</div>
				<div className="mt-4">
					<div className="flex flex-col">
						{projects.map((project, index) => (
							<div key={project.name}>
								{index > 0 && <hr className="my-4 border-white/10" />}
								<h3 className="font-semibold text-white">{project.name}</h3>
								<p className="text-sm text-white/60">{project.description}</p>
								<div className="mt-2 flex flex-wrap gap-2">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="rounded-[5px] bg-white/10 px-2 py-1 text-xs text-white"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<style jsx>{`
				.projectsScroll {
					-ms-overflow-style: none; /* IE and Edge */
					scrollbar-width: none; /* Firefox */
				}
				.projectsScroll::-webkit-scrollbar {
					display: none; /* Chrome, Safari */
				}
			`}</style>
		</>
	);
}

