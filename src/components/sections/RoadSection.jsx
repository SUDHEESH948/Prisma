import { Eyebrow, Reveal, storage } from "./shared";

export default function RoadSection() {
  return (
    <section id="road" className="road-section section-dark">
      <div
        className="road-image"
        style={{ backgroundImage: `url(${storage.port})` }}
      />

      <div className="road-overlay" />

      <div className="container road-content">
        <Reveal>
          <Eyebrow light>Inland Transportation & Rail Logistics</Eyebrow>

          <h2>
            Connected
            <br />
            <i>by road & rail.</i>
          </h2>

          <p>
            A robust domestic network linking local manufacturing hubs directly
            to international ports via road and rail across India's key
            industrial corridors.
          </p>
        </Reveal>

        <Reveal className="road-route">
          <span>FACTORY FLOOR</span>

          <div>
            <span className="route-dot" />
            <span className="route-track" />
            <span className="route-dot route-dot-end" />
          </div>

          <span>DEEP-WATER PORT</span>
        </Reveal>
      </div>
    </section>
  );
}
