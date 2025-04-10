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
        <div className="card mb-3">
            <div className="card-body">
                <label className="form-label">
                    <strong>Câu hỏi {index + 1}:</strong>
                </label>
                <input
                    type="text"
                    className="form-control mb-3"
                    value={question.question}
                    onChange={(e) => onChange(index, "question", e.target.value)}
                />

                <div className="mb-3">
                    {question.options.map((opt, i) => (
                        <div className="input-group mb-2" key={i}>
                            <span className="input-group-text">{optionLabels[i]}.</span>
                            <input
                                type="text"
                                className="form-control"
                                value={opt}
                                onChange={(e) => handleOptionChange(i, e.target.value)}
                            />
                        </div>
                    ))}
                </div>

                <label className="form-label">✅ Đáp án đúng:</label>
                <input
                    type="text"
                    className="form-control"
                    value={question.correctAnswer}
                    onChange={(e) => onChange(index, "correctAnswer", e.target.value)}
                />
            </div>
        </div>
    );
};

export default QuestionEditor;
