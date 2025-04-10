import { useState } from "react";
import { toast } from "react-toastify";
import { Question } from "@/app/types/quiz";

const useCreateExam = () => {
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

  const handleFileImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const text = await file.text();
    try {
      const parsed = JSON.parse(text);

      if (!parsed.title || !parsed.startAt || !Array.isArray(parsed.questions)) {
        toast.error("File JSON không đúng định dạng!");
        return;
      }

      setExamTitle(parsed.title);
      setStartAt(parsed.startAt);
      setQuestions(parsed.questions);
      toast.success("Đã nhập dữ liệu từ file JSON thành công!");
    } catch (err) {
      toast.error("Đã xảy ra lỗi khi đọc file JSON.");
    }
  };

  const handleSubmit = async () => {
    if (!examTitle.trim()) return toast.error("Vui lòng nhập tên bộ đề!");
    if (!startAt) return toast.error("Vui lòng chọn thời gian mở đề!");
    const startTime = new Date(startAt);
    const now = new Date();
    if (startTime < now) return toast.error("Thời gian mở đề không được nằm trong quá khứ!");

    const isValid = questions.every(
      (q) => q.question.trim() && q.options.every((opt) => opt.trim())
    );
    if (!isValid) return toast.error("Vui lòng điền đầy đủ thông tin cho tất cả các câu hỏi!");

    const examData = {
      title: examTitle,
      startAt: new Date(startAt).toISOString(),
      createdAt: new Date().toISOString(),
      questions,
    };

    try {
      const res = await fetch("http://localhost:3001/exams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(examData),
      });

      if (!res.ok) throw new Error("Không thể tạo bộ đề!");

      toast.success("Đã tạo bộ đề thành công!");
    } catch (err) {
      toast.error("Lỗi khi gửi dữ liệu lên server!");
    }
  };

  return {
    examTitle,
    setExamTitle,
    startAt,
    setStartAt,
    questions,
    handleQuestionChange,
    handleFileImport,
    handleSubmit,
  };
};

export default useCreateExam;
