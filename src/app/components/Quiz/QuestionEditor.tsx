import React from "react";
import { Question } from "@/app/types/exam";

interface QuestionEditorProps {
    question: Question;
    index: number;
    onChange: (index: number, key: keyof Question, value: string | string[]) => void;
}

const optionLabels = ["A", "B", "C", "D"];

const QuestionEditor: React.FC<QuestionEditorProps> = ({ question, index, onChange }) => {
    const handleOptionChange = (optionIndex: number, value: string) => {
        const updatedOptions = [...question.options];
        updatedOptions[optionIndex] = value;
        onChange(index, "options", updatedOptions);
    };

    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                marginBottom: "10px",
                backgroundColor: "#f9f9f9"
            }}
        >
            <label><strong>Câu hỏi {index + 1}:</strong></label>
            <input
                type="text"
                value={question.question}
                onChange={(e) => onChange(index, "question", e.target.value)}
                style={{ width: "100%", marginBottom: "10px" }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginBottom: "10px" }}>
                {question.options.map((opt, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "20px" }}>{optionLabels[i]}.</span>
                        <input
                            type="text"
                            value={opt}
                            onChange={(e) => handleOptionChange(i, e.target.value)}
                            style={{ flex: 1 }}
                        />
                    </div>
                ))}
            </div>

            <label>✅ Đáp án đúng:</label>
            <input
                type="text"
                value={question.correctAnswer}
                onChange={(e) => onChange(index, "correctAnswer", e.target.value)}
                style={{ width: "100%" }}
            />
        </div>
    );
};

export default QuestionEditor;
