"use client";
import React from "react";
import { QuizCardProps } from "@/app/types/quiz";

const QuizCard: React.FC<QuizCardProps> = ({ image, title, onClick }) => {
  return (
    <div
      className="card shadow-sm mb-4"
      style={{ width: "18rem", cursor: "pointer" }}
      onClick={onClick}
    >
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

export default QuizCard;
