import React, { useState } from "react";
import { ExamListProps } from "@/app/types/exam";

const ExamList: React.FC<ExamListProps> = ({ exams, onSelectExam }) => {
    const [searchTerm, setSearchTerm] = useState("");

    // Lọc đề thi theo tiêu đề
    const filteredExams = exams.filter((exam) =>
        exam.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <h2 className="mt-5 mb-3">📚 Danh sách đề thi</h2>

            {/* Thanh tìm kiếm */}
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="🔍 Tìm kiếm theo tên đề thi..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <ul className="list-unstyled">
                {filteredExams.length === 0 ? (
                    <li className="text-muted">Không tìm thấy đề thi phù hợp.</li>
                ) : (
                    filteredExams.map((exam) => (
                        <li
                            key={exam._id}
                            onClick={() => onSelectExam(exam)}
                            className="card mb-3 p-3 cursor-pointer"
                            style={{ cursor: "pointer" }}
                        >
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="card-title mb-1">{exam.title}</h5>
                                    <small className="text-muted">
                                        Bắt đầu:{" "}
                                        {new Date(exam.startAt).toLocaleString("vi-VN", {
                                            timeZone: "Asia/Ho_Chi_Minh",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            second: "2-digit",
                                            day: "2-digit",
                                            month: "2-digit",
                                            year: "numeric",
                                        })}
                                    </small>
                                </div>
                                <span
                                    className={`badge ${
                                        exam.status === "Đang diễn ra"
                                            ? "bg-success"
                                            : exam.status === "Sắp diễn ra"
                                            ? "bg-warning text-dark"
                                            : "bg-danger"
                                    }`}
                                >
                                    {exam.status}
                                </span>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </>
    );
};

export default ExamList;
