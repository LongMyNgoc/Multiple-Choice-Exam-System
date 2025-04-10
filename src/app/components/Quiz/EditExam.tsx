import React, { useState } from "react";
import { Question } from "@/app/types/exam";
import QuestionEditor from "./QuestionEditor";
import { EditExamProps } from "@/app/types/exam";

const EditExam: React.FC<EditExamProps> = ({ exam, onClose }) => {
    const [title, setTitle] = useState(exam.title);
    const [startAt, setStartAt] = useState(exam.startAt);
    const [questions, setQuestions] = useState<Question[]>(exam.questions);

    const handleQuestionChange = (index: number, key: keyof Question, value: string | string[]) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index] = { ...updatedQuestions[index], [key]: value } as Question;
        setQuestions(updatedQuestions);
    };

    const handleSave = () => {
        const updatedExam = {
            ...exam,
            title,
            startAt,
            questions
        };
        console.log("📝 Đề đã chỉnh sửa:", updatedExam);
        // Gọi API cập nhật ở đây nếu cần
    };

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h2>📝 Chỉnh sửa đề thi</h2>

            <label><strong>Tên đề:</strong></label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: "100%", marginBottom: "10px" }}
            />

            <label><strong>Bắt đầu:</strong></label>
            <input
                type="datetime-local"
                value={new Date(startAt).toISOString().slice(0, 16)}
                onChange={(e) => setStartAt(new Date(e.target.value).toISOString())}
                style={{ width: "100%", marginBottom: "20px" }}
            />

            <h3>📚 Danh sách câu hỏi</h3>
            {questions.map((q, index) => (
                <QuestionEditor
                    key={index}
                    question={q}
                    index={index}
                    onChange={handleQuestionChange}
                />
            ))}

            <p><strong>Trạng thái:</strong> {exam.status}</p>

            <div style={{ marginTop: "10px" }}>
                <button onClick={handleSave} style={{ marginRight: "10px" }}>
                    💾 Lưu thay đổi
                </button>
                <button onClick={onClose}>❌ Đóng</button>
            </div>
        </div>
    );
};

export default EditExam;
