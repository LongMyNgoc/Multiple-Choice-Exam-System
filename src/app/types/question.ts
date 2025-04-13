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