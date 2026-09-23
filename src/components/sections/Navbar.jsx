import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Eyebrow, TextLink } from "./shared";
import logo from "@/assets/image.png";

const navItems = [
  { number: "01", label: "Home", path: "/" },
  { number: "02", label: "Services", path: "/services" },
  { number: "03", label: "Network", path: "/network" },
  { number: "04", label: "About", path: "/about" },
  { number: "05", label: "Contact", path: "/contact" },
];

export default function Navbar({
  scrolled: propScrolled,
  menuOpen: propMenuOpen,
  setMenuOpen: propSetMenuOpen,
}) {
  const [internalScrolled, setInternalScrolled] = useState(false);
  const [internalMenuOpen, setInternalMenuOpen] = useState(false);
  const location = useLocation();

  const scrolled = propScrolled !== undefined ? propScrolled : internalScrolled;
  const menuOpen = propMenuOpen !== undefined ? propMenuOpen : internalMenuOpen;
  const setMenuOpen = propSetMenuOpen || setInternalMenuOpen;

  useEffect(() => {
    const onScroll = () => setInternalScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, setMenuOpen]);

  return (
    <>
      <header
        className={`site-nav ${
          scrolled || location.pathname !== "/" ? "site-nav-scrolled" : ""
        }`}
      >
        <Link
          className="brand-lockup"
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logo}
            alt="Prisma Shipping & Logistics Logo"
            style={{
              height: "46px",
              width: "46px",
              objectFit: "cover",
              objectPosition: "top center",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.35)",
            }}
          />

          <span className="brand-name">
            PRISMA <b>SHIPPING & LOGISTICS</b>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                style={isActive ? { opacity: 1, color: "var(--gold)" } : {}}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link className="nav-contact" to="/contact">
          Contact Us
          <ArrowUpRight size={15} />
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div
        className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-inner">
          <Eyebrow light>Navigation Menu</Eyebrow>

          <div className="mobile-nav-list">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 0",
                  borderBottom: "1px solid var(--line-light)",
                  color:
                    location.pathname === item.path ? "var(--gold)" : "white",
                  fontSize: "24px",
                  letterSpacing: "-.03em",
                  textTransform: "uppercase",
                }}
              >
                {item.label}
                <ArrowUpRight size={18} style={{ color: "var(--sky)" }} />
              </Link>
            ))}
          </div>

          <TextLink light href="/contact">
            Start a conversation
          </TextLink>
        </div>
      </div>
    </>
  );
}
