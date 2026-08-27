import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import SocialLinks from './SocialLinks';

function Home() {
  return (
    <div id="home" className="relative min-h-screen w-full overflow-x-hidden bg-transparent scroll-mt-nav">
      <div className="relative z-10 mx-auto max-w-6xl p-6 space-y-12">

        {/* Hero Section */}
        <div className="flex flex-col-reverse items-center rounded-3xl border-2
         border-white/10 px-8 py-16 backdrop-blur-2xl shadow-2xl md:flex-row md:px-12 mt-28 md:mt-40">

          <div className="w-full text-left md:w-1/2">
            <h3 className="text-accent text-3xl sm:text-4xl md:text-5xl mb-4">
              Hello It's Me
            </h3>
            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Leonard Ondigo
            </h2>

            <div className="h-16"> {/* Fixed height prevents layout shift during typing */}
                <TypeAnimation
                sequence={[
                    'I am a Software Developer', 1000,
                    'I am a Project Manager', 1000,
                    'I build scalable web solutions', 1000,
                ]}
                wrapper="h4"
                cursor
                repeat={Infinity}
                style={{ fontSize: '1.5rem', color: '#BF8C73', fontWeight: 'bold' }}
                />
            </div>

            <p className="mt-6 text-sm font-medium leading-relaxed text-slate-300 sm:text-base md:text-lg">
              As a software developer and project manager, I design, develop,
              and implement software solutions while ensuring projects are
              completed on time and within scope. I bridge the gap
              between development and management, ensuring seamless
              collaboration and efficient execution.
            </p>

            {/* Social Icons and CV Button */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <SocialLinks />
              <a href="https://docs.google.com/document/d/1RKCEWFgF3shnzW-x35pd4Qisgw7dvsBOAWKXVMHZ_ek/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="rounded-lg bg-accent px-6 py-3 font-bold text-ink transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(191,140,115,0.4)]">
                  Download CV
                </button>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="mb-12 flex w-full justify-center md:mb-0 md:w-1/2">
            <div className="relative">
                {/* Decorative ring around image */}
                <div className="absolute -inset-4 rounded-full border border-accent/30 animate-pulse" />
                <img
                src="/images/profilepic.jpeg"
                alt="Leonard Ondigo"
                className="relative h-[250px] w-[250px] rounded-full border-4 border-accent/20 object-cover shadow-2xl sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px]"
                />
            </div>
          </div>
        </div>

        <hr className="h-1 w-full rounded-sm border-0 bg-accent/50" />
      </div>
    </div>
  );
}

export default Home;
