import React, { useState } from 'react';

const experience = [
  {
    role: 'CEO and Founder',
    org: 'Onbora',
    location: 'Kenya',
    period: 'August 2025 – Present',
    description:
      'Onbora is a startup that provides a simple, all-in-one platform to help solopreneurs and small teams in Africa onboard clients, manage tasks, and collaborate efficiently — without the complexity or cost of enterprise tools.',
  },
  {
    role: 'Co-Founder and CTO',
    org: 'Uwazi',
    location: 'Kenya',
    period: 'January 2026 – Present',
    description:
      'Building Uwazi, a social enterprise platform that empowers citizens to safely and anonymously report corruption, increasing transparency and accountability in Kenya. Implemented end-to-end encryption, no collection of personal identifiers, and anonymous submission IDs instead of accounts. Stack: React + Vite, Node.js + Express, MongoDB/PostgreSQL, libsodium / Web Crypto API.',
  },
  {
    role: 'Fullstack Developer',
    org: 'Business Web Solutions',
    location: 'India',
    period: 'April 2025 – Present',
    description:
      'Applying various stacks and technologies to develop and implement web solutions for businesses across the world.',
  },
  {
    role: 'Frontend Developer',
    org: 'Freelance — Upwork, Fiverr, Freelancer',
    location: 'Remote',
    period: 'February 2022 – Present',
    description:
      'Helping clients online with their business needs, collaborating with UI/UX designers and backend developers to develop high-quality, user-friendly web solutions.',
  },
];

const toolGroups = [
  {
    title: 'Tech Stack',
    items: ['JavaScript, Java, Python', 'React, Node.js, Express.js', 'MongoDB, PostgreSQL, SQLite', 'Firebase, Git, Postman'],
  },
  {
    title: 'Project Management',
    items: ['Microsoft Project', 'Agile Project Management', 'Waterfall Project Management', 'Scrum', 'Kanban'],
  },
];

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="about"
      className="max-w-6xl mx-auto mt-6 scroll-mt-nav bg-surface/40 rounded-3xl border-2 border-white/10 p-6 shadow-md space-y-8 md:p-10"
    >
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Profile Image */}
        <div className="w-full max-w-xs md:max-w-sm flex justify-center shrink-0">
          <img
            src="/images/profilepic.jpeg"
            alt="Leonard Ondigo"
            className="rounded-full object-cover w-[220px] h-[220px] ring-4 ring-accent/70"
          />
        </div>

        {/* Text Content */}
        <div className="w-full text-center lg:text-left">
          <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-2">Get to know me</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-3">About Me</h2>
          <h3 className="text-accent text-xl md:text-2xl font-bold mb-4">Technical Support Specialist and Software Engineer</h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base text-justify">
            Technical Operation Specialist with a strong background in software development and startup building.
            Experienced in automating workflows and improving operational efficiency, implementing AI-powered systems, optimizing CRMs, and
            building lean operational infrastructure for early-stage teams. Skilled in leveraging technology to drive growth, streamline processes
            and translating technical solutions into measurable business efficiency.
            Highly skilled Front End Developer with five years of experience in creating visually appealing
            and user-friendly websites. Proficient in HTML, CSS, and JavaScript, with a strong understanding
            of modern web development technologies and frameworks. Committed to delivering high-quality code
            and exceptional user experiences.
          </p>

          <button
            onClick={() => setShowMore((prev) => !prev)}
            aria-expanded={showMore}
            className="mt-6 inline-flex items-center gap-2 bg-accent text-ink px-6 py-2.5 rounded-lg font-bold transition hover:brightness-110"
          >
            {showMore ? 'See Less' : 'See Experience & Skills'}
            <svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              className={`w-4 h-4 transition-transform ${showMore ? 'rotate-180' : ''}`}
            >
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {showMore && (
        <div className="w-full max-w-3xl mx-auto pt-4 space-y-10 border-t border-white/10">
          <div>
            <h3 className="text-white text-2xl font-bold text-center mt-6 mb-8">Experience</h3>
            <div className="relative pl-8 space-y-8 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-accent/30">
              {experience.map((job) => (
                <div key={job.role + job.org} className="relative">
                  <span className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-accent/20" />
                  <h4 className="text-white text-lg font-semibold">{job.role}</h4>
                  <p className="text-accent font-medium text-sm">
                    {job.org} <span className="text-slate-400">· {job.location}</span>
                  </p>
                  <p className="text-slate-500 text-xs italic mb-2">{job.period}</p>
                  <p className="text-slate-300 text-sm sm:text-base text-justify leading-relaxed">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-2xl font-bold text-center mb-6">Tools and Software</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {toolGroups.map((group) => (
                <div key={group.title} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h4 className="text-accent text-lg font-bold mb-3">{group.title}</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
