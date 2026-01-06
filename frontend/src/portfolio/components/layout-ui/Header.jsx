import React, { useState, useEffect } from "react";
import Menu from "../../../assets/Images/Menu.png";
import { Link as ScrollLink, scroller } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import logo from "../../../assets/Images/mahek1.png";

const Header = () => {
  const navlist = [
    { id: 1, name: "Home", link: "home" },
    { id: 2, name: "About", link: "about" },
    { id: 3, name: "Journey", link: "journey" },
    { id: 4, name: "Work", link: "work" },
    { id: 5, name: "Contact", link: "contact" },
  ];

  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setShow(prev => !prev);
  useEffect(() => {
    if (!location.state) {
      window.scrollTo(0, 0);
    }
  }, []);
  // Scroll background effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  //  Scroll after route change
      useEffect(() => {
      if (location.state?.scrollTo) {
        setTimeout(() => {
          scroller.scrollTo(location.state.scrollTo, {
            duration: 600,
            smooth: "easeInOutQuart",
            offset: -80,
          });
        }, 300); 
            navigate(location.pathname, { replace: true });

      }
    }, [location,navigate]);
      

  // SINGLE CLICK HANDLER 
  const handleNavClick = (item) => {
    const { name, link } = item;

    if (name === "About" || name === "Journey") {
      navigate(`/${name.toLowerCase()}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (name === "Home") {
      if (location.pathname === "/") {
        scroller.scrollTo("home", {
          duration: 600,
          smooth: "easeInOutQuart",
          offset: -80,
        });
      } else {
        navigate("/", { state: { scrollTo: "home" } });
      }
      return;
    }

    // Work / Contact
    if (location.pathname === "/") {
      scroller.scrollTo(link, {
        duration: 600,
        smooth: "easeInOutQuart",
        offset: -80,
      });
    } else {
      navigate("/", { state: { scrollTo: link } });
    }
  };

  return (
    <>
      <ScrollToTop />

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
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
            className="h-16 w-16 cursor-pointer rounded-full border-2 border-[#38bdf8]/30"
            onClick={() => handleNavClick({ name: "Home", link: "home" })}
          />

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navlist.map(item => (
              <li
                key={item.id}
                onClick={() => handleNavClick(item)}
                className="cursor-pointer px-3 py-2 text-white hover:text-[#38bdf8] hover:bg-[#1e293b] rounded-md transition"
              >
                {item.name}
              </li>
            ))}

            <li className="px-4 py-2 bg-[#38bdf8] text-[#0f172a] rounded-md hover:bg-[#0ea5e9]">
              <a href="/Mahek_Shaikh.pdf" target="_blank">Resume</a>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <img src={Menu} onClick={toggleMenu} className="h-6 w-6 cursor-pointer invert" />
          </div>
        </div>

        {/* Mobile Menu */}
        {show && (
          <div className="fixed top-0 left-0 w-full h-screen bg-[#0f172a] flex flex-col items-center justify-center gap-8 text-xl z-[9999]">
 
          {navlist.map(item => (
              <span
                key={item.id}
                onClick={() => {
                  handleNavClick(item);
                  toggleMenu();
                }}
                className="text-white hover:text-[#38bdf8] cursor-pointer"
              >
                {item.name}
              </span>
            ))}

            <a
              href="/Mahek_Shaikh.pdf"
              target="_blank"
              onClick={toggleMenu}
              className="px-6 py-3 bg-[#38bdf8] text-[#0f172a] rounded-md"
            >
              Resume
            </a>

            <button onClick={toggleMenu} 
              className="px-6 py-2 rounded-md border-2 border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8] hover:text-[#0f172a] transition-colors duration-300"
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
