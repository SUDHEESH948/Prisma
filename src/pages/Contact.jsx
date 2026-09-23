import { useState } from "react";
import { MapPin, Phone, Clock, Send, CheckCircle2 } from "lucide-react";
import { Eyebrow, Reveal } from "@/components/sections/shared";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "Customs Clearance & Brokerage",
    origin: "",
    destination: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="page-hero-grid" />
        <div className="container">
          <Reveal>
            <Eyebrow light>Connect With Port Operations</Eyebrow>
            <h1>
              Your Cargo.
              <br />
              <i>Our Responsibility.</i>
            </h1>
            <p className="page-lead">
              Reach our operational headquarters at Willingdon Island, Cochin,
              or request an immediate freight rate and customs clearance
              consultation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-light contact-main-section">
        <div className="container">
          <div className="contact-grid-layout">
            {/* Left: Contact Info & Port Hubs */}
            <Reveal>
              <Eyebrow>Direct Contact</Eyebrow>
              <h2
                style={{
                  fontSize: "clamp(30px, 4vw, 50px)",
                  margin: "20px 0 24px",
                  lineHeight: "1.05",
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                }}
              >
                Headquartered at
                <br />
                <i>Willingdon Island.</i>
              </h2>
              <p
                style={{
                  color: "var(--ink-muted)",
                  fontSize: "15px",
                  lineHeight: "1.65",
                  marginBottom: "32px",
                }}
              >
                Conveniently located in the historical heart of Cochin port
                operations, minutes away from customs appraisal cells and the
                Vallarpadam ICTT terminal.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {/* Address */}
                <div className="contact-info-card">
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "8px",
                      background: "var(--soft-sky)",
                      color: "var(--teal)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4
                      style={{
                        margin: "0 0 6px",
                        fontSize: "14px",
                        textTransform: "uppercase",
                        color: "var(--deep)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Registered Headquarters
                    </h4>
                    <p
                      style={{
                        margin: 0,
                        color: "var(--ink)",
                        fontSize: "13px",
                        lineHeight: "1.6",
                      }}
                    >
                      Unit no 2 & 3, Ex electrical Building,
                      <br />
                      Indira Gandhi Road, Willingdon Island,
                      <br />
                      Cochin 682003, Kerala, India
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="contact-info-card">
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "8px",
                      background: "var(--soft-sky)",
                      color: "var(--teal)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4
                      style={{
                        margin: "0 0 6px",
                        fontSize: "14px",
                        textTransform: "uppercase",
                        color: "var(--deep)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Direct Phone Lines
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      <a
                        href="tel:+919995406130"
                        style={{
                          color: "var(--teal)",
                          fontWeight: 600,
                          fontSize: "15px",
                          textDecoration: "none",
                        }}
                      >
                        +91 9995406130
                      </a>
                      <a
                        href="tel:+919447736001"
                        style={{
                          color: "var(--teal)",
                          fontWeight: 600,
                          fontSize: "15px",
                          textDecoration: "none",
                        }}
                      >
                        +91 9447736001
                      </a>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="contact-info-card">
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "8px",
                      background: "var(--soft-sky)",
                      color: "var(--teal)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4
                      style={{
                        margin: "0 0 6px",
                        fontSize: "14px",
                        textTransform: "uppercase",
                        color: "var(--deep)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Operational Support
                    </h4>
                    <p
                      style={{
                        margin: 0,
                        color: "var(--ink-muted)",
                        fontSize: "13px",
                        lineHeight: "1.6",
                      }}
                    >
                      Monday – Saturday: 9:00 AM – 7:00 PM IST
                      <br />
                      24/7 on-call desk for vessel berthing & emergency
                      clearance
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: Quote & Consultation Request Form */}
            <Reveal className="contact-card-box">
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <CheckCircle2
                    size={54}
                    style={{ color: "var(--teal)", margin: "0 auto 20px" }}
                  />
                  <h3
                    style={{
                      fontSize: "26px",
                      textTransform: "uppercase",
                      color: "var(--deep)",
                      marginBottom: "12px",
                    }}
                  >
                    Inquiry Received
                  </h3>
                  <p
                    style={{
                      color: "var(--ink-muted)",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      maxWidth: "420px",
                      margin: "0 auto 26px",
                    }}
                  >
                    Thank you, <strong>{formData.name}</strong>. Our Licensed
                    Customs Broker and freight desk will review your details and
                    contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                    style={{ width: "auto", margin: "0 auto" }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: "26px" }}>
                    <h3
                      style={{
                        fontSize: "24px",
                        color: "var(--deep)",
                        margin: "0 0 8px",
                        textTransform: "uppercase",
                      }}
                    >
                      Request a Rate / Exim Consultation
                    </h3>
                    <p
                      style={{
                        color: "var(--ink-muted)",
                        fontSize: "13px",
                        margin: 0,
                      }}
                    >
                      Provide your shipment requirements for a prompt, tailored
                      proposal.
                    </p>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Company Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Kerala Exports Ltd."
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="form-control"
                        placeholder="+91 90000 00000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        required
                        className="form-control"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Primary Service Needed *</label>
                    <select
                      className="form-control"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                    >
                      <option value="Customs Clearance & Brokerage">
                        Licensed Customs Clearance & Brokerage
                      </option>
                      <option value="Sea Freight Forwarding (FCL/LCL)">
                        Sea Freight Forwarding (FCL / LCL)
                      </option>
                      <option value="Air Freight Forwarding">
                        Air Freight Forwarding
                      </option>
                      <option value="Inland Transportation & Rail">
                        Inland Transportation & Road/Rail
                      </option>
                      <option value="Exim Consultation">
                        Exim Consultation & Duty Advisory
                      </option>
                      <option value="Warehousing & Distribution">
                        Warehousing & Distribution
                      </option>
                      <option value="Project Cargo & Heavy Lift">
                        Project Cargo & Heavy Lift
                      </option>
                    </select>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Origin Port / City</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Cochin / Dubai / Shanghai"
                        value={formData.origin}
                        onChange={(e) =>
                          setFormData({ ...formData, origin: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Destination Port / City</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Rotterdam / Vizhinjam / New York"
                        value={formData.destination}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            destination: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Cargo Description & Specific Requirements</label>
                    <textarea
                      rows={3}
                      className="form-control"
                      placeholder="Include container size, weight, commodity, HS code, or specific target deadlines..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <button type="submit" className="btn-primary">
                    <Send size={16} /> Send Inquiry to Operations Desk
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section-ocean contact-faq-section">
        <div className="container">
          <Reveal>
            <Eyebrow light>Exim & Clearance FAQs</Eyebrow>
            <h2
              style={{
                fontSize: "clamp(26px, 4vw, 44px)",
                margin: "16px 0 36px",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              Answers Before You Ship.
            </h2>
          </Reveal>

          <div className="faq-grid">
            <Reveal
              style={{
                background: "rgba(255,255,255,0.08)",
                padding: "26px",
                borderRadius: "4px",
              }}
            >
              <h4
                style={{ color: "white", fontSize: "17px", margin: "0 0 10px" }}
              >
                How fast can customs clearance be completed?
              </h4>
              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "13px",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                With complete documentation and advance Bill of Entry filing,
                clearance at Cochin and Chennai is routinely completed within 24
                to 48 hours of vessel discharge.
              </p>
            </Reveal>

            <Reveal
              style={{
                background: "rgba(255,255,255,0.08)",
                padding: "26px",
                borderRadius: "4px",
              }}
            >
              <h4
                style={{ color: "white", fontSize: "17px", margin: "0 0 10px" }}
              >
                What are the benefits of using a Licensed Customs Broker?
              </h4>
              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "13px",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                A Licensed Broker has direct statutory authorization with Indian
                Customs, eliminating middleman markups, ensuring correct duty
                assessment, and resolving queries instantly.
              </p>
            </Reveal>

            <Reveal
              style={{
                background: "rgba(255,255,255,0.08)",
                padding: "26px",
                borderRadius: "4px",
              }}
            >
              <h4
                style={{ color: "white", fontSize: "17px", margin: "0 0 10px" }}
              >
                Do you handle door-to-door multimodal shipments?
              </h4>
              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "13px",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                Yes. We handle factory pick-up, road/rail haulage, port
                handling, customs clearance, sea/air shipping, and destination
                delivery under single-point accountability.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
