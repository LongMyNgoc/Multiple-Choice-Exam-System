"use client";
import { FC } from "react";
import QuizCard from "./QuizCard";
import { QuizListProps } from "@/app/types/quiz"
import LTCB_Cplusplus from "@/app/components/Data/LTCB_C++"; // import component bài quiz C++

const QuizList: FC<QuizListProps> = ({ selectedQuiz, setSelectedQuiz }) => {
  if (selectedQuiz === "ltcbc") {
    return <LTCB_Cplusplus />;
  }

  return (
    <div className="d-flex flex-wrap gap-3">
      <QuizCard
        image="/assets/Data/C++.png"
        title="Lập trình C++ cơ bản"
        onClick={() => setSelectedQuiz("ltcbc")}
      />
      <QuizCard
        image="/assets/Data/C++.png"
        title="Lập trình C++ nâng cao"
        onClick={() => setSelectedQuiz("ltncc")}
      />
      <QuizCard
        image="/assets/Data/C++.png"
        title="Lập trình C++ OOP"
        onClick={() => setSelectedQuiz("ltcoop")}
      />
      <QuizCard
        image="/assets/Data/CTDL_GT.jpg"
        title="Cấu trúc dữ liệu"
        onClick={() => setSelectedQuiz("ctdl")}
      />
      <QuizCard
        image="/assets/Data/CTDL_GT.jpg"
        title="Phân tích thiết kế giải thuật"
        onClick={() => setSelectedQuiz("pttk")}
      />
      <QuizCard
        image="/assets/Data/AI.jpg"
        title="Trí tuệ nhân tạo"
        onClick={() => setSelectedQuiz("ttnt")}
      />
      <QuizCard
        image="/assets/Data/CNJava.jpeg"
        title="Công nghệ Java"
        onClick={() => setSelectedQuiz("cnjava")}
      />
      <QuizCard
        image="/assets/Data/CNNet.jpg"
        title="Công nghệ NET"
        onClick={() => setSelectedQuiz("cnnet")}
      />
      <QuizCard
        image="/assets/Data/CNPM.png"
        title="Công nghệ phần mềm"
        onClick={() => setSelectedQuiz("cnpm")}
      />
      <QuizCard
        image="/assets/Data/CNWeb.jpeg"
        title="Công nghệ Web"
        onClick={() => setSelectedQuiz("cnweb")}
      />
      <QuizCard
        image="/assets/Data/ComputerAssembly.jpg"
        title="Lắp ráp, cài đặt và bảo trì máy tính"
        onClick={() => setSelectedQuiz("computerassembly")}
      />
      <QuizCard
        image="/assets/Data/CSDL.png"
        title="Cơ sở dữ liệu"
        onClick={() => setSelectedQuiz("csdl")}
      />
      <QuizCard
        image="/assets/Data/DevOps.png"
        title="DevOps"
        onClick={() => setSelectedQuiz("devops")}
      />
      <QuizCard
        image="/assets/Data/DHMT.jpeg"
        title="Đồ họa máy tính"
        onClick={() => setSelectedQuiz("dhmt")}
      />
      <QuizCard
        image="/assets/Data/DTDM.png"
        title="Điện toán đám mây"
        onClick={() => setSelectedQuiz("dtdm")}
      />
      <QuizCard
        image="/assets/Data/HDH.jpg"
        title="Hệ điều hành"
        onClick={() => setSelectedQuiz("hdh")}
      />
      <QuizCard
        image="/assets/Data/HTVTT.jpeg"
        title="Hệ tư vấn thông tin"
        onClick={() => setSelectedQuiz("htvtt")}
      />
      <QuizCard
        image="/assets/Data/LTDT.jpg"
        title="Lý thuyết đồ thị"
        onClick={() => setSelectedQuiz("ltdt")}
      />
      <QuizCard
        image="/assets/Data/PHP.png"
        title="Lập trình PHP"
        onClick={() => setSelectedQuiz("ltphp")}
      />
      <QuizCard
        image="/assets/Data/LTWindow.jpeg"
        title="Lập trình Window"
        onClick={() => setSelectedQuiz("ltwindow")}
      />
      <QuizCard
        image="/assets/Data/ML.jpeg"
        title="Học Máy"
        onClick={() => setSelectedQuiz("ml")}
      />
      <QuizCard
        image="/assets/Data/MMT.jpg"
        title="Mạng máy tính"
        onClick={() => setSelectedQuiz("mmt")}
      />
      <QuizCard
        image="/assets/Data/PTTKHDT.jpeg"
        title="Phân tích thiết kế hướng đối tượng"
        onClick={() => setSelectedQuiz("pttkhdt")}
      />
      <QuizCard
        image="/assets/Data/React-Native.png"
        title="Phát triển ứng dụng trên thiết bị di động"
        onClick={() => setSelectedQuiz("reactnative")}
      />
      <QuizCard
        image="/assets/Data/TKWeb.jpg"
        title="Thiết kế Web"
        onClick={() => setSelectedQuiz("tkweb")}
      />
      <QuizCard
        image="/assets/Data/Unity.png"
        title="Phát triển ứng dụng trò chơi"
        onClick={() => setSelectedQuiz("unity")}
      />
    </div>
  );
};

export default QuizList;
