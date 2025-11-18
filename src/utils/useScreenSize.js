import { useState, useEffect } from "react";

const useScreenSize = () => {
  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio || 1,
  });

  const [screen, setScreen] = useState(getSize());

  useEffect(() => {
    const updateSize = () => setScreen(getSize());

    // Resize listener
    window.addEventListener("resize", updateSize);

    // Detect devicePixelRatio changes
    const dprQuery = window.matchMedia(
      `(resolution: ${window.devicePixelRatio}dppx)`
    );

    const handleDPR = () => updateSize();

    if (dprQuery.addEventListener) {
      dprQuery.addEventListener("change", handleDPR);
    } else {
      dprQuery.addListener(handleDPR);
    }

    return () => {
      window.removeEventListener("resize", updateSize);

      if (dprQuery.removeEventListener) {
        dprQuery.removeEventListener("change", handleDPR);
      } else {
        dprQuery.removeListener(handleDPR);
      }
    };
  }, []);

  return screen;
};

export default useScreenSize;
