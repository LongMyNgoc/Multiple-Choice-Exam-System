import React, { useState } from "react";
import { Question } from "@/app/types/exam";
import QuestionEditor from "./QuestionEditor";
import { EditExamProps } from "@/app/types/exam";

const EditExam: React.FC<EditExamProps> = ({ exam, onClose }) => {
  const [title, setTitle] = useState(exam.title);
  const [startAt, setStartAt] = useState(exam.startAt);
  const [questions, setQuestions] = useState<Question[]>(exam.questions);

  const handleQuestionChange = (
    index: number,
    key: keyof Question,
    value: string | string[]
  ) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = { ...updatedQuestions[index], [key]: value } as Question;
    setQuestions(updatedQuestions);
  };

  const handleSave = () => {
    const updatedExam = {
      ...exam,
      title,
      startAt,
      questions,
    };
    console.log("📝 Đề đã chỉnh sửa:", updatedExam);
    // Gọi API cập nhật ở đây nếu cần
  };

  const handleDelete = () => {
    if (confirm("Bạn có chắc chắn muốn xóa đề này không?")) {
      console.log("🗑️ Đề đã bị xóa:", exam.title);
      // Gọi API xóa nếu cần
      onClose(); // Đóng sau khi xóa
    }
  };

  return (
    <div className="card p-4">
      {/* Nút Delete ở góc trên bên phải */}
      <button
        onClick={handleDelete}
        className="btn btn-danger btn-sm position-absolute top-0 end-0 m-3"
      >
        🗑️ Xóa đề
      </button>

      <h2>📝 Chỉnh sửa đề thi</h2>

      <div className="mb-3">
        <label className="form-label"><strong>Tên đề:</strong></label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label"><strong>Bắt đầu:</strong></label>
        <input
          type="datetime-local"
          value={new Date(startAt).toISOString().slice(0, 16)}
          onChange={(e) => setStartAt(new Date(e.target.value).toISOString())}
          className="form-control"
        />
      </div>

      <h4 className="mb-3">📚 Danh sách câu hỏi</h4>
      {questions.map((q, index) => (
        <QuestionEditor
          key={index}
          question={q}
          index={index}
          onChange={handleQuestionChange}
        />
      ))}

      <p className="mt-3">
        <strong>Trạng thái:</strong> {exam.status}
      </p>

      <div className="mt-3">
        <button onClick={handleSave} className="btn btn-primary me-2">
          💾 Lưu thay đổi
        </button>
        <button onClick={onClose} className="btn btn-secondary">
          ❌ Đóng
        </button>
      </div>
    </div>
  );
};

export default EditExam;
