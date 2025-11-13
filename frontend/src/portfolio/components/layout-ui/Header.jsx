// import React, { useState } from "react";
// import Menu from "../../../assets/Images/Menu.png";
// import { Link as ScrollLink } from "react-scroll";
// import { useNavigate, useLocation } from "react-router-dom";
// import ScrollToTop from "./ScrollToTop";
// import logo from "../../../assets/Images/mahek_logo.jpg";

// const Header = () => {
//   const [navlist] = useState([
//     { id: 1, name: "About", link: "about" },
//     { id: 2, name: "Work", link: "work" },
//     { id: 3, name: "Contact", link: "contact" },
//   ]);

//   const [show, setShow] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const showToggler = () => {
//     setShow(!show);
//   };

//   const navlistClassName = show
//     ? `!flex flex-col justify-center items-center text-xl bg-amber-50 fixed left-0 top-0 w-full h-full
//         md:flex-row md:relative md:bg-transparent`
//     : "hidden";

//   const NavItem = ({ name, link }) => {
//     const handleClick = () => {
//       if (name === "About") {
//         navigate("/about");
//       } else {
//         if (location.pathname !== "/") {
//           navigate("/", { state: { scrollTo: link } });
//         }
//       }
//     };

//     return (
//       <li className="cursor-pointer hover:underline">
//         {name === "About" ? (
//           <span onClick={handleClick}>{name}</span>
//         ) : location.pathname === "/" ? (
//           <ScrollLink
//             to={link}
//             spy={true}
//             smooth={true}
//             offset={-80}
//             duration={500}
//           >
//             {name}
//           </ScrollLink>
//         ) : (
//           <span onClick={handleClick}>{name}</span>
//         )}
//       </li>
//     );
//   };

//   return (
//     <>
//     <div className="overflow-x-hidden">
//     <header className="flex justify-between px-12 py-6 sticky top-0 bg-white">
//       <ScrollToTop />
//       {/* <div className="brand font-semibold text-xl">Logo</div> */}
//       <img src={logo} alt="Logo" className="h-20 w-auto object-contain" />
//       <nav>
//         <ul className={`${navlistClassName} hidden md:flex gap-12`}>
//           {navlist.map(({ id, name, link }) => (
//             <NavItem key={id} name={name} link={link} />
//           ))}
//           <p
//             onClick={showToggler}
//             className="md:hidden cursor-pointer hover:underline font-medium bg-slate-900 py-2 px-3 text-white"
//           >
//             Go Back
//           </p>
//         </ul>
//       </nav>
//       <img
//         onClick={showToggler}
//         src={Menu}
//         className="h-6 w-6 md:hidden"
//         alt="Menu"
//       />
//     </header>
//     </div>
//     </>
//   );
// };

// export default Header;





import React, { useState } from "react";
import Menu from "../../../assets/Images/Menu.png";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import logo from "../../../assets/Images/mahek_logo.jpg";

const Header = () => {
  const [navlist] = useState([
    { id: 1, name: "About", link: "about" },
    { id: 2, name: "Work", link: "work" },
    { id: 3, name: "Contact", link: "contact" },
  ]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const showToggler = () => {
    setShow(!show);
  };

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
      <li className="cursor-pointer hover:text-[#009379] transition-all duration-200 font-medium text-[1rem]">
        {name === "About" ? (
          <span onClick={handleClick}>{name}</span>
        ) : location.pathname === "/" ? (
          <ScrollLink
            to={link}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
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
      <header className="w-full sticky top-0 z-50 bg-white shadow-sm ">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-auto object-contain rounded-md"
          />

          {/* Nav links */}
          <ul className="hidden md:flex items-center gap-10">
            {navlist.map(({ id, name, link }) => (
              <NavItem key={id} name={name} link={link} />
            ))}
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
          <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col justify-center items-center gap-8 z-50 text-xl">
            {navlist.map(({ id, name, link }) => (
              <NavItem key={id} name={name} link={link} />
            ))}
            <button
              onClick={showToggler}
              className="mt-4 px-6 py-2 border border-[#009379] text-[#009379] hover:bg-[#009379] hover:text-white transition rounded-md"
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
