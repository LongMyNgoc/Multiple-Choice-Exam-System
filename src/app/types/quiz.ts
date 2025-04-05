export interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
  }

 export interface QuizCardProps {
  image: string;
  title: string;
  onClick: () => void;
} 

export interface QuizListProps {
  selectedQuiz: string | null;
  setSelectedQuiz: (quiz: string | null) => void;
}