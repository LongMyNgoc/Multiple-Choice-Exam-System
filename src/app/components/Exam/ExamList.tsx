"use client";

import { useState } from "react";
import { ExamWithStatus } from "@/app/types/exam";
import ExamViewer from "./ExamViewer";
import useExamList from "@/app/hooks/useExamList";

const ExamList = () => {
  const { exams, isClickable } = useExamList();
  const [selectedExam, setSelectedExam] = useState<ExamWithStatus | null>(null);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">📚 Danh sách đề thi</h2>

      {!selectedExam ? (
        <ul className="space-y-4">
          {exams.map((exam) => {
            const clickable = isClickable(exam);

            return (
              <li
                key={exam._id}
                className={`border rounded-lg p-4 shadow transition ${
                  clickable
                    ? "cursor-pointer hover:shadow-md hover:bg-gray-100"
                    : "opacity-50 cursor-not-allowed"
                }`}
                onClick={() => clickable && setSelectedExam(exam)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{exam.title}</h3>
                  <span
                    className={`text-sm px-2 py-1 rounded ${
                      exam.status === "Đang diễn ra"
                        ? "bg-green-100 text-green-700"
                        : exam.status === "Sắp diễn ra"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {exam.status}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <>
        <button
        onClick={()=> setSelectedExam(null)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ← Quay lại
      </button>
        <ExamViewer exam={selectedExam} />
          </>
      )}
    </div>
  );
};

export default ExamList;
