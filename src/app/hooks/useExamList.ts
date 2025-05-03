// useExamList.ts
import { useEffect, useState } from "react";
import { ExamStatus, ExamType, ExamWithStatus } from "@/app/types/exam";
import dayjs from "dayjs";

const getExamStatus = (startAt: string): ExamStatus => {
  const now = dayjs();
  const start = dayjs(startAt);
  const end = start.add(1, "hour");

  if (now.isBefore(start)) return "Sắp diễn ra";
  if (now.isAfter(end)) return "Đã kết thúc";
  return "Đang diễn ra";
};

const useExamList = () => {
  const [exams, setExams] = useState<ExamWithStatus[]>([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const res = await fetch("https://multiple-choice-exam-system-be.onrender.com/exams/all");
        const data: ExamType[] = await res.json();

        const examsWithStatus: ExamWithStatus[] = data.map((exam) => ({
          ...exam,
          status: getExamStatus(exam.startAt),
        }));

        const sorted = examsWithStatus.sort((a, b) => {
          const priority: Record<ExamStatus, number> = {
            "Đang diễn ra": 0,
            "Sắp diễn ra": 1,
            "Đã kết thúc": 2,
          };
          return priority[a.status] - priority[b.status];
        });

        setExams(sorted);
      } catch (err) {
        console.error("Lỗi khi fetch đề thi:", err);
      }
    };

    fetchExams();
  }, []);

  const isClickable = (exam: ExamWithStatus) => {
    const now = dayjs();
    const start = dayjs(exam.startAt);
    const end = start.add(0.5, "hour");
    return now.isAfter(start) && now.isBefore(end);
  };

  return { exams, isClickable };
};

export default useExamList;
