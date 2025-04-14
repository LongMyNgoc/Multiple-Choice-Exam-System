export interface QuestionExam {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface ExamType {
  _id: string;
  title: string;
  startAt: string;
  createdAt: string;
  questions: QuestionExam[];
}

export type ExamViewerProps = {
  exam: ExamType;
};

export type ExamStatus = "Đang diễn ra" | "Sắp diễn ra" | "Đã kết thúc";

export type ExamWithStatus = ExamType & {
  status: ExamStatus;
};

export interface EditExamProps {
  exam: ExamWithStatus;
  onClose: () => void;
}

export interface ExamListProps {
    exams: ExamWithStatus[];
    onSelectExam: (exam: ExamWithStatus) => void;
}