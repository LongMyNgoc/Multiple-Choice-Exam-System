import { FaArrowLeft } from 'react-icons/fa';  // Import icon mũi tên quay lại
import ExamDetail from './ExamDetail';
import useExamResultList from '@/app/hooks/useExamResultList';  // Import custom hook
import { useState } from 'react';

const Result = () => {
  const {
    results,
    selectedExam,
    selectedUser,
    users,
    handleExamClick,
    handleUserClick,
    handleBackToExamList,
  } = useExamResultList();

  // State for searching exam and user
  const [examSearchQuery, setExamSearchQuery] = useState('');
  const [userSearchQuery, setUserSearchQuery] = useState('');

  // Filter results based on search query for exams
  const filteredExams = results.filter((exam) =>
    exam.title.toLowerCase().includes(examSearchQuery.toLowerCase())
  );

  // Filter users based on search query
  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(userSearchQuery.toLowerCase())
  );

  return (
    <div className="container mt-4">
      {/* Quay lại nút khi chọn đề thi hoặc thí sinh */}
      {(selectedExam || selectedUser) && (
        <button
          className="btn btn-primary mb-3 fs-4"
          onClick={handleBackToExamList}
        >
          <FaArrowLeft />
        </button>
      )}

      {/* Hiển thị thanh tìm kiếm cho danh sách đề thi */}
      {!selectedExam && (
        <>
          <h2 className="mb-3">Danh sách bài kiểm tra</h2>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="🔍 Tìm kiếm đề thi"
            value={examSearchQuery}
            onChange={(e) => setExamSearchQuery(e.target.value)}
          />
          <div className="list-group">
            {filteredExams.map((exam) => (
              <button
                key={exam._id}
                className="list-group-item list-group-item-action"
                onClick={() => handleExamClick(exam)}
              >
                {exam.title}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Hiển thị thanh tìm kiếm cho danh sách user nếu đã chọn đề thi */}
      {selectedExam && !selectedUser && (
        <div className="mt-4">
          <h3>Danh sách thí sinh</h3>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="🔍 Tìm kiếm thí sinh"
            value={userSearchQuery}
            onChange={(e) => setUserSearchQuery(e.target.value)}
          />
          <div className="list-group">
            {filteredUsers.map((userEmail) => (
              <button
                key={userEmail}
                className="list-group-item list-group-item-action"
                onClick={() => handleUserClick(userEmail)}
              >
                {userEmail}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hiển thị chi tiết bài thi khi chọn user */}
      {selectedUser && selectedExam && (
        <ExamDetail exam={selectedExam} onClose={() => handleBackToExamList()} />
      )}
    </div>
  );
};

export default Result;
