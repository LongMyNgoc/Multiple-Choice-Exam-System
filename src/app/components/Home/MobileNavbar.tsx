"use client";
import Link from "next/link";
import Image from "next/image";
import Logo_SP from "../../assets/Home/Logo_SP.png";

const MobileNavbar = () => {
    return (
        <nav className="bg-green-500 p-4 flex justify-between items-center">
            <div className="d-flex align-items-center gap-3">
                <Image src={Logo_SP} alt="Logo SP" className="img-fluid w-100 w-sm-50 w-md-30 w-lg-20" />
            </div>
            <Link href="/">
            <button className="btn border-0 bg-transparent fs-1 text-light hover:scale-110 hover:text-success">
              🏠
            </button>
          </Link>
            <Link href="/pages/Login">
                <button className="btn btn-outline-light px-4 py-2 rounded-pill fw-bold">
                    Login
                </button>
            </Link>
        </nav>
    );
};

export default MobileNavbar;
