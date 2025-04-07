"use client";
import { useState } from "react";
import Topbar from "@/app/components/QuizList/Topbar";
import Sidebar from "@/app/components/QuizList/Sidebar";
import Account from "@/app/components/Account/Account";

const QuizListPage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);

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
          <Account />
        </div>
      </div>
    </div>
  );
};

export default QuizListPage;
