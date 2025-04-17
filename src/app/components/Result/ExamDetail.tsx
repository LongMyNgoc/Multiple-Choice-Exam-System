import { ExamResultProps } from "@/app/types/examResult"; 

const ExamDetail = ({ exam, onClose }: ExamResultProps) => {
  return (
    <div className="mt-4">
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
      {onClose && (
        <button className="btn btn-secondary mt-3" onClick={onClose}>
          Đóng
        </button>
      )}
    </div>
  );
};

export default ExamDetail;
