import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Project Image */}
      <div className="relative h-48 bg-secondary overflow-hidden group">
        <img
          src={project.image}
          alt={`Imagem do projeto ${project.title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver projeto ${project.title} ao vivo`}
              className="p-2 bg-primary rounded-full hover:bg-primary/80 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-primary-foreground" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver código do projeto ${project.title} no GitHub`}
              className="p-2 bg-primary rounded-full hover:bg-primary/80 transition-colors"
            >
              <Github className="w-5 h-5 text-primary-foreground" />
            </a>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
          <span className="text-xs font-semibold px-3 py-1 bg-accent rounded-full text-accent-foreground">
            {project.category}
          </span>
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>