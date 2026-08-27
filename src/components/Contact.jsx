import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import SocialLinks from './SocialLinks';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm('form-portfolio', 'template_mu88dq7', form.current, 'rVwcPdRgXnuCydK4v')
      .then(
        () => {
          setStatus('success');
          form.current.reset();
        },
        () => {
          setStatus('error');
        }
      );
  };

  const inputClasses =
    'w-full py-2 px-1 text-sm text-white bg-transparent border-b-2 border-white/20 focus:outline-none focus:border-accent transition-colors placeholder:text-slate-500';

  return (
    <section id="contact" className="max-w-6xl mx-auto mt-6 mb-6 scroll-mt-nav px-4 md:px-0">
      <div className="text-center mb-10">
        <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-2">Get in touch</p>
        <h2 className="text-white text-3xl md:text-4xl font-bold">Contact Me</h2>
      </div>

      <div className="grid md:grid-cols-5 gap-6 bg-surface/40 border-2 border-white/10 rounded-3xl p-6 md:p-10 shadow-md">
        {/* Info panel */}
        <div className="md:col-span-2 flex flex-col justify-between gap-6">
          <div>
            <h3 className="text-white text-xl font-bold mb-3">Let's build something together</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Have a project in mind, a role to fill, or just want to say hi? My inbox is open —
              I try to reply within a day or two.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Follow me</p>
            <SocialLinks />
          </div>
        </div>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="md:col-span-3 flex flex-col gap-5" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="first_name" className="sr-only">First Name</label>
              <input
                id="first_name"
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="last_name" className="sr-only">Last Name</label>
              <input
                id="last_name"
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                className={inputClasses}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">Your Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message"
              className="w-full h-36 p-4 text-sm text-white bg-white/5 rounded-md border border-white/10
              focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none placeholder:text-slate-500"
              rows={6}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-accent text-ink px-6 py-3 rounded-md font-bold transition duration-300 w-full
            sm:w-auto self-start hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed
            inline-flex items-center justify-center gap-2"
          >
            {status === 'sending' && (
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
            )}
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          <div role="status" aria-live="polite">
            {status === 'success' && (
              <p className="text-sm font-medium text-emerald-400">Message sent — thanks for reaching out! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-sm font-medium text-red-400">Something went wrong. Please try again or email me directly.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
