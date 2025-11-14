import React, { useState, useEffect } from "react";
import Menu from "../../../assets/Images/Menu.png";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import logo from "../../../assets/Images/mahek1.png";

const Header = () => {
  const [navlist] = useState([
    { id: 1, name: "About", link: "about" },
    { id: 2, name: "Work", link: "work" },
    { id: 3, name: "Contact", link: "contact" },
  ]);
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const showToggler = () => setShow(!show);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavItem = ({ name, link }) => {
    const handleClick = () => {
      if (name === "About") {
        navigate("/about");
      } else {
        if (location.pathname !== "/") {
          navigate("/", { state: { scrollTo: link } });
        }
      }
    };

    return (
      <li
        className="cursor-pointer transition-all duration-300 font-medium text-[1rem] 
                   px-3 py-2 rounded-md text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-400 hover:to-fuchsia-400 hover:text-white shadow-md"
      >
        {name === "About" ? (
          <span onClick={handleClick}>{name}</span>
        ) : location.pathname === "/" ? (
          <ScrollLink to={link} spy={true} smooth={true} offset={-80} duration={500}>
            {name}
          </ScrollLink>
        ) : (
          <span onClick={handleClick}>{name}</span>
        )}
      </li>
    );
  };

  return (
    <>
      <ScrollToTop />
      <header
        className={`w-full sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#1e2746] shadow-lg"
            : "bg-gradient-to-br  from-[#1f3550] via-[#2a4466] to-[#345580]"
        }`}
      >
        <div className="max-w-[1300px] mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-16 md:w-16 object-contain rounded-full shadow-lg"
          />

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navlist.map(({ id, name, link }) => (
              <NavItem key={id} name={name} link={link} />
            ))}

            {/* Resume Link */}
            <li className="cursor-pointer transition-all duration-300 font-medium text-[1rem] 
                           px-3 py-2 rounded-md text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-400 hover:to-fuchsia-400 hover:text-white shadow-md">
              <a
                href="/Mahek Shaikh.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <img
              onClick={showToggler}
              src={Menu}
              alt="Menu"
              className="h-6 w-6 cursor-pointer"
            />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {show && (
          <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-[#1e2746] via-[#192541] to-[#173d63] flex flex-col justify-center items-center gap-8 z-50 text-xl">
            {navlist.map(({ id, name, link }) => (
              <li
                key={id}
                className="cursor-pointer transition-all duration-300 font-medium text-[1.2rem] px-4 py-3 rounded-md text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-400 hover:to-fuchsia-400 hover:text-white shadow-md"
              >
                {name === "About" ? (
                  <span onClick={() => navigate("/about")}>{name}</span>
                ) : location.pathname === "/" ? (
                  <ScrollLink
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={showToggler}
                  >
                    {name}
                  </ScrollLink>
                ) : (
                  <span onClick={() => navigate("/", { state: { scrollTo: link } })}>
                    {name}
                  </span>
                )}
              </li>
            ))}

            {/* Resume Link */}
            <li className="cursor-pointer transition-all duration-300 font-medium text-[1.2rem] px-4 py-3 rounded-md text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-400 hover:to-fuchsia-400 hover:text-white shadow-md">
              <a
                href="/Mahek_Shaikh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={showToggler}
              >
                Resume
              </a>
            </li>

            {/* Close Button */}
            <button
              onClick={showToggler}
              className="mt-4 px-6 py-2 border border-cyan-400 text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-400 hover:to-fuchsia-400 hover:text-white transition rounded-md shadow-md"
            >
              Close
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
