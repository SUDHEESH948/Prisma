import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import logo from "@/assets/image.png";

const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Network", "/network"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

const footerServices = [
  "Multi-Modal Freight Forwarding",
  "Licensed Customs Broker",
  "Inland Transportation (Road & Rail)",
  "Exim Consultation",
  "Warehousing & Distribution",
  "Project Cargo & Heavy Lift",
];

export default function FooterSection() {
  const [openSections, setOpenSections] = useState({
    navigate: true,
    pillars: true,
    contact: true,
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <footer className="footer-section">
      <div className="container footer-top">
        <div style={{ maxWidth: "380px" }}>
          <Link
            className="brand-lockup footer-brand"
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "20px",
            }}
          >
            <img
              src={logo}
              alt="Prisma Shipping & Logistics Logo"
              style={{
                width: "56px",
                height: "56px",
                objectFit: "cover",
                objectPosition: "top center",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4)",
              }}
            />

            <span className="brand-name" style={{ fontSize: "13px" }}>
              PRISMA <b>SHIPPING & LOGISTICS</b>
            </span>
          </Link>

          <p style={{ fontSize: "20px", margin: "12px 0 16px" }}>
            Navigating Global Trade.
            <br />
            <i>With Precision & Trust.</i>
          </p>

          <p style={{ fontSize: "12px", opacity: 0.75, lineHeight: "1.6" }}>
            Unit no 2 & 3, Ex electrical Building, Indira Gandhi Road,
            Willingdon Island, Cochin 682003, Kerala, India
          </p>
        </div>

        <div className="footer-links">
          {/* 2-Column Mobile Group for Navigate and Core Pillars */}
          <div className="footer-nav-pillars-group">
            <div className="footer-col">
              <button
                type="button"
                className="footer-col-header"
                onClick={() => toggleSection("navigate")}
              >
                <span className="footer-label">Navigate</span>
                <ChevronDown
                  size={16}
                  className={`footer-chevron ${openSections.navigate ? "rotated" : ""}`}
                />
              </button>

              {openSections.navigate && (
                <div className="footer-col-links">
                  {navItems.map(([label, path]) => (
                    <Link key={path} to={path} className="footer-link-item">
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="footer-col">
              <button
                type="button"
                className="footer-col-header"
                onClick={() => toggleSection("pillars")}
              >
                <span className="footer-label">Core Pillars</span>
                <ChevronDown
                  size={16}
                  className={`footer-chevron ${openSections.pillars ? "rotated" : ""}`}
                />
              </button>

              {openSections.pillars && (
                <div className="footer-col-links">
                  {footerServices.map((service) => (
                    <Link
                      key={service}
                      to="/services"
                      className="footer-link-item"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="footer-col footer-contact-col">
            <button
              type="button"
              className="footer-col-header"
              onClick={() => toggleSection("contact")}
            >
              <span className="footer-label">Contact & Ports</span>
              <ChevronDown
                size={16}
                className={`footer-chevron ${openSections.contact ? "rotated" : ""}`}
              />
            </button>

            {openSections.contact && (
              <div className="footer-col-links">
                <a href="tel:+919995406130" className="footer-link-item">
                  +91 9995406130
                </a>

                <a href="tel:+919447736001" className="footer-link-item">
                  +91 9447736001
                </a>

                <span
                  style={{
                    fontSize: "11px",
                    color: "var(--sky)",
                    marginTop: "8px",
                    display: "inline-block",
                  }}
                >
                  Cochin • Vizhinjam • Chennai
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Prisma Shipping and Logistics. All rights reserved.</span>

        <span>
          Licensed Customs Broker&nbsp;&nbsp;&nbsp; Willingdon Island,
          Cochin&nbsp;&nbsp;&nbsp; India
        </span>

        <span className="footer-forward-link">
          Made to move forward <ArrowRight size={14} />
        </span>
      </div>
    </footer>
  );
}
