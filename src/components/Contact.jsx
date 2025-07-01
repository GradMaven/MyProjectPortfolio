import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('form-portfolio', 'template_mu88dq7', form.current, 'rVwcPdRgXnuCydK4v')
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        () => {
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="bg-[#041915] py-10 px-4">
      <div className="flex flex-col items-center">
        <h3 id="contact" className="text-white text-3xl font-bold mb-6 text-center">
          Contact Me
        </h3>

        <div className="bg-[#1E493D] w-full max-w-3xl mx-auto rounded-md p-6 shadow-lg bg-opacity-90">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                className="w-full py-2 px-4 text-sm text-white bg-transparent border-b-2 border-gray-200 focus:outline-none focus:border-[#BF8C73]"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                className="w-full py-2 px-4 text-sm text-white bg-transparent border-b-2 border-gray-200 focus:outline-none focus:border-[#BF8C73]"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full py-2 px-4 text-sm text-white bg-transparent border-b-2 border-gray-200 focus:outline-none focus:border-[#BF8C73]"
            />

            <textarea
              name="message"
              placeholder="Write your message"
              className="w-full h-40 p-4 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#BF8C73] resize-none"
              rows={6}
              required
            ></textarea>

            <button
              type="submit"
              className="bg-[#BF8C73] text-white px-6 py-3 mt-2 rounded-md font-semibold hover:ring-2 hover:ring-[#12E93D] transition duration-300 w-full sm:w-auto self-center"
            >
              Send
            </button>
          </form>
        </div>
      </div>
       <hr className='w-full h-1 bg-[#12E93d] border-0 rounded-sm mt-4'></hr>
    </div>
  );
}

export default Contact;
