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
            Founded in 2020, Prisma Shipping and Logistics has evolved to become
            one of the most reliable, asset-backed logistics and supply chain
            partners across India’s premier maritime gateways.
          </p>

          <p className="body-copy">
            Headquartered in Cochin with operations across Cochin, Vizhinjam,
            and Chennai, we specialize in simplifying the immense complexities
            of international trade as Licensed Customs Brokers and multi-modal
            freight forwarders.
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
