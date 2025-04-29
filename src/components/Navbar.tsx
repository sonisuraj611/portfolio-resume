import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-navy shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          <span className="text-teal">S</span>uraj.
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="nav-link text-sm font-medium"
            >
              <span className="text-teal mr-1">{i + 1}.</span> {link.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/drive/folders/1M47vGdpByrvSgizYDGJwa446kDciWSXh?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-teal text-teal hover:bg-teal/10"
            >
              Resume
            </Button>
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-slate-light"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-navy-light bg-opacity-95 z-40 transition-all duration-300 flex flex-col items-center justify-center ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center space-y-6">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="nav-link text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-teal mr-1">{i + 1}.</span> {link.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/drive/folders/1M47vGdpByrvSgizYDGJwa446kDciWSXh?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            <Button
              variant="outline"
              className="border-teal text-teal hover:bg-teal/10 mt-4"
            >
              Resume
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
