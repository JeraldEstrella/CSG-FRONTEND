import "./navigation.css";
import { useState } from "react";
import Button from "../button/Button";
import { navigationConfig } from "../../config/navigationConfig";
import logo from "../../assets/CSG_logo.svg";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

const handleNavClick = (sectionId: string) => {
  setIsMenuOpen(false);

  if (location.pathname !== "/") {
    navigate("/", { state: { scrollToId: sectionId } });
  } else {
    performScroll(sectionId);
  }
};

  const performScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Height of your navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      console.error(`Could not find element with id: ${id}`);
    }
  };

  return (
    <nav className="navigation-container">
      <div className="navigation-layout">
        <div 
          className="nav-logo-section" 
          onClick={() => handleNavClick("home")} 
          style={{ cursor: 'pointer' }}
        >
          <img className="logo" src={logo} alt="Logo" />
          <p style={{ fontWeight: "bold", color: "black" }}>
            Central Student Government
          </p>
        </div>

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
    </nav>
  );
}