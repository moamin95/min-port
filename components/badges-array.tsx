interface BadgesArrayProps {
  technologies: string[];
}

export default function BadgesArray({ technologies }: BadgesArrayProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 text-xs bg-neutral-100 dark:bg-white/5 border border-neutral-300 dark:border-white/10 rounded-full text-neutral-900 dark:text-white font-mono"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}