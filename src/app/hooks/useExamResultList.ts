import { useState, useEffect } from 'react';
import axios from 'axios';
import { ExamResult } from '@/app/types/examResultList';

const useExamResultList = () => {
  const [results, setResults] = useState<ExamResult[]>([]);  // Danh sách đề thi
  const [selectedExam, setSelectedExam] = useState<ExamResult | null>(null); // Đề thi đã chọn
  const [users, setUsers] = useState<string[]>([]);  // Danh sách người dùng đã làm bài thi
  const [selectedUser, setSelectedUser] = useState<string | null>(null); // Người dùng đã chọn

  useEffect(() => {
    // Lấy danh sách các đề thi
    axios
      .get(`http://localhost:3001/exam-result/all`)
      .then((res) => setResults(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Khi chọn đề thi, lấy danh sách các userEmail đã làm bài thi đó
  const handleExamClick = (exam: ExamResult) => {
    setSelectedExam(exam);
    setSelectedUser(null);  // Reset user khi thay đổi đề thi
    axios
      .get(`http://localhost:3001/exam-result/by-title/${exam.title}`)
      .then((res) => {
        const userEmails = res.data.map((result: ExamResult) => result.userEmail);
        setUsers(userEmails);
      })
      .catch((err) => console.error(err));
  };

  // Khi chọn userEmail, lấy chi tiết bài thi của user đó
  const handleUserClick = (userEmail: string) => {
    if (!selectedExam) return;

    setSelectedUser(userEmail);
    axios
      .get(`http://localhost:3001/exam-result/detail/${selectedExam.title}/${userEmail}`)
      .then((res) => {
        setSelectedExam(res.data);  // Cập nhật lại thông tin chi tiết bài thi
      })
      .catch((err) => console.error(err));
  };

  // Quay lại danh sách đề thi
  const handleBackToExamList = () => {
    setSelectedExam(null);
    setSelectedUser(null);
  };

  return {
    results,
    selectedExam,
    selectedUser,
    users,
    handleExamClick,
    handleUserClick,
    handleBackToExamList,
  };
};

export default useExamResultList;
