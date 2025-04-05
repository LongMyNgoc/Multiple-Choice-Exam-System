"use client";
import { FC } from "react";
import Link from "next/link";
import { linkHover } from '@/app/utils/hoverEffects'

interface QuizListProps {
  setSelectedQuiz: (quiz: string | null) => void;
}

const Sidebar:FC<QuizListProps> = ({ setSelectedQuiz }) => {
  return (
    <div className="d-flex">
      <div
        className="bg-success text-white vh-100 d-flex flex-column p-3 sticky-top"
        style={{ padding: "10px" }}
      >
        {/* Logo / Brand */}
        <div className="mb-4 text-center">
          <i className="bi bi-box-seam fs-3"></i>
          <h4 className="mt-2">My Dashboard</h4>
        </div>

        {/* Navigation Links */}
        <div className="list-group list-group-flush flex-grow-1">
          <Link
            href="/pages/QuizList"
            onClick={() => setSelectedQuiz(null)}
            className="list-group-item list-group-item-action bg-transparent text-white d-flex align-items-center fs-4"
            onMouseEnter={(e) => linkHover(e, "in")}
            onMouseLeave={(e) => linkHover(e, "out")}
          >
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </Link>

          <Link
            href="/profile"
            className="list-group-item list-group-item-action bg-transparent text-white d-flex align-items-center fs-4"
            onMouseEnter={(e) => linkHover(e, "in")}
            onMouseLeave={(e) => linkHover(e, "out")}
          >
            <i className="bi bi-person-circle me-2"></i> Profile
          </Link>

          <Link
            href="/contact"
            className="list-group-item list-group-item-action bg-transparent text-white d-flex align-items-center fs-4"
            onMouseEnter={(e) => linkHover(e, "in")}
            onMouseLeave={(e) => linkHover(e, "out")}
          >
            <i className="bi bi-envelope-fill me-2"></i> Contact
          </Link>

          <Link
            href="/settings"
            className="list-group-item list-group-item-action bg-transparent text-white d-flex align-items-center fs-4"
            onMouseEnter={(e) => linkHover(e, "in")}
            onMouseLeave={(e) => linkHover(e, "out")}
          >
            <i className="bi bi-gear-fill me-2"></i> Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
