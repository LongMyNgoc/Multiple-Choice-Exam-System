// components/ExamResultDetails.tsx
import React from "react";
import moment from "moment";

interface Question {
  question: string;
  options: string[];
  selectedOption: number;
  correctAnswer: number;
  isCorrect: boolean;
}

interface ExamResult {
  _id: string;
  title: string;
  questions: Question[];
  score: number;
  submittedAt: string;
}

interface Props {
  exam: ExamResult;
  onClose?: () => void; // optional: để đóng lại
}

const ExamResultDetails: React.FC<Props> = ({ exam, onClose }) => {
  return (
    <div className="mt-3 p-4 border rounded bg-light shadow-sm">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="fw-bold mb-3">Kết quả bài: {exam.title}</h5>
        {onClose && (
          <button className="btn btn-sm btn-outline-secondary" onClick={onClose}>
            Đóng
          </button>
        )}
      </div>

      <p>Điểm: <strong>{exam.score}</strong></p>
      <p>Thời gian nộp: <strong>{moment(exam.submittedAt).format("HH:mm DD/MM/YYYY")}</strong></p>

      <div>
        <h6 className="mt-3">Chi tiết câu hỏi:</h6>
        <ol>
          {exam.questions.map((q, idx) => (
            <li key={idx} className="mb-2">
              <div><strong>{q.question}</strong></div>
              <ul>
                {q.options.map((opt, i) => (
                  <li
                    key={i}
                    style={{
                      fontWeight: i === q.correctAnswer ? "bold" : "normal",
                      color:
                        i === q.selectedOption
                          ? i === q.correctAnswer
                            ? "green"
                            : "red"
                          : "inherit",
                    }}
                  >
                    {opt} {i === q.selectedOption && " (Bạn chọn)"} {i === q.correctAnswer && " ✓"}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ExamResultDetails;
