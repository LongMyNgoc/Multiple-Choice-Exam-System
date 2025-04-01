"use client";
import Image from "next/image";
import Link from "next/link";
import Logo_SP from "../../assets/Home/Logo_SP.png";
import DHSP from "../../assets/Home/DHSP.png";
import FIT from "../../assets/Home/FIT.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#34C759" }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          <Image src={Logo_SP} alt="Logo SP" className="img-fluid w-100 w-sm-50 w-md-30 w-lg-20" />
          <Image src={DHSP} alt="DHSP" className="img-fluid w-100 w-sm-50 w-md-30 w-lg-20" />
          <Image src={FIT} alt="FIT" className="img-fluid w-100 w-sm-50 w-md-30 w-lg-20" />
        </div>

        <Link href="/">
            <button className="btn border-0 bg-transparent fs-1 text-light">
              🏠
            </button>
          </Link>

        <div className="d-flex gap-4 align-items-center">
          <span className="text-light">📧: longmyngoc2004@gmail.com</span>
          <span className="text-light">📞: 0363291823</span>
          <span className="text-light">🐙: https://github.com/LongMyNgoc</span>
        </div>

        <Link href="/pages/Login">
          <button className="btn btn-outline-light px-4 py-2 rounded-pill fw-bold">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;