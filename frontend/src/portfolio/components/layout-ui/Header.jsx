import React, { useState, useEffect } from "react";
import Menu from "../../../assets/Images/Menu.png";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import logo from "../../../assets/Images/mahek1.png";
import { scroller } from "react-scroll";

const Header = () => {
  const [navlist] = useState([
   { id: 1, name: "Home", link: "home" },
    { id: 2, name: "About", link: "about" },
    { id: 3, name: "Journey", link: "journey" },
    { id: 4, name: "Work", link: "work" },
    { id: 5, name: "Contact", link: "contact" },
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

  
useEffect(() => {
  if (location.state?.scrollTo) {
    scroller.scrollTo(location.state.scrollTo, {
      duration: 600,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -80
    });
  }
}, [location]);

 const NavItem = ({ name, link }) => {
  const handleClick = () => {
    if (name === "About") {
      navigate("/about");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (name === "Journey") {  
      navigate("/journey");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (name === "Home") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: link } });
      }
    }
  };

  return (
    <li
      className="cursor-pointer transition-all duration-300 font-medium text-[1rem] 
                 px-3 py-2 rounded-md text-white hover:text-[#38bdf8] hover:bg-[#1e293b]"
    >
      {name === "About" ? (
        <span onClick={handleClick}>{name}</span>
      ) : name === "Journey" ? (
        <span onClick={handleClick}>{name}</span>
      ) : name === "Home" ? (
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
        className={`w-full fixed top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0f172a]/95 backdrop-blur-md shadow-lg border-b border-[#334155]"
            : "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]"
        }`}
      >
        <div className="max-w-[1300px] mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-16 object-contain rounded-full shadow-lg border-2 border-[#38bdf8]/30 cursor-pointer"
            onClick={() => {
              if (location.pathname === "/") {
                scroller.scrollTo("home", {
                  duration: 600,
                  smooth: "easeInOutQuart",
                  offset: -80,
                });
              } else {
                navigate("/", { state: { scrollTo: "home" } });
              }
            }}
          />

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navlist.map(({ id, name, link }) => (
              <NavItem key={id} name={name} link={link} />
            ))}

            {/* Resume Link */}
            <li className="cursor-pointer transition-all duration-300 font-medium text-[1rem] 
                           px-4 py-2 rounded-md bg-[#38bdf8] text-[#0f172a] hover:bg-[#0ea5e9] hover:scale-105 shadow-md">
              <a
                href="/Mahek_Shaikh.pdf"
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
              className="h-6 w-6 cursor-pointer filter brightness-0 invert"
            />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {show && (
          <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] flex flex-col justify-center items-center gap-8 z-50 text-xl">
            {navlist.map(({ id, name, link }) => (
              <li
                key={id}
                className="cursor-pointer transition-all duration-300 font-medium text-[1.2rem] px-4 py-3 rounded-md text-white hover:text-[#38bdf8] hover:bg-[#1e293b]"
              >
                {name === "About" ? (
                  <span onClick={() => { navigate("/about"); showToggler(); }}>{name}</span>
                ) : name === "Journey" ? (
                  <span onClick={() => { navigate("/journey"); showToggler(); }}>{name}</span>
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
                  <span onClick={() => { navigate("/", { state: { scrollTo: link } }); showToggler(); }}>
                    {name}
                  </span>
                )}
              </li>
            ))}

            {/* Resume Link */}
            <li className="cursor-pointer transition-all duration-300 font-medium text-[1.2rem] px-6 py-3 rounded-md bg-[#38bdf8] text-[#0f172a] hover:bg-[#0ea5e9] shadow-md">
              <a
                href="/Mahek Shaikh.pdf"
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
              className="mt-4 px-6 py-2 border-2 border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8] hover:text-[#0f172a] transition rounded-md"
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