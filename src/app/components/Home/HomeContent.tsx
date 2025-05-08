"use client";
import Image from "next/image";
import HomeContentImage from "../../assets/Home/HomeContent.png";
import styles from "@/app/styles/fontsize.module.css" // Import tệp CSS module

const HomeContent = () => {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-center align-items-center position-relative" style={{ minHeight: "60vh" }}>
        <Image src={HomeContentImage} alt="Home Image" className="img-fluid" />
        <h1 className={`${styles.heading} position-absolute top-50 start-50 translate-middle bg-success text-light fw-bold p-4 rounded shadow text-center w-75`}>
          HỆ THỐNG QUẢN LÝ NGÂN HÀNG ĐỀ TRẮC NGHIỆM, TỔ CHỨC THI, QUẢN LÝ KẾT QUẢ
        </h1>
      </div>
    </div>
  );
};

export default HomeContent;
