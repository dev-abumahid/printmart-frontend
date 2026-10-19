import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { useLocation } from "react-router";

export default function RouteAwareNavbar() {
  const {pathname} = useLocation();
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    // The navbar is remounted on every route change, which clears transient
    // state such as an open mega menu. We also briefly disable pointer events
    // so a cursor that is still sitting over the clicked nav item cannot
    // immediately trigger the menu again on the newly mounted navbar.
    const timer = window.setTimeout(() => {
      setInteractive(true);
    }, 220);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={interactive ? "pointer-events-auto" : "pointer-events-none"}
    >
      <Navbar />
    </div>
  );
}
