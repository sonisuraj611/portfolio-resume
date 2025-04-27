import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "SocialPad App",
    description:
      "Built a MERN app where users can connect with their friends and share thoughts and photos with them. Features include logging with JWT authentication, storing data in mongoDB, MVC pattern, light-dark mode, react-dropzone for uploading photos.",
    tech: ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "MongoDB"],
    link: "https://socialpad-mern-app-frontend.onrender.com/",
    github: "https://github.com/sonisuraj611/SocialPad-mern-app",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Youtube Clone",
    description:
      "Developed a YouTube clone website that fetches data from RapidAPI. Search and watch any video directly within website.",
    tech: ["HTML", "CSS", "JavaScript", "ReactJS"],
    link: "https://astonishing-puffpuff-35c3db.netlify.app/",
    // github: "#",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "APIs using NodeJS",
    description:
      "Built multiple RESTful APIs including features like register and login(JWT, bcrypt), CRUD operations with MongoDB, Middleware integration for logging, validation, etc.",
    tech: ["NodeJS", "Express", "MongoDB", "JWT"],
    link: null,
    github: "https://github.com/sonisuraj611/NodeJs-Projects",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-navy">
      <div className="section-container">
        <div className="text-center mb-12">
          <h3 className="subheading">My Portfolio</h3>
          <h2 className="heading text-2xl md:text-4xl">Featured Projects</h2>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-6`}
            >
              {/* Project Image */}
              <div className="md:w-3/5 relative group">
                <div className="relative overflow-hidden rounded-lg h-64 md:h-80">
                  <div className="absolute inset-0 bg-teal/20 group-hover:bg-transparent transition-all duration-300"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="md:w-2/5 z-10">
                <h3 className="subheading mb-2">
                  {index % 2 === 0 ? "Featured Project" : "Recent Work"}
                </h3>
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  {project.title}
                </h4>

                <div className="bg-navy-light p-6 rounded-lg shadow-xl mb-4">
                  <p className="text-slate-light">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs text-teal bg-navy-light px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-lightest hover:text-teal transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-lightest hover:text-teal transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate mb-6">
            Want to see more of my work? Check out my GitHub repositories.
          </p>
          <a
            href="https://github.com/sonisuraj611"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="btn-primary">
              <Github className="mr-2 w-4 h-4" /> More Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
