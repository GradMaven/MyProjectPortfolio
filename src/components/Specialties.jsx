import React from 'react';

const specialties = [
  {
    title: 'Technical Operations & Automation',
    description:
      'Technical Operations Specialist with a background in software development and startup building. Experienced in automating workflows, implementing AI-powered systems, optimizing CRMs, and building lean operational infrastructure for early-stage teams.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
    ),
  },
  {
    title: 'UI/UX Design',
    description:
      'I create user-centered digital experiences by combining aesthetics with functionality — research, wireframes, and prototypes that stay intuitive, accessible, and visually appealing, bridging technology and human interaction.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    ),
  },
  {
    title: 'Software Development',
    description:
      'I leverage modern technologies to build responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and frameworks like React or Vue — prioritizing performance, accessibility, and seamless user interactions.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    ),
  },
  {
    title: 'Project Management',
    description:
      'As a project manager, I lead agile teams to deliver high-quality code, scalable architecture, and user-focused solutions on time and within scope — turning technical complexity into clear milestones and measurable outcomes.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    ),
  },
];

function Specialties() {
  return (
    <section
      id="specialties"
      className="max-w-6xl mx-auto mt-6 scroll-mt-nav bg-surface/40 rounded-3xl border-2 border-white/10 p-6 shadow-md md:p-10"
    >
      <div className="text-center mb-10">
        <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-2">What I do</p>
        <h2 className="text-white text-3xl md:text-4xl font-bold">My Specialties</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {specialties.map(({ title, description, icon }) => (
          <div
            key={title}
            className="group bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-accent/50 hover:bg-white/[0.07] hover:-translate-y-1"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/15 text-accent mb-4 transition-colors group-hover:bg-accent group-hover:text-ink">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                {icon}
              </svg>
            </div>
            <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-justify">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specialties;
