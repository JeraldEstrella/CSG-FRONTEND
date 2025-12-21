import "./navigation.css";
import { useState } from "react";
import Button from "../button/Button";
import { navigationConfig } from "../../config/navigationConfig";
import logo from "../../assets/CSG_logo.svg";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    // Close mobile menu if open
    setIsMenuOpen(false);

    // Scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else {
      console.warn(`Element with ID "${sectionId}" not found`);
    }
  };

  return (
    <div className="navigation-container">
      <div className="navigation-layout">
        <div className="nav-logo-section">
          <img className="logo" src={logo} alt="Logo" />
          <p style={{ fontWeight: "bold", color: "black" }}>
            Central Student Government
          </p>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links-desktop">
          {navigationConfig.map((button) => (
            <Button
              variant={button.variant}
              id={button.id}
              key={button.id}
              onClick={() => handleNavClick(button.id)}
            >
              {button.label}
            </Button>
          ))}
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          className={`hamburger-menu ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          {navigationConfig.map((button) => (
            <Button
              variant={button.variant}
              id={button.id}
              key={button.id}
              onClick={() => handleNavClick(button.id)}
            >
              {button.label}
            </Button>
          ))}
          <Button
            variant="primary"
            id="feedback-mobile"
            style={{ padding: ".75rem", borderRadius: "2rem", width: "100%" }}
            onClick={() => setIsMenuOpen(false)}
          >
            Feedback
          </Button>
        </div>
      </div>
    </div>
  );
}