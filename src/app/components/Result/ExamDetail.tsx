import { ExamResultProps } from "@/app/types/examResult"; 

const ExamDetail = ({ exam, onClose }: ExamResultProps) => {
  return (
    <div className="mt-4 position-relative">
      {onClose && (
        <button
          className="btn btn-sm btn-danger position-absolute"
          style={{ top: 0, right: 0 }}
          onClick={onClose}
        >
          ✕
        </button>
      )}
      <h4>{exam.title}</h4>
      <p><strong>Score:</strong> {exam.score}</p>
      <p><strong>Submitted At:</strong> {new Date(exam.submittedAt).toLocaleString()}</p>
      <ul className="list-group">
        {exam.questions.map((q, index) => (
          <li
            key={index}
            className={`list-group-item ${
              q.isCorrect ? 'list-group-item-success' : 'list-group-item-danger'
            }`}
          >
            <strong>Q{index + 1}:</strong> {q.question} <br />
            <strong>Selected:</strong> {q.options[q.selectedOption]} <br />
            <strong>Correct:</strong> {q.options[q.correctAnswer]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExamDetail;
