import { ArrowDown } from "lucide-react";
import { Eyebrow, Reveal, TextLink } from "./shared";

export default function IntroSection() {
  return (
    <section id="intro" className="intro-section section-light">
      <div className="container intro-grid">
        <Reveal>
          <Eyebrow>About Prisma Shipping & Logistics</Eyebrow>
        </Reveal>

        <Reveal className="intro-lead">
          <h2>
            We architect
            <br />
            <i>seamless supply chains.</i>
          </h2>
        </Reveal>

        <Reveal className="intro-detail">
          <p className="large-copy">
            Empowering international cargo movements through licensed customs
            brokerage, direct quayside berth access, and synchronized
            multi-modal networks.
          </p>

          <p className="body-copy">
            From expedited ICEGATE appraisal and zero-delay documentation to
            specialized transshipment and inland haulage, we engineer seamless
            corridors connecting India’s premier maritime gateways with the
            world.
          </p>

          <TextLink href="/about">Discover Prisma</TextLink>
        </Reveal>
      </div>

      <div className="intro-rule" />

      <div className="container intro-footnote">
        <span>COCHIN • VIZHINJAM • CHENNAI • GLOBAL TRADE</span>

        <span>
          DISCOVER MORE <ArrowDown size={14} />
        </span>
      </div>
    </section>
  );
}
