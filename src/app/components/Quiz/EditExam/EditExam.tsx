import React, { useState } from "react";
import { QuestionExam } from "@/app/types/exam";
import QuestionEditor from "./QuestionEditor";
import { EditExamProps } from "@/app/types/exam";
import { useEditExam } from "@/app/hooks/useEditExam";

const EditExam: React.FC<EditExamProps> = ({ exam, onClose }) => {
  const [title, setTitle] = useState(exam.title);
  const [startAt, setStartAt] = useState(exam.startAt);
  const [questions, setQuestions] = useState<QuestionExam[]>(exam.questions);

  const handleQuestionChange = (
    index: number,
    key: keyof QuestionExam,
    value: string | string[]
  ) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = { ...updatedQuestions[index], [key]: value } as QuestionExam;
    setQuestions(updatedQuestions);
  };

  const { handleSave, handleDelete } = useEditExam(
    exam._id,
    title,
    startAt,
    questions,
    onClose
  );

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
