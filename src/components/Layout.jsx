import { Outlet } from "react-router-dom";
import Navbar from "@/components/sections/Navbar";
import FooterSection from "@/components/sections/FooterSection";

export default function Layout() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <FooterSection />
    </div>
  );
}
