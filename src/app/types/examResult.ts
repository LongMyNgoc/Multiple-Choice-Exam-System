export interface QuestionResult {
    question: string;
    options: string[];
    selectedOption: number;
    correctAnswer: number;
    isCorrect: boolean;
  }
  
export interface ExamResult {
    _id: string;
    title: string;
    questions: QuestionResult[];
    score: number;
    submittedAt: string;
  }
  
export interface ExamResultProps {
    exam: ExamResult;
    onClose?: () => void; // optional: để đóng lại
  }