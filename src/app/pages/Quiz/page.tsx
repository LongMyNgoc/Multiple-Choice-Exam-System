"use client";
import { useState } from "react";
import Topbar from "@/app/components/Layout/Topbar";
import Sidebar from "@/app/components/Layout/Sidebar";
import Quiz from "@/app/components/Quiz/ExamList/Quiz";

const QuizPage = () => {
  const [, setSelectedQuiz] = useState<string | null>(null);

  return (
    <div className="d-flex flex-column vh-100">
      {/* Topbar */}
      <Topbar />

      {/* Nội dung chính */}
      <div className="d-flex flex-grow-1 gap-2">
        {/* Sidebar bên trái */}
        <Sidebar setSelectedQuiz={setSelectedQuiz}/>

        {/* Vùng hiển thị QuizList */}
        <div className="flex-grow-1 p-3 ">
          <Quiz />
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
