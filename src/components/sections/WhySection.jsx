import { ArrowUpRight } from "lucide-react";
import { Eyebrow, Reveal } from "./shared";

const principles = [
  [
    "01",
    "6+ Years Proven Compliance",
    "Zero-compromise adherence to local and international customs laws and exim regulations.",
  ],
  [
    "02",
    "End-to-End Visibility",
    "A single point of accountability and transparent oversight from factory floor to foreign port.",
  ],
  [
    "03",
    "Tailored Scale",
    "Whether shipping a single container or executing a massive industrial contract, we scale to your velocity.",
  ],
  [
    "04",
    "Licensed Customs Broker",
    "Direct clearance authority and strategic Exim consultation to eliminate costly port delays.",
  ],
];

export default function WhySection() {
  return (
    <section className="why-section section-light">
      <div className="container">
        <div className="section-heading-row">
          <Reveal>
            <Eyebrow>Why Choose Prisma</Eyebrow>
          </Reveal>

          <Reveal className="heading-side-note">
            <span>Our Commitment to Excellence</span>
          </Reveal>
        </div>

        <Reveal>
          <h2 className="section-title dark-title">
            Precision
            <br />
            & Trust at
            <br />
            <i>Every Mile.</i>
          </h2>
        </Reveal>

        <div className="principles-grid">
          {principles.map(([number, title, copy]) => (
            <Reveal className="principle" key={number}>
              <span className="principle-number">{number}</span>

              <h3>{title}</h3>

              <p>{copy}</p>

              <ArrowUpRight className="principle-arrow" size={18} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
