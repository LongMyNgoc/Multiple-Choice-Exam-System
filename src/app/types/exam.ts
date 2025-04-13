export type ExamFormProps = {
  examTitle: string;
  setExamTitle: (title: string) => void;
  startAt: string;
  setStartAt: (value: string) => void;
  handleFileImport: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface ExamType {
  _id: string;
  title: string;
  startAt: string;
  createdAt: string;
  questions: Question[];
}

export type ExamViewerProps = {
  exam: ExamType;
};

export type ExamStatus = "Đang diễn ra" | "Sắp diễn ra" | "Đã kết thúc";

export type ExamWithStatus = ExamType & {
  status: ExamStatus;
};

export interface ToggleCreateExamButtonProps {
  show: boolean;
  onToggle: () => void;
}

export interface EditExamProps {
  exam: ExamWithStatus;
  onClose: () => void;
}

export interface ExamListProps {
    exams: ExamWithStatus[];
    onSelectExam: (exam: ExamWithStatus) => void;
}