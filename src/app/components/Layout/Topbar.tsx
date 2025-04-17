"use client";
import Image from "next/image";
import Link from "next/link";
import useUserEmail from "@/app/hooks/useUserEmail"; // Đường dẫn có thể thay đổi tùy dự án
import Logo_SP from "../../assets/Home/Logo_SP.png";
import DHSP from "../../assets/Home/DHSP.png";
import FIT from "../../assets/Home/FIT.png";

const Topbar = () => {
  const userEmail = useUserEmail();

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{ backgroundColor: "#34C759", zIndex: 1000 }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-4">
          <Image src={Logo_SP} alt="Logo SP" className="img-fluid w-100 w-sm-50 w-md-30 w-lg-20" />
          <Image src={DHSP} alt="DHSP" className="img-fluid w-100 w-sm-50 w-md-30 w-lg-20" />
          <Image src={FIT} alt="FIT" className="img-fluid w-100 w-sm-50 w-md-30 w-lg-20" />
          <Link href="/">
            <button className="btn border-0 bg-transparent fs-1 text-light hover:scale-110 hover:text-success">
              🏠
            </button>
          </Link>
        </div>

        {userEmail && (
          <div className="text-light d-flex align-items-center gap-2 fw-bold">
            <span className="fs-1">👤</span>
            <span>{userEmail}</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Topbar;
