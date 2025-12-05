import { useEffect, useState } from "react";

const useIsMobile = (width: number = 768) => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia(`(max-width: ${width}px)`).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${width}px)`);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [width]);

  return isMobile;
};

export { useIsMobile };
