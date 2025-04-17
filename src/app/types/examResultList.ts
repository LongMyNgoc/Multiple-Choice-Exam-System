import { QuestionResult } from "./examResult";

export interface ExamResult {
  _id: string;
  title: string;
  questions: QuestionResult[];
  score: number;
  submittedAt: string;
  userEmail: string;
}