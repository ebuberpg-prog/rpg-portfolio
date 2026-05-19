import { Project } from "@/data/projects";

type ProjectMetaProps = {
  project: Project;
};

export function ProjectMeta({ project }: ProjectMetaProps) {
  const items = [
    ["Year", project.year],
    ["Client", project.client ?? "Independent"],
    ["Role", project.roles.join(", ")],
    ["Tools", project.tools.join(", ")],
    ["Impact", project.impact]
  ];

  return (
    <dl className="flex flex-col gap-5 border border-[#1a1a1a] bg-[#0a0a0a] p-6">
      {items.map(([label, value]) => (
        <div key={label} className="flex flex-col gap-1">
          <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#888888]">
            {label}
          </dt>
          <dd className="text-sm leading-relaxed text-white">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
