import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useLang } from "@/i18n";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { LineReveal } from "@/components/LineReveal";

const projects = [
  {
    id: 4,
    title: "Amazon",
    descriptionKey: "projects.desc.amazon",
    image: "projects/Amazon.png",
    tags: ["React", "Vite", "HTML", "Tailwind CSS"],
    demoUrl: "https://amazon-front-kappa.vercel.app/",
    githubUrl: "https://github.com/Mahmoud9075/Amazon",
  },

  {
    id: 1,
    title: "Login System",
    descriptionKey: "projects.desc.loginSystem",
    image: "projects/Login System.png",
    tags: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Responsive Design"],
    demoUrl: "https://mahmoud9075.github.io/login-page./",
    githubUrl: "https://github.com/Mahmoud9075/login-page.",
  },

  {
    id: 5,
    title: "Decor",
    descriptionKey: "projects.desc.decor",
    image: "projects/Decor.png",
    tags: ["JavaScript", "Tailwind CSS", "HTML5", "Next.js"],
    demoUrl: "https://decor-rho.vercel.app/",
    githubUrl: "https://github.com/Mahmoud9075/-Decor",
  },

  {
    id: 2,
    title: "Responsive Weather Forecast Web App",
    descriptionKey: "projects.desc.weather",
    image: "projects/Responsive Weather Forecast Web App.png",
    tags: ["HTML5", "CSS3", "JavaScript", "OpenWeatherMap API", "Git & GitHub"],
    demoUrl: "https://mahmoud9075.github.io/weather-app/",
    githubUrl: "https://github.com/Mahmoud9075/weather-app",
  },

  {
    id: 3,
    title: "Hagogah",
    descriptionKey: "projects.desc.hagogah",
    image: "projects/Hagogah .png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/Mahmoud9075/-Hagogah",
  },

  {
    id: 6,
    title: "HealthCare",
    descriptionKey: "projects.desc.healthcare",
    image: "projects/HealthCare.png",
    tags: ["JavaScript", "Tailwind CSS", "HTML5", "Next.js"],
    demoUrl: "https://healthcare-sepia-eta.vercel.app/",
    githubUrl: "https://github.com/Mahmoud9075/healthcare",
  },
];

export const ProjectsSection = () => {
  const { t } = useLang();
  const headingRef = useScrollReveal();

  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold mb-4 opacity-0 anim-reveal"
          >
            {t("projects.title.1")}{" "}
            <span className="text-primary">{t("projects.title.2")}</span>
          </h2>
          <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto text-lg opacity-0 anim-reveal-1">
            <LineReveal text={t("projects.subtitle")} split="sentence" baseDelay={0.1} step={0.15} />
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 hover:-translate-y-2 opacity-0 anim-reveal"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "/api/placeholder/400/300";
                    e.target.alt = "Project Image";
                  }}
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary border-primary/20 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.descriptionKey ? t(project.descriptionKey) : project.description}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex space-x-3">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        title="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>

                  <span className="text-xs text-muted-foreground font-medium">
                    {project.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Mahmoud9075"
          >
            {t("projects.viewAll")} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
