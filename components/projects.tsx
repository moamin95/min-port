// import { Badge } from "@/components/ui/badge";
import BadgesArray from "@/components/badges-array";

const projects = [
  {
    name: "E-Commerce Platform",
    blurb: "Full-stack e-commerce solution with payment integration and admin dashboard. Built with modern web technologies for scalability and performance.",
    techstack: ["Next.js", "Stripe", "Prisma", "TypeScript"],
    gradient: "from-blue-100 to-blue-200"
  },
  {
    name: "Task Management App",
    blurb: "Collaborative project management tool with real-time updates and team features. Enables seamless collaboration across distributed teams.",
    techstack: ["React", "Socket.io", "MongoDB", "Node.js"],
    gradient: "from-green-100 to-green-200"
  },
  {
    name: "Analytics Dashboard",
    blurb: "Data visualization platform with interactive charts and real-time metrics. Provides comprehensive insights for business intelligence.",
    techstack: ["React", "D3.js", "Node.js", "PostgreSQL"],
    gradient: "from-purple-100 to-purple-200"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <div className="w-full">
        <div className="space-y-12">
          <div className="content-section">
            <h1 className="heading-primary">
              Selected Projects
            </h1>
          </div>

          <div>
            <div className="space-y-12">
              {projects.map((project, index) => (
                <div key={index} className="content-grid">
                  <div className="md:col-span-1">
                    <div className={`aspect-video bg-gradient-to-br ${project.gradient} rounded-lg`}></div>
                  </div>
                  <div className="content-area">
                    <h3 className="heading-secondary">
                      {project.name}
                    </h3>
                    <p className="text-muted">
                      {project.blurb}
                    </p>
                    <BadgesArray technologies={project.techstack} />
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
