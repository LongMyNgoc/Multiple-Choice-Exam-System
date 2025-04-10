"use client";
import ExamForm from "./ExamForm";
import QuestionForm from "./QuestionForm";
import useCreateExam from "@/app/hooks/useCreateExam";

const CreateExam = () => {
  const {
    examTitle,
    setExamTitle,
    startAt,
    setStartAt,
    questions,
    handleQuestionChange,
    handleFileImport,
    handleSubmit,
  } = useCreateExam();

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Tạo bộ đề thi trắc nghiệm (20 câu)</h2>

      <ExamForm
        examTitle={examTitle}
        setExamTitle={setExamTitle}
        startAt={startAt}
        setStartAt={setStartAt}
        handleFileImport={handleFileImport}
      />

      {questions.map((q, idx) => (
        <QuestionForm
          key={idx}
          index={idx}
          data={q}
          onChange={(updated) => handleQuestionChange(idx, updated)}
        />
      ))}

      <button className="btn btn-success mt-3" onClick={handleSubmit}>
        Tạo bộ đề
      </button>
    </div>
  );
};

export default CreateExam;
