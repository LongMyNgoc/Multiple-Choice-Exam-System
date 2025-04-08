export interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
  }

export interface QuizListProps {
  selectedQuiz: string | null;
  setSelectedQuiz: (quiz: string | null) => void;
}

// types.ts hoặc ngay trong CreateExam.tsx nếu đơn giản
export type Question = {
  question: string;
  options: [string, string, string, string]; // 4 lựa chọn cố định
  correctAnswer: number; // index 0-3
};

export type QuestionFormProps = {
  index: number;
  data: Question;
  onChange: (updated: Question) => void;
};