import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Footer";

export default function SiteLayout() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const targetId = hash.replace("#", "");
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ behavior: "auto", block: "start" });
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const retryTarget = document.getElementById(targetId);
      if (retryTarget) {
        retryTarget.scrollIntoView({ behavior: "auto", block: "start" });
      }
    }, 100);

    return () => window.clearTimeout(timeoutId);
  }, [pathname, hash]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
