"use client";
import Image from "next/image";
import HomeContentImage from "../../assets/Home/HomeContent.png";

const HomeContent = () => {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-center position-relative">
        <Image src={HomeContentImage} alt="Home Image" className="img-fluid" />
        <h1 className="position-absolute top-50 start-50 translate-middle bg-success text-light fw-bold p-4 rounded shadow text-center fs-1 w-75">
  HỆ THỐNG QUẢN LÝ NGÂN HÀNG ĐỀ TRẮC NGHIỆM, TỔ CHỨC THI, QUẢN LÝ KẾT QUẢ
</h1>
      </div>
    </div>
  );
};

export default HomeContent;
