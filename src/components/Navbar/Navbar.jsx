import { useEffect, useState } from "react";
import { navLinks } from "../../constants/navLinks";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Show / Hide Navbar
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = window.scrollY;

      // Background Blur
      setScrolled(window.scrollY > 50);

      // Active Section
      navLinks.forEach((item) => {
        const section = document.querySelector(item.link);

        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActiveSection(item.link);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      ${
        scrolled
          ? "mx-auto mt-4 max-w-7xl rounded-3xl border border-gray-800 bg-black/50 shadow-2xl backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          MOHSIN HAYAT
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-4 md:flex">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className={`rounded-xl border px-4 py-2 shadow-md transition duration-300
                ${
                  activeSection === item.link
                    ? "border-blue-500 bg-blue-500 text-white shadow-blue-500/30"
                    : "border-gray-800 bg-gray-900 text-gray-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                }`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="#contact"
          className="hidden rounded-xl bg-white px-5 py-2 font-medium text-black shadow-md transition duration-300 hover:bg-gray-200 md:block"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="rounded-b-3xl border-t border-gray-800 bg-black/90 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-4 p-6">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-xl border px-4 py-3 transition duration-300
                  ${
                    activeSection === item.link
                      ? "border-blue-500 bg-blue-500 text-white"
                      : "border-gray-800 bg-gray-900 text-gray-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  {item.title}
                </a>
              </li>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-white px-4 py-3 text-center font-medium text-black transition duration-300 hover:bg-gray-200"
            >
              Resume
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;