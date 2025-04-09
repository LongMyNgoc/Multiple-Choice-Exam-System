"use client";

import React, { useState } from "react";
import { ExamViewerProps } from "@/app/types/exam";
import useUserEmail from "@/app/hooks/useUserEmail";

const optionLabels = ["A", "B", "C", "D"];

const ExamViewer: React.FC<ExamViewerProps> = ({ exam, onBack }) => {
    const [answers, setAnswers] = useState<{ [key: number]: number }>({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState<number | null>(null);
    const UserEmail = useUserEmail();

    const handleOptionChange = (questionIndex: number, optionIndex: number) => {
        setAnswers({ ...answers, [questionIndex]: optionIndex });
    };

    const handleSubmit = () => {
        let correct = 0;
        exam.questions.forEach((q, i) => {
            if (answers[i] === q.correctAnswer) correct++;
        });
        setScore(correct);
        setSubmitted(true);

        const submissionData = {
            userEmail: UserEmail,
            title: exam.title,
            questions: exam.questions.map((q, i) => ({
                question: q.question,
                options: q.options, // <-- thêm dòng này
                selectedOption: answers[i],
                correctAnswer: q.correctAnswer,
                isCorrect: answers[i] === q.correctAnswer,
            })),
            score: correct,
            submittedAt: new Date().toISOString(),
        };

        fetch("http://localhost:3001/exam-result", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(submissionData),
        })
            .then((res) => res.json())
            .then((data) => console.log("Saved result:", data))
            .catch((err) => console.error("Save failed:", err));
    };

    return (
        <div>
            <button
                onClick={onBack}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                ← Quay lại
            </button>

            <h3 className="text-2xl font-bold mb-4">{exam.title}</h3>
            <ul className="space-y-6">
                {exam.questions.map((q, idx) => {
                    const isCorrect = answers[idx] === q.correctAnswer;
                    return (
                        <li
                            key={idx}
                            className={`p-4 border rounded-lg bg-white shadow ${submitted ? (isCorrect ? "border-green-500" : "border-red-500") : ""
                                }`}
                        >
                            <p className="font-medium mb-2 flex items-center justify-between">
                                <span>
                                    Câu {idx + 1}: {q.question}
                                </span>
                                {submitted && (
                                    <span className={`text-sm font-semibold ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                                        {isCorrect ? "✅ Đúng" : "❌ Sai"}
                                    </span>
                                )}
                            </p>

                            <ul className="space-y-1">
                                {q.options.map((opt, optIdx) => (
                                    <li key={optIdx} className="flex items-start gap-3 px-2 py-1 rounded transition hover:bg-gray-100">
                                        <input
                                            type="radio"
                                            name={`question-${idx}`}
                                            value={optIdx}
                                            checked={answers[idx] === optIdx}
                                            onChange={() => handleOptionChange(idx, optIdx)}
                                            className="mt-1 accent-blue-500 shrink-0"
                                            disabled={submitted}
                                        />
                                        <span className="text-base leading-relaxed">
                                            <strong className="mr-1">{optionLabels[optIdx]}.</strong> {opt}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    );
                })}
            </ul>

            {!submitted ? (
                <div className="mt-6 text-center">
                    <button
                        className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                        onClick={handleSubmit}
                    >
                        ✅ Nộp bài
                    </button>
                </div>
            ) : (
                <div className="mt-6 text-center text-lg font-semibold text-green-700">
                    🎉 Bạn làm đúng {score}/{exam.questions.length} câu
                </div>
            )}
        </div>
    );
};

export default ExamViewer;
