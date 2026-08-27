import React from 'react';

const projects = [
  {
    title: 'Travel Planner App',
    description: 'A full-stack app for planning trips, organizing itineraries, and tracking travel budgets.',
    image: '/images/travel-planner-design.JPG',
    href: 'https://travel-planner-app-pied.vercel.app/',
    tags: ['React', 'Vite', 'Web App'],
  },
  {
    title: 'Naizop — TikTok Growth',
    description: 'Landing page for a social growth service, built to convert with clear pricing and CTAs.',
    image: '/images/tiktok-naizop.JPG',
    href: 'https://naizop.com/buy-tiktok-followers',
    tags: ['Marketing Site', 'Frontend'],
  },
  {
    title: 'Homepage — Figma Design',
    description: 'A desktop homepage design exploring layout, hierarchy, and brand-led visual design.',
    image: '/images/figmadesign1.JPG',
    href: 'https://www.figma.com/design/fZarhYcD1Yi8UQeN6POjx5/Homepage--Copy-?node-id=0-1&p=f&t=sd4QkooHDLMBmVOv-0',
    tags: ['Figma', 'UI Design'],
  },
  {
    title: 'Homepage — Mobile Design',
    description: 'The responsive mobile companion view for the homepage design above.',
    image: '/images/figmamobiledesign.JPG',
    href: 'https://www.figma.com/design/fZarhYcD1Yi8UQeN6POjx5/Homepage--Copy-?node-id=0-1&p=f&t=sd4QkooHDLMBmVOv-0',
    tags: ['Figma', 'Mobile UI'],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto mt-6 scroll-mt-nav bg-surface/40 rounded-3xl border-2 border-white/10 p-6 shadow-md md:p-10"
    >
      <div className="text-center mb-10">
        <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-2">Selected work</p>
        <h2 className="text-white text-3xl md:text-4xl font-bold">My Projects</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map(({ title, description, image, href, tags }) => (
          <a
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-accent/50 hover:-translate-y-1"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
              <span className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink/70 text-accent opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                </svg>
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-white text-lg font-bold mb-1">{title}</h3>
              <p className="text-slate-300 text-sm mb-3 leading-relaxed">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium text-accent bg-accent/10 border border-accent/20 rounded-full px-2.5 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
