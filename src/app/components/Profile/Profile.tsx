"use client";

import useUserEmail from "@/app/hooks/useUserEmail";
import { FaUserCircle, FaLock } from "react-icons/fa";
import { useState } from "react";
import ChangePasswordModal from "../Password/ChangePassword/ChangePasswordModal";
import useExamResults from "@/app/hooks/useExamResults";
import ExamResultDetails from "./ExamResultDetails";

const Profile = () => {
  const userEmail = useUserEmail();
  const [showModal, setShowModal] = useState(false);
  const { data: results, loading } = useExamResults(userEmail);
  const [selectedExamId, setSelectedExamId] = useState<string | null>(null);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const selectedExam = results.find((exam) => exam._id === selectedExamId);

  return (
    <div className="container my-3">
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4 p-4 border rounded shadow bg-white">
        <div className="d-flex flex-column align-items-center">
          <FaUserCircle size={100} className="text-success mb-3" />
          <div className="fw-bold fs-5">{userEmail || "Chưa đăng nhập"}</div>
        </div>
        <button className="btn btn-outline-success d-flex align-items-center gap-2 px-4 py-2" onClick={handleShow}>
          <FaLock />
          Đổi mật khẩu
        </button>
      </div>

      <ChangePasswordModal show={showModal} onClose={handleClose} />

      {/* Danh sách kết quả đề thi */}
      <div className="mt-4">
        <h5 className="fw-bold">Đề thi đã làm:</h5>
        {loading && <p>Đang tải...</p>}
        {!loading && results.length === 0 && <p>Chưa có bài thi nào.</p>}
        <ul className="list-group">
          {results.map((exam) => (
            <li
              key={exam._id}
              className="list-group-item list-group-item-action cursor-pointer"
              onClick={() => setSelectedExamId(exam._id)}
            >
              {exam.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Chi tiết bài thi */}
      {selectedExam && (
        <ExamResultDetails
        exam={selectedExam}
        onClose={() => setSelectedExamId(null)} // nút "Đóng"
      />
      )}
    </div>
  );
};

export default Profile;
