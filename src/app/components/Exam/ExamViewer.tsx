"use client";

import React from "react";
import { ExamViewerProps } from "@/app/types/exam";
import useExam from "@/app/hooks/useExamViewer";
import useExamTimer from "@/app/hooks/useExamTimer";

const optionLabels = ["A", "B", "C", "D"];

const ExamViewer: React.FC<ExamViewerProps> = ({ exam }) => {
  const {
    answers,
    submitted,
    score,
    handleOptionChange,
    handleSubmit,
  } = useExam(exam);

  const remainingTime = useExamTimer(exam.startAt, submitted, handleSubmit);

  return (
    <div>
      <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>
        {exam.title}
      </h3>
      <div className="mb-4 text-left text-sm text-gray-600">
        Thời gian còn lại:{" "}
        <span className="font-semibold text-red-500">
          {Math.floor(remainingTime / 60)
            .toString()
            .padStart(2, "0")}
          :
          {(remainingTime % 60).toString().padStart(2, "0")}
        </span>
      </div>
      <ul className="space-y-6 ps-0 list-unstyled">

        {exam.questions.map((q, idx) => {
          const isCorrect = answers[idx] === q.correctAnswer;

          return (
            <li
              key={idx}
              className={`p-2 border rounded-lg bg-white shadow ${submitted
                ? isCorrect
                  ? "border-green-500"
                  : "border-red-500"
                : ""
                }`}
            >
              <p className="font-medium mb-2 flex items-center justify-between">
                <span>
                  Câu {idx + 1}: {q.question}
                </span>
                {submitted && (
                  <span
                    className={`text-sm font-semibold ${isCorrect ? "text-green-600" : "text-red-600"
                      }`}
                  >
                    {isCorrect ? "✅ Đúng" : "❌ Sai"}
                  </span>
                )}
              </p>

              <ul className="space-y-1 ps-0 list-unstyled">
                {q.options.map((opt, optIdx) => (
                  <li
                    key={optIdx}
                    className="flex items-start gap-2 px-2 py-1 rounded transition hover:bg-gray-100"
                  >
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
                      <strong className="mr-1">{optionLabels[optIdx]}.</strong>{" "}
                      {opt}
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
            className={`px-6 py-2 rounded text-white ${remainingTime <= 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
              }`}
            onClick={handleSubmit}
            disabled={remainingTime <= 0}
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
