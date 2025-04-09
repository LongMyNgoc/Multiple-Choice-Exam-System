export type ExamFormProps = {
  examTitle: string;
  setExamTitle: (title: string) => void;
  startAt: string;
  setStartAt: (value: string) => void;
  handleFileImport: (e: React.ChangeEvent<HTMLInputElement>) => void;
};