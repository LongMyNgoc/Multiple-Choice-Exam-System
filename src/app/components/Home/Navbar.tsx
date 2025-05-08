"use client";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import useIsMobile from "@/app/hooks/useIsMobile";

const Navbar = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};

export default Navbar;
