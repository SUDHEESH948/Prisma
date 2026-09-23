import { useState } from "react";
import {
  Boxes,
  ChevronRight,
  FileCheck2,
  Plane,
  ShipWheel,
  Truck,
  Warehouse,
} from "lucide-react";

import { Eyebrow, Reveal, storage } from "./shared";

const services = [
  {
    number: "01",
    label: "Multi-Modal Freight Forwarding",
    meta: "Sea (FCL/LCL) & Air Freight tailored to deadlines & budgets",
    icon: ShipWheel,
    image: storage.hero,
  },
  {
    number: "02",
    label: "Licensed Customs Broker",
    meta: "Swift handling of import/export compliance & duty valuations",
    icon: FileCheck2,
    image: storage.port,
  },
  {
    number: "03",
    label: "Inland Transportation & Logistics",
    meta: "Road & rail linking manufacturing hubs directly to ports",
    icon: Truck,
    image: storage.ship,
  },
  {
    number: "04",
    label: "Exim Consultation",
    meta: "Tariff codes, trade regulations & incentive schemes",
    icon: Boxes,
    image: storage.air,
  },
  {
    number: "05",
    label: "Warehousing & Distribution",
    meta: "Asset-backed inventory control at every handoff",
    icon: Warehouse,
    image: storage.port,
  },
  {
    number: "06",
    label: "Project Cargo",
    meta: "Heavy lift and complex industrial moves, carefully made",
    icon: Plane,
    image: storage.hero,
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="services-section section-dark">
      <div className="container">
        <div className="section-heading-row">
          <Reveal>
            <Eyebrow light>Our Core Pillars</Eyebrow>
          </Reveal>

          <Reveal className="heading-side-note">
            <span>Licensed Customs Broker & Freight Forwarding</span>
          </Reveal>
        </div>

        <Reveal>
          <h2 className="section-title light-title">
            Logistics,
            <br />
            <i>without limits.</i>
          </h2>
        </Reveal>

        <div
          className="service-list"
          style={{
            backgroundImage: `url(${services[activeService].image})`,
          }}
        >
          <div className="service-image-overlay" />

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <button
                key={service.number}
                className={`service-row ${
                  activeService === index ? "service-active" : ""
                }`}
                onMouseEnter={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
                onClick={() => setActiveService(index)}
              >
                <span className="service-number">{service.number}</span>

                <span className="service-icon">
                  <Icon size={19} strokeWidth={1.3} />
                </span>

                <span className="service-name">{service.label}</span>

                <span className="service-meta">{service.meta}</span>

                <ChevronRight
                  className="service-arrow"
                  size={20}
                  strokeWidth={1.2}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
