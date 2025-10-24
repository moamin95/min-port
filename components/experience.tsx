import BadgesArray from "@/components/badges-array";

const jobs = [
  {
    dates: "Oct 2024 - Present",
    company: "American Express",
    position: "Software Engineer II",
    blurb: "Revamped the American Express customer banking experience to improve user engagement and retention.",
    techstack: ["React", "TypeScript", "Node.js", "TanStack"]
  },
  {
    dates: "May 2022 - Oct 2024",
    company: "CVS Health",
    position: "Software Engineer",
    blurb: "Developed reusable and scalable web components with Next JS for payment products on the CVS e-commerce website.",
    techstack: ["Next.js", "React", "Angular", "GraphQL"]
  },
  {
    dates: "Apr 2021 - May 2022",
    company: "Merkle",
    position: "Web Engineer",
    blurb: "Architected single page applications for marketing dashboards, following white label model for reproducibility across 20+ Fortune 500 companies.",
    techstack: ["React", "Express", "MySQL", "AWS"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="w-full">
        <div className="space-y-12">
          <div className="content-section">
            <h1 className="heading-primary">
              Work Experience
            </h1>
          </div>

          <div>
            <div className="space-y-12">
              {jobs.map((job, index) => (
                <div key={index} className="content-grid">
                  <div className="md:col-span-1">
                    <span className="date-text">
                      {job.dates}
                    </span>
                  </div>
                  <div className="content-area">
                    <h3 className="heading-secondary">
                      {job.company}
                    </h3>
                    <p className="text-muted">
                      {job.blurb}
                    </p>
                    <BadgesArray technologies={job.techstack} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}