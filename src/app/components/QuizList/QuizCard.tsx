"use client";
import React from "react";
import Image from "next/image"; // Import Image từ next/image
import { QuizCardProps } from "@/app/types/quizList";

const QuizCard: React.FC<QuizCardProps> = ({ image, title, onClick }) => {
  return (
    <div
      className="card shadow-sm mb-4"
      style={{ width: "18rem", cursor: "pointer" }}
      onClick={onClick}
    >
      <div style={{ position: "relative", width: "100%", height: "200px" }}>
        <Image
          src={image}
          alt={title}
          className="card-img-top"
          layout="fill" // Đảm bảo ảnh chiếm toàn bộ không gian của div
          objectFit="cover" // Tương tự như 'objectFit: cover' trong CSS
        />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

export default QuizCard;
