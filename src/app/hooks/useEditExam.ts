// app/hooks/useEditExam.ts
import { useCallback } from "react";
import { toast } from "react-toastify";
import { QuestionExam } from "@/app/types/exam";

export const useEditExam = (examId: string, title: string, startAt: string, questions: QuestionExam[], onClose: () => void) => {
  const handleSave = useCallback(async () => {
    const updatedExam = {
      title,
      startAt,
      questions,
    };

    try {
      const response = await fetch(`https://multiple-choice-exam-system-be.onrender.com/exams/${examId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedExam),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success("Cập nhật đề thi thành công!");
        console.log("Cập nhật thành công:", result);
      } else {
        toast.error("Lỗi khi cập nhật đề thi!");
      }
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi gửi request!");
      console.error("Lỗi khi gửi request:", error);
    }
  }, [examId, title, startAt, questions]);

  const handleDelete = useCallback(async () => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa đề này không?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`https://multiple-choice-exam-system-be.onrender.com/exams/${examId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Đề thi đã bị xóa!");
        console.log("Đề đã bị xóa:", title);
        onClose();
      } else {
        toast.error("Không thể xóa đề thi!");
      }
    } catch (error) {
      toast.error("Lỗi khi gửi request xóa!");
      console.error("Lỗi khi gửi request xóa:", error);
    }
  }, [examId, title, onClose]);

  return { handleSave, handleDelete };
};
