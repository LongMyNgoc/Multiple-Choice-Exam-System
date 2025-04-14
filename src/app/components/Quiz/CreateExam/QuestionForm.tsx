import { Question } from "@/app/types/createExam";

type QuestionFormProps = {
    index: number;
    data: Question;
    onChange: (updated: Question) => void;
  };

const QuestionForm = ({ index, data, onChange }: QuestionFormProps) => {
  const updateOption = (optIndex: number, value: string) => {
    const newOptions = [...data.options] as [string, string, string, string];
    newOptions[optIndex] = value;
    onChange({ ...data, options: newOptions });
  };

  return (
    <div className="mb-4 border p-3 rounded">
      <h5>Câu hỏi {index + 1}</h5>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Nhập nội dung câu hỏi..."
        value={data.question}
        onChange={(e) => onChange({ ...data, question: e.target.value })}
      />

      {data.options.map((opt, i) => (
        <div key={i} className="input-group mb-2">
          <span className="input-group-text">Đáp án {String.fromCharCode(65 + i)}</span>
          <input
            type="text"
            className="form-control"
            value={opt}
            onChange={(e) => updateOption(i, e.target.value)}
          />
        </div>
      ))}

      <div className="form-group">
        <label>Đáp án đúng:</label>
        <select
          className="form-select"
          value={data.correctAnswer}
          onChange={(e) => onChange({ ...data, correctAnswer: parseInt(e.target.value) })}
        >
          <option value={0}>A</option>
          <option value={1}>B</option>
          <option value={2}>C</option>
          <option value={3}>D</option>
        </select>
      </div>
    </div>
  );
};

export default QuestionForm;
