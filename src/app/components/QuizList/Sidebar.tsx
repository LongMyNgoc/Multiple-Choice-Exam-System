"use client";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { linkHover } from "@/app/utils/hoverEffects";
import { QuizListProps } from "@/app/types/quizList"; 
import useUserEmail from "@/app/hooks/useUserEmail";
import { getUserRoleByEmail } from "@/app/utils/firestore/getUserRoleByEmail";

const Sidebar: FC<QuizListProps> = ({ setSelectedQuiz }) => {
  const UserEmail = useUserEmail();
  const [role, setRole] = useState<string | null>(null);

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
            href="/pages/Profile"
            onClick={() => setSelectedQuiz(null)}
            className="list-group-item list-group-item-action bg-transparent text-white d-flex align-items-center fs-4"
            onMouseEnter={(e) => linkHover(e, "in")}
            onMouseLeave={(e) => linkHover(e, "out")}
          >
            <i className="bi bi-person-circle me-2"></i> Profile
          </Link>
          <Link
                href="/pages/Exam"
                onClick={() => setSelectedQuiz(null)}
                className="list-group-item list-group-item-action bg-transparent text-white d-flex align-items-center fs-4"
                onMouseEnter={(e) => linkHover(e, "in")}
                onMouseLeave={(e) => linkHover(e, "out")}
              >
                <i className="bi bi-plus-circle me-2"></i> Exam
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
                <i className="bi bi-gear-fill me-2"></i> Accounts
              </Link>
              <Link
                href="/pages/Quiz"
                onClick={() => setSelectedQuiz(null)}
                className="list-group-item list-group-item-action bg-transparent text-white d-flex align-items-center fs-4"
                onMouseEnter={(e) => linkHover(e, "in")}
                onMouseLeave={(e) => linkHover(e, "out")}
              >
                <i className="bi bi-plus-circle me-2"></i> Quiz
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
