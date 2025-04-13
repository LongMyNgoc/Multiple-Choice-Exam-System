export interface QuizListProps {
  selectedQuiz: string | null;
  setSelectedQuiz: (quiz: string | null) => void;
}
  export interface QuizCardProps {
    image: string;
    title: string;
    onClick: () => void;
  } 