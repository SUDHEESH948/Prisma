import { Outlet } from "react-router-dom";
import Navbar from "@/components/sections/Navbar";
import FooterSection from "@/components/sections/FooterSection";

export default function Layout() {
  return (
    <div
      className="site-shell"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Navbar />
      <main style={{ flex: "1 0 auto", position: "relative", zIndex: 1 }}>
        <Outlet />
      </main>
      <FooterSection />
    </div>
  );
}
