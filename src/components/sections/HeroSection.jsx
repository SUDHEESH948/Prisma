import { Fragment } from "react";
import { motion } from "framer-motion";
import { Eyebrow } from "./shared";

import heroVideo from "../../assets/ship.mp4";

const HEADING_LINES = [
  { text: "Navigating", isGold: false },
  { text: "Global Trade", isGold: false },
  { text: "with Trust.", isGold: true },
];

function parseHeadingLines(lines) {
  let counter = 0;

  return lines.map((line) => {
    const words = line.text.split(" ").map((word) => {
      const letters = word.split("").map((char) => {
        const idx = counter++;

        return {
          char,
          index: idx,
        };
      });

      return letters;
    });

    return {
      words,
      isGold: line.isGold,
    };
  });
}

const PARSED_LINES = parseHeadingLines(HEADING_LINES);

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      {/* FULL SCREEN VIDEO */}
      <div className="hero-media">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      {/* CINEMATIC OVERLAY */}
      <div className="hero-overlay" />

      {/* GRID */}
      <div className="hero-grid-lines" />

      {/* CONTENT */}
      <div className="hero-content">
        <div className="hero-copy">
          {/* EYEBROW */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Eyebrow light>Licensed Customs Broker & Freight Forwarder</Eyebrow>
          </motion.div>

          {/* MAIN HEADING */}
          <h1
            className="hero-heading"
            aria-label="Navigating Global Trade with Trust."
          >
            {PARSED_LINES.map((line, lineIdx) => (
              <span key={lineIdx} className="hero-heading-line">
                {line.words.map((word, wordIdx) => (
                  <Fragment key={wordIdx}>
                    {/* WORD SPACE */}
                    {wordIdx > 0 && (
                      <span className="hero-heading-space" aria-hidden="true">
                        &nbsp;
                      </span>
                    )}

                    <span className="hero-heading-word">
                      {/* LETTER BY LETTER */}
                      {word.map((letter) => (
                        <motion.span
                          key={letter.index}
                          className={`hero-heading-char ${
                            line.isGold ? "gold-text" : ""
                          }`}
                          aria-hidden="true"
                          initial={{
                            opacity: 0,
                            y: 50,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.8,
                            delay: 0.15 + letter.index * 0.055,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          {letter.char}
                        </motion.span>
                      ))}
                    </span>
                  </Fragment>
                ))}
              </span>
            ))}
          </h1>

          {/* DESCRIPTION */}
          <motion.p
            className="hero-intro"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Architecting seamless end-to-end supply chains across India's
            premier maritime gateways with precision and peace of mind.
          </motion.p>
        </div>

        {/* SIDE INFORMATION */}
        <motion.div
          className="hero-side-note"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 0.65,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1,
            ease: "easeOut",
          }}
        >
          EST. 2020 <span>•</span> WILLINGDON ISLAND, COCHIN
        </motion.div>
      </div>
    </section>
  );
}
