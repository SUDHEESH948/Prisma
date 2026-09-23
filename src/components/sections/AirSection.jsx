import { Eyebrow, Reveal, TextLink, storage } from "./shared";

export default function AirSection() {
  return (
    <section id="air" className="air-section section-sky">
      <div className="container air-grid">
        <Reveal className="air-copy">
          <Eyebrow>Time-Critical Air Freight</Eyebrow>

          <h2>
            When time
            <br />
            <i>matters most.</i>
          </h2>

          <p>
            Customized multi-modal air freight forwarding tailored to your exact
            deadlines and budgets, connecting Indian hubs directly to global
            destinations.
          </p>

          <TextLink href="/contact">Request Air Freight Quote</TextLink>
        </Reveal>

        <Reveal className="air-visual">
          <img src={storage.air} alt="Cargo ship and aircraft over the ocean" />

          <div className="air-visual-caption">
            <span>EXPRESS CARGO</span>
            <span>DIRECT AIR TRANSIT</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
