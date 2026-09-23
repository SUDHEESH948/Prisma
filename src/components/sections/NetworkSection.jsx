import { Eyebrow, Reveal } from "./shared";

const networkPoints = [
  [487, 212, "Cochin Gateway"],
  [510, 240, "Vizhinjam Hub"],
  [535, 205, "Chennai Corridor"],
  [348, 195, "Dubai"],
  [646, 175, "Singapore"],
  [122, 174, "Rotterdam"],
];

export default function NetworkSection() {
  return (
    <section id="network" className="network-section section-ocean">
      <div className="container">
        <div className="section-heading-row network-head">
          <Reveal>
            <Eyebrow light>Strategic Gateway Network</Eyebrow>
          </Reveal>

          <Reveal className="heading-side-note light-note">
            <span>Cochin • Vizhinjam • Chennai • Worldwide</span>
          </Reveal>
        </div>

        <Reveal>
          <h2 className="section-title light-title network-title">
            One network.
            <br />
            <i>Every destination.</i>
          </h2>
        </Reveal>

        <div className="network-map-wrap">
          <svg
            className="network-map"
            viewBox="0 0 1000 420"
            role="img"
            aria-label="Global logistics network map"
          >
            <path
              className="land-shape"
              d="M82 125l38-29 56 7 36 29 27 3 22 28-28 18-42-7-18 31-34-9-6-28-31-9-17-34zm234 71l34-8 31 20 18 33-10 29-31-5-17-27-27-9 2-33zm96-92l28-18 47 4 18 18-8 22-29 4-18 27-28-12-14-26 4-19zm78 36l29-11 38 13 15 33-22 23-25-11-25 11-24-24 14-34zm112-30l42-7 44 16 9 27-22 19-34-12-21 11-25-21 7-33zm88 75l42-19 44 11 9 28-17 27-40 4-23-20-15-11z"
            />

            <path
              className="route-line"
              d="M122 174C235 217 359 177 463 212S702 145 874 192"
            />

            <path
              className="route-line route-line-2"
              d="M212 213C360 250 538 204 640 236S821 251 910 229"
            />

            <path
              className="route-line route-line-3"
              d="M343 103C434 160 483 240 622 274"
            />

            {networkPoints.map(([x, y, label]) => (
              <g key={label} className="map-point">
                <circle cx={x} cy={y} r="5" />
                <circle cx={x} cy={y} r="12" className="point-ring" />
                <text x={x + 14} y={y + 4}>
                  {label}
                </text>
              </g>
            ))}
          </svg>

          <div className="network-legend">
            <span>
              <i className="legend-dot" /> Prisma Strategic Gateways
            </span>

            <span>Cochin • Vizhinjam • Chennai • Global Connectivity</span>
          </div>
        </div>

        <div className="network-stats">
          {[
            ["6", "+", "Years Proven Compliance"],
            ["100", "%", "Licensed Customs Broker"],
            ["3", " Gateways", "Cochin, Vizhinjam & Chennai"],
            ["99.8", "%", "On-Time Clearance Precision"],
          ].map(([number, suffix, label]) => (
            <div className="network-stat" key={label}>
              <strong>
                {number}
                <b>{suffix}</b>
              </strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
