export interface QuizListProps {
    setSelectedQuiz: (quiz: string | null) => void;
  }
  
  export interface QuizCardProps {
    image: string;
    title: string;
    onClick: () => void;
  } 