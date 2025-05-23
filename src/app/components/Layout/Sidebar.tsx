"use client";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { linkHover } from "@/app/utils/hoverEffects";
import useUserEmail from "@/app/hooks/useUserEmail";
import { getUserRoleByEmail } from "@/app/utils/firestore/getUserRoleByEmail";

interface QuizListProps {
  setSelectedQuiz: (quiz: string | null) => void;
}

const Sidebar: FC<QuizListProps> = ({ setSelectedQuiz }) => {
  const UserEmail = useUserEmail();
  const [role, setRole] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchRole = async () => {
      if (UserEmail) {
        const { role, error } = await getUserRoleByEmail(UserEmail);
        if (role) {
          setRole(role);
        } else {
          console.error("Lỗi khi lấy role:", error);
        }
      }
    };

    fetchRole();
  }, [UserEmail]);

  return (
    <div className="d-flex">
      <div
        className="bg-success text-white vh-100 d-flex flex-column p-3 sticky-top"
        style={{
          padding: "10px",
          width: isSidebarOpen ? "250px" : "80px",
          transition: "width 0.3s",
          overflow: "hidden"
        }}
      >
        {/* Toggle button - My Dashboard */}
        <div
          className="mb-4 text-center"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          style={{ cursor: "pointer" }}
        >
          <i className="bi bi-box-seam fs-3"></i>
          {isSidebarOpen && <h4 className="mt-2">My Dashboard</h4>}
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
            <i className="bi bi-speedometer2 me-2"></i>
            {isSidebarOpen && "Dashboard"}
          </Link>
  
          <Link
            href="/pages/Profile"
            onClick={() => setSelectedQuiz(null)}
            className="list-group-item list-group-item-action bg-transparent text-white d-flex align-items-center fs-4"
            onMouseEnter={(e) => linkHover(e, "in")}
            onMouseLeave={(e) => linkHover(e, "out")}
          >
            <i className="bi bi-person-circle me-2"></i>
            {isSidebarOpen && "Profile"}
          </Link>
  
          <Link
            href="/pages/Exam"
            onClick={() => setSelectedQuiz(null)}
            className="list-group-item list-group-item-action bg-transparent text-white d-flex align-items-center fs-4"
            onMouseEnter={(e) => linkHover(e, "in")}
            onMouseLeave={(e) => linkHover(e, "out")}
          >
            <i className="bi bi-pencil-square me-2"></i>
            {isSidebarOpen && "Exam"}
          </Link>
  
          {role === "admin" && (
            <>
              <Link
                href="/pages/Account"
                onClick={() => setSelectedQuiz(null)}
                className="list-group-item list-group-item-action bg-transparent text-white d-flex align-items-center fs-4"
                onMouseEnter={(e) => linkHover(e, "in")}
                onMouseLeave={(e) => linkHover(e, "out")}
              >
                <i className="bi bi-gear-fill me-2"></i>
                {isSidebarOpen && "Accounts"}
              </Link>
  
              <Link
                href="/pages/Quiz"
                onClick={() => setSelectedQuiz(null)}
                className="list-group-item list-group-item-action bg-transparent text-white d-flex align-items-center fs-4"
                onMouseEnter={(e) => linkHover(e, "in")}
                onMouseLeave={(e) => linkHover(e, "out")}
              >
                <i className="bi bi-plus-circle me-2"></i>
                {isSidebarOpen && "Quiz"}
              </Link>
  
              <Link
                href="/pages/Result"
                onClick={() => setSelectedQuiz(null)}
                className="list-group-item list-group-item-action bg-transparent text-white d-flex align-items-center fs-4"
                onMouseEnter={(e) => linkHover(e, "in")}
                onMouseLeave={(e) => linkHover(e, "out")}
              >
                <i className="bi bi-bar-chart me-2"></i>
                {isSidebarOpen && "Result"}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );  
};

export default Sidebar;
