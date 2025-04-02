"use client";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="bg-success text-white vh-100 position-fixed position-sticky"
        style={{ padding: "10px" }}
      >
        <div className="list-group list-group-flush">
          <Link href="/" className="list-group-item list-group-item-action bg-transparent text-white">
            Trang chủ
          </Link>
          <Link href="/about" className="list-group-item list-group-item-action bg-transparent text-white">
            Giới thiệu
          </Link>
          <Link href="/services" className="list-group-item list-group-item-action bg-transparent text-white">
            Dịch vụ
          </Link>
          <Link href="/contact" className="list-group-item list-group-item-action bg-transparent text-white">
            Liên hệ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
