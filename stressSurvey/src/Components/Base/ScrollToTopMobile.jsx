import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopMobile() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 100);
  }, [pathname]);

  return null;
}