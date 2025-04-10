// File: hooks/useExamResults.ts
import { useEffect, useState } from "react";
import axios from "axios";
import { ExamResult } from "../types/examResult";

const useExamResults = (userEmail: string | null) => {
  const [data, setData] = useState<ExamResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userEmail) return;

    setLoading(true);
    axios
      .get(`http://localhost:3001/exam-result?userEmail=${userEmail}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching exam results:", err))
      .finally(() => setLoading(false));
  }, [userEmail]);

  return { data, loading };
};

export default useExamResults;
