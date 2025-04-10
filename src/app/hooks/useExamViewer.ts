import { useState } from "react";
import { ExamViewerProps } from "@/app/types/exam";
import useUserEmail from "@/app/hooks/useUserEmail";

const useExamViewer = (exam: ExamViewerProps["exam"]) => {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const userEmail = useUserEmail();

  const handleOptionChange = (questionIndex: number, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }));
  };

  const handleSubmit = () => {
    let correct = 0;
    exam.questions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) correct++;
    });

    setScore(correct);
    setSubmitted(true);

    const submissionData = {
      userEmail,
      title: exam.title,
      questions: exam.questions.map((q, i) => ({
        question: q.question,
        options: q.options,
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

  return {
    answers,
    submitted,
    score,
    handleOptionChange,
    handleSubmit,
  };
};

export default useExamViewer;
