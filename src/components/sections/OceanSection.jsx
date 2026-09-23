import { Eyebrow, Reveal, TextLink, storage } from "./shared";

export default function OceanSection() {
  return (
    <section
      id="ocean"
      className="feature-image-section"
      style={{ backgroundImage: `url(${storage.ship})` }}
    >
      <div className="feature-image-overlay" />

      <div className="container feature-content">
        <Reveal>
          <Eyebrow light>Maritime & Transshipment Gateways</Eyebrow>
        </Reveal>

        <Reveal>
          <h2>
            Deep-Water Gateways.
            <br />
            <i>Global Capacity.</i>
          </h2>
        </Reveal>

        <Reveal className="feature-bottom">
          <p>
            Operating across India's premier transshipment hubs — Cochin,
            Vizhinjam, and Chennai —
            <br />
            with tailored FCL & LCL global ocean freight routing.
          </p>

          <TextLink light href="/services">
            Explore Sea Freight
          </TextLink>
        </Reveal>
      </div>
    </section>
  );
}
