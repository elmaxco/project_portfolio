import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Halo 2',
    description: 'A first-person shooter game where players can battle in a futuristic world.',
    image: 'https://gepig.com/game_cover_460w/246.jpg',
    technologies: ['C++', 'Blam Engine', 'Saber3D Engine'],
    github: 'https://github.com',
  },
  {
    title: 'Lego Star Wars Game',
    description: 'A game where players can build and battle with Lego Star Wars characters.',
    image: 'https://store-images.s-microsoft.com/image/apps.58124.13677920620920924.f0d2262f-b971-4299-914b-194791cb9c5b.7cae180d-6e80-468c-bbd3-48c3a6fe9a7e?q=90&w=480&h=270',
    technologies: ['C#', 'NTT', 'C++'],
    github: 'https://github.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather forecasting application with interactive maps.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&h=500',
    technologies: ['React', 'TypeScript', 'OpenWeather API'],
    github: 'https://github.com',
  },  
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                  >
                    <Github className="h-5 w-5" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
