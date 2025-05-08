// utils/hooks/useIsMobile.ts
import { useEffect, useState } from "react";

const useIsMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    checkIsMobile(); // Gọi lần đầu
    window.addEventListener("resize", checkIsMobile); // Theo dõi resize

    return () => window.removeEventListener("resize", checkIsMobile); // Cleanup
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
