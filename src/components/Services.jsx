import React from 'react';

function Services() {
  return (
    <div className="bg-[#041915] flex flex-col items-center px-4 py-10">
      <h2 id="services" className="text-[#BF8C73] text-3xl font-bold mb-8 text-center">My Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {/* UI/UX Design */}
        <div className="bg-[#BF8C73] text-center shadow-lg rounded-lg p-6 hover:ring-2 hover:ring-[#12E93D] transition">
          <h3 className="text-[#1E493D] text-xl font-bold mb-2">UI/UX Design</h3>
          <p className="text-white text-justify text-sm sm:text-base">
            I create user-centered digital experiences by combining aesthetics with functionality. I conduct research,
            design wireframes and prototypes, and ensure interfaces are intuitive, accessible, and visually appealing.
            My knowledge of user behavior and business goals helps me bridge the gap between technology and human
            interaction to deliver products that feel effortless to use.
          </p>
          <button className="bg-[#041915] text-white px-6 py-2 mt-4 rounded-lg font-semibold hover:ring-2 hover:ring-[#12E93D] transition">
            Read More
          </button>
        </div>

        {/* Software Development */}
        <div className="bg-[#BF8C73] text-center shadow-lg rounded-lg p-6 hover:ring-2 hover:ring-[#12E93D] transition">
          <h3 className="text-[#1E493D] text-xl font-bold mb-2">Software Development</h3>
          <p className="text-white text-justify text-sm sm:text-base">
            I leverage modern technologies to build responsive, user-friendly web interfaces that bring digital
            products to life. I transform design mockups into interactive experiences using HTML, CSS, JavaScript,
            and modern frameworks like React or Vue. By prioritizing performance, accessibility, and seamless user
            interactions, I ensure every click, scroll, and swipe feels intuitive and engaging.
          </p>
          <button className="bg-[#041915] text-white px-6 py-2 mt-4 rounded-lg font-semibold hover:ring-2 hover:ring-[#12E93D] transition">
            Read More
          </button>
        </div>

        {/* Project Management */}
        <div className="bg-[#BF8C73] text-center shadow-lg rounded-lg p-6 hover:ring-2 hover:ring-[#12E93D] transition">
          <h3 className="text-[#1E493D] text-xl font-bold mb-2">Project Management</h3>
          <p className="text-white text-justify text-sm sm:text-base">
            As a project manager, I lead agile teams to deliver high-quality code, scalable architecture, and
            user-focused solutions on time and within scope. I bridge communication between developers, designers,
            and stakeholders, turning technical complexity into clear milestones and measurable outcomes. With deep
            insight into development cycles and product goals, I ensure every sprint drives progress and value.
          </p>
          <button className="bg-[#041915] text-white px-6 py-2 mt-4 rounded-lg font-semibold hover:ring-2 hover:ring-[#12E93D] transition">
            Read More
          </button>
        </div>
      </div>
       <hr className='w-full h-1 bg-[#12E93d] border-0 rounded-sm mt-6'></hr>
    </div>
  );
}

export default Services;
