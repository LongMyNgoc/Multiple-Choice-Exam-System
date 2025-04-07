"use client";
import { FC } from "react";
import QuizCard from "./QuizCard";
import { QuizListProps } from "@/app/types/quiz";
import LTCB_Cplusplus from "@/app/components/Data/LTCB_C++";
import { quizListData } from "@/app/data/quizListData"; // import mảng quiz

const QuizList: FC<QuizListProps> = ({ selectedQuiz, setSelectedQuiz }) => {
  if (selectedQuiz === "ltcbc") {
    return <LTCB_Cplusplus />;
  }

  return (
    <div className="d-flex flex-wrap gap-3">
      {quizListData.map((quiz) => (
        <QuizCard
          key={quiz.id}
          image={quiz.image}
          title={quiz.title}
          onClick={() => setSelectedQuiz(quiz.id)}
        />
      ))}
    </div>
  );
};

export default QuizList;
