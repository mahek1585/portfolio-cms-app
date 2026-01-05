import React from "react";
import useQueries from "../../../hooks/useQueries";
import useLinks from "../../../hooks/useLinks";

const Footer = () => {
  const { submitQuery, loading } = useQueries();
  const { links } = useLinks();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    submitQuery(data);
  };

  return (
    <footer  id="contact" className="bg-gradient-to-t from-[#1e293b] to-[#0f172a] border-t border-[#334155] px-6 md:px-24 pt-16 pb-6">
      <div className="flex flex-col md:flex-row justify-between gap-16">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-[26px] md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-transparent bg-clip-text">
            Let's work together
          </h2>
          <p className="text-[#cbd5e1] mb-8 leading-relaxed">
            I'm always excited to collaborate on meaningful projects or internships.
            Whether it's frontend development or UI/UX design, feel free to reach out.
          </p>

          {/* Dynamic Social Icons */}
          <div className="flex gap-4 mt-6">
            {Array.isArray(links) && links.length > 0 &&
              links.map((item) => (
                <a
                  href={item.link}
                  key={item.id}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.title}
                  title={item.title}
                  className="w-10 h-10 bg-[#1e293b] rounded-full flex items-center justify-center border border-[#334155] hover:border-[#38bdf8] hover:scale-110 transition-all duration-300 group"
                >
                  <img
                    src={item.img_url}
                    alt={item.title}
                    className="w-5 h-5 group-hover:brightness-125 transition-all duration-200"
                  />
                </a>
              ))}
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={onSubmitHandler}
          className="flex-1 max-w-xl w-full bg-[#1e293b] rounded-xl shadow-lg p-6 border border-[#334155]"
        >
          <div className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-[#0f172a] text-white py-4 px-6 rounded-md text-sm border border-[#334155] focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] placeholder-[#94a3b8] transition-all duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-[#0f172a] text-white py-4 px-6 rounded-md text-sm border border-[#334155] focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] placeholder-[#94a3b8] transition-all duration-300"
            />
            <textarea
              name="message"
              placeholder="Type your message here..."
              rows={6}
              required
              className="bg-[#0f172a] text-white py-4 px-6 rounded-md text-sm border border-[#334155] focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] placeholder-[#94a3b8] transition-all duration-300 resize-none"
            ></textarea>
            <button
              disabled={loading}
              type="submit"
              className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] font-semibold py-3 px-6 rounded-md transition-all duration-300 disabled:bg-[#334155] disabled:cursor-not-allowed disabled:text-[#94a3b8] w-fit hover:scale-105"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 pt-6 border-t border-[#334155] text-center">
        <p className="text-[#94a3b8] text-sm">
          © {new Date().getFullYear()} Mahek Shaikh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;