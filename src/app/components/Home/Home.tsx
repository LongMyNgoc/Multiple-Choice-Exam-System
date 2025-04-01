"use client";

import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo_SP from "../../assets/Home/Logo_SP.png";
import DHSP from "../../assets/Home/DHSP.png";
import FIT from "../../assets/Home/FIT.png";
import HomeContent from "../../assets/Home/HomeContent.png";

const Home = () => {
  return (
    <>
      {/* Navbar trên */}
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#34C759" }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="d-flex align-items-center gap-3">
            <Image src={Logo_SP} alt="Logo SP" className="img-fluid w-100 w-sm-50 w-md-30 w-lg-20" />
            <Image src={DHSP} alt="DHSP" className="img-fluid w-100 w-sm-50 w-md-30 w-lg-20" />
            <Image src={FIT} alt="FIT" className="img-fluid w-100 w-sm-50 w-md-30 w-lg-20" />
          </div>

          {/* Thêm email và số điện thoại vào navbar */}
          <div className="d-flex gap-4 align-items-center">
            <span className="text-light">📧: longmyngoc2004@gmail.com</span>
            <span className="text-light">📞: 0363291823</span>
            <span className="text-light">🐙: https://github.com/LongMyNgoc</span>
          </div>  

          {/* Button */}
          <button className="btn btn-outline-light px-4 py-2 rounded-pill fw-bold">
            Login
          </button>
        </div>
      </nav>

      {/* Content phần giữa */}
      <div className="container my-5">
        <div className="d-flex justify-content-center position-relative">
          {/* Ảnh */}
          <Image src={HomeContent} alt="Home Image" className="img-fluid" />
          
          {/* Dòng chữ với nền sử dụng Bootstrap */}
          <div className="position-absolute top-50 start-50 translate-middle bg-success text-light fw-bold p-4 rounded shadow text-center" style={{ maxWidth: '100%' }}>
            HỆ THỐNG QUẢN LÝ NGÂN HÀNG ĐỀ TRẮC NGHIỆM, TỔ CHỨC THI, QUẢN LÝ KẾT QUẢ
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer bg-success text-white text-center py-3 mt-auto fixed-bottom">
        <div className="container">
          <span className="fw-bold">© 2025 Ho Chi Minh City University of Education</span>
        </div>
      </footer>
    </>
  );
};

export default Home;
