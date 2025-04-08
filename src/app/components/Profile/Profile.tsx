"use client";

import useUserEmail from "@/app/hooks/useUserEmail";
import { FaUserCircle, FaLock } from "react-icons/fa";
import { useState } from "react";
import ChangePasswordModal from "../Password/ChangePassword/ChangePasswordModal"; // Đảm bảo đường dẫn đúng

const Profile = () => {
  const userEmail = useUserEmail();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="container my-3">
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4 p-4 border rounded shadow bg-white">
        {/* Left side: Avatar + Email */}
        <div className="d-flex flex-column align-items-center">
          <FaUserCircle size={100} className="text-success mb-3" />
          <div className="fw-bold fs-5">{userEmail || "Chưa đăng nhập"}</div>
        </div>

        {/* Right side: Change password button */}
        <button className="btn btn-outline-success d-flex align-items-center gap-2 px-4 py-2" onClick={handleShow}>
          <FaLock />
          Đổi mật khẩu
        </button>
      </div>

      {/* Include the ChangePasswordModal component */}
      <ChangePasswordModal
        show={showModal}
        onClose={handleClose}
      />
    </div>
  );
};

export default Profile;
