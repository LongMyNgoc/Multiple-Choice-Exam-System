"use client";
import { useState } from "react";
import { quizDevOps } from "@/app/lib/data/DevOps";
import { QuizQuestion } from "@/app/types/quizData";

const optionLabels = ["A", "B", "C", "D"];

const DevOps = () => {
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (questionId: number, selected: string) => {
    setUserAnswers({ ...userAnswers, [questionId]: selected });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const getScore = () => {
    return quizDevOps.reduce((score, q) => {
      return userAnswers[q.id] === q.correctAnswer ? score + 1 : score;
    }, 0);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-5 fw-bold text-primary">🧠 Đề thi trắc nghiệm: DevOps</h2>

      {quizDevOps.map((question: QuizQuestion) => (
        <div key={question.id} className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">
              Câu {question.id}: {question.question}
            </h5>
            <div className="row mt-3">
              {question.options.map((option, i) => {
                const isSelected = userAnswers[question.id] === option;
                const isCorrect = option === question.correctAnswer;

                const getOptionClass = () => {
                  if (!submitted) return "border rounded p-2";
                  if (isCorrect) return "border border-success bg-success bg-opacity-10 rounded p-2";
                  if (isSelected && !isCorrect) return "border border-danger bg-danger bg-opacity-10 rounded p-2";
                  return "border rounded p-2";
                };

                return (
                  <div className="col-md-6 mb-2" key={option}>
                    <label className={getOptionClass()} style={{ display: "block", cursor: "pointer" }}>
                      <input
                        type="radio"
                        className="form-check-input me-2"
                        name={`question-${question.id}`}
                        value={option}
                        disabled={submitted}
                        checked={isSelected}
                        onChange={() => handleOptionChange(question.id, option)}
                      />
                      <strong>{optionLabels[i]}.</strong> {option}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="btn btn-primary px-4 py-2 fs-5 mt-3"
        >
          Nộp bài
        </button>
      ) : (
        <div className="alert alert-success mt-4 fs-5 fw-bold" role="alert">
          ✅ Bạn đã làm đúng {getScore()} / {quizDevOps.length} câu.
        </div>
      )}
    </div>
  );
};

export default DevOps;
