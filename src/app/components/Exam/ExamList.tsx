"use client";

import { useEffect, useState } from "react";
import { ExamType } from "@/app/types/exam";
import ExamViewer from "./ExamViewer";
import dayjs from "dayjs";
import { ExamStatus, ExamWithStatus } from "@/app/types/exam";

const getExamStatus = (startAt: string): ExamStatus => {
  const now = dayjs();
  const start = dayjs(startAt);
  const end = start.add(1, "hour");

  if (now.isBefore(start)) return "Sắp diễn ra";
  if (now.isAfter(end)) return "Đã kết thúc";
  return "Đang diễn ra";
};

const ExamList = () => {
  const [exams, setExams] = useState<ExamWithStatus[]>([]);
  const [selectedExam, setSelectedExam] = useState<ExamWithStatus | null>(null);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const res = await fetch("http://localhost:3001/exams/all");
        const data: ExamType[] = await res.json();

        const examsWithStatus: ExamWithStatus[] = data.map((exam) => ({
          ...exam,
          status: getExamStatus(exam.startAt),
        }));

        const sortedExams = examsWithStatus.sort((a, b) => {
          const priority: Record<ExamStatus, number> = {
            "Đang diễn ra": 0,
            "Sắp diễn ra": 1,
            "Đã kết thúc": 2,
          };
          return priority[a.status] - priority[b.status];
        });

        setExams(sortedExams);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách đề thi:", error);
      }
    };

    fetchExams();
  }, []);

  const isClickable = (exam: ExamWithStatus) => {
    const now = dayjs();
    const start = dayjs(exam.startAt);
    const end = start.add(1, "hour");
    return now.isAfter(start) && now.isBefore(end);
  };

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
        <ExamViewer exam={selectedExam} onBack={() => setSelectedExam(null)} />
      )}
    </div>
  );
};

export default ExamList;
