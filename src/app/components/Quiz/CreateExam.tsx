"use client";
import { useState } from "react";
import QuestionForm from "./QuestionForm";
import { Question } from "@/app/types/quiz"; // hoặc bạn có thể khai báo trực tiếp phía trên

const CreateExam = () => {
  const [examTitle, setExamTitle] = useState<string>("");
  const [startAt, setStartAt] = useState<string>("");
  const [questions, setQuestions] = useState<Question[]>(
    Array.from({ length: 20 }, () => ({
      question: "",
      options: ["", "", "", ""] as [string, string, string, string],
      correctAnswer: 0,
    }))
  );

  const handleQuestionChange = (index: number, updatedQuestion: Question) => {
    const newQuestions = [...questions];
    newQuestions[index] = updatedQuestion;
    setQuestions(newQuestions);
  };

  const handleSubmit = () => {
    if (!examTitle.trim()) {
      alert("Vui lòng nhập tên bộ đề!");
      return;
    }
  
    if (!startAt) {
      alert("Vui lòng chọn thời gian mở đề!");
      return;
    }

    const startTime = new Date(startAt);
const now = new Date();

if (startTime < now) {
  alert("Thời gian mở đề không được nằm trong quá khứ!");
  return;
}
  
    const isValid = questions.every(
      (q) => q.question.trim() !== "" && q.options.every((opt) => opt.trim() !== "")
    );
  
    if (!isValid) {
      alert("Vui lòng điền đầy đủ thông tin cho tất cả các câu hỏi!");
      return;
    }
  
    const examData = {
      title: examTitle,
      startAt: new Date(startAt).toISOString(), // 🔥 thêm dòng này
      questions: questions,
      createdAt: new Date().toISOString(),
    };
  
    console.log("Exam Submitted:", examData);
    alert("Đã tạo bộ đề thành công!");
  
    // TODO: gửi examData lên backend hoặc Firestore
  };  
  const handleFileImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
  
    const text = await file.text();
    try {
      const parsed = JSON.parse(text);
  
      if (!parsed.title || !parsed.startAt || !Array.isArray(parsed.questions)) {
        alert("File JSON không đúng định dạng!");
        return;
      }
  
      setExamTitle(parsed.title);
      setStartAt(parsed.startAt);
      setQuestions(parsed.questions);
    } catch (err) {
      alert("Đã xảy ra lỗi khi đọc file JSON.");
    }
  };  

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Tạo bộ đề thi trắc nghiệm (20 câu)</h2>

      <div className="mb-4">
        <label className="form-label">Tên bộ đề:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nhập tên bộ đề..."
          value={examTitle}
          onChange={(e) => setExamTitle(e.target.value)}
        />
      </div>

      <div className="mb-4">
  <label className="form-label">Thời gian mở đề:</label>
  <input
    type="datetime-local"
    className="form-control"
    value={startAt}
    onChange={(e) => setStartAt(e.target.value)}
  />
</div>

<div className="mb-4">
  <label className="form-label">Import đề từ file JSON:</label>
  <input
    type="file"
    accept=".json"
    className="form-control"
    onChange={(e) => handleFileImport(e)}
  />
</div>


      {questions.map((q, idx) => (
        <QuestionForm
          key={idx}
          index={idx}
          data={q}
          onChange={(updated) => handleQuestionChange(idx, updated)}
        />
      ))}

      <button className="btn btn-success mt-3" onClick={handleSubmit}>
        Tạo bộ đề
      </button>
    </div>
  );
};

export default CreateExam;
