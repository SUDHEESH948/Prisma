/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const storage = {
  hero: "/manus-storage/hero-ship_9a5e4b4d.jpg",
  port: "/manus-storage/port-aerial_921a73ea.jpg",
  ship: "/manus-storage/port-ship_39e2541d.jpg",
  air: "/manus-storage/air-ocean_1ab8aa3b.jpg",
};

export function Eyebrow({ children, light = false, className = "" }) {
  return (
    <div
      className={`eyebrow ${light ? "eyebrow-light" : ""} ${className}`.trim()}
    >
      <span className="eyebrow-dot" />
      {children}
    </div>
  );
}

export function TextLink({ children, light = false, href = "/contact" }) {
  const isInternal = href.startsWith("/") && !href.startsWith("//");
  const className = `text-link ${light ? "text-link-light" : ""}`;

  if (isInternal) {
    return (
      <Link className={className} to={href}>
        <span>{children}</span>
        <ArrowUpRight size={16} strokeWidth={1.6} />
      </Link>
    );
  }

  return (
    <a className={className} href={href}>
      <span>{children}</span>
      <ArrowUpRight size={16} strokeWidth={1.6} />
    </a>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  yOffset = 24,
  duration = 0.6,
  style = {},
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`reveal is-visible ${className}`}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  delayChildren = 0.1,
  staggerDelta = 0.12,
  style = {},
  ...props
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelta,
            delayChildren,
          },
        },
      }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  style = {},
  ...props
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 26 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionCard({ children, className = "", style = {}, ...props }) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
}
