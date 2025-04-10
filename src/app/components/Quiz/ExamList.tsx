import { ExamWithStatus } from "@/app/types/exam";

interface ExamListProps {
    exams: ExamWithStatus[];
    onSelectExam: (exam: ExamWithStatus) => void;
}

const ExamList: React.FC<ExamListProps> = ({ exams, onSelectExam }) => {
    return (
        <>
            <h2 style={{ marginTop: "80px", marginBottom: "20px" }}>📚 Danh sách đề thi</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {exams.map((exam) => (
                    <li
                        key={exam._id}
                        onClick={() => onSelectExam(exam)}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            padding: "12px 16px",
                            marginBottom: "10px",
                            backgroundColor: "#f9f9f9",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <div>
                            <h3 style={{ margin: 0 }}>{exam.title}</h3>
                            <small>
                                Bắt đầu:{" "}
                                {new Date(exam.startAt).toLocaleString("vi-VN", {
                                    timeZone: "Asia/Ho_Chi_Minh",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    second: "2-digit",
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric"
                                })}
                            </small>
                        </div>
                        <span
                            style={{
                                padding: "4px 8px",
                                borderRadius: "4px",
                                fontSize: "12px",
                                fontWeight: "bold",
                                backgroundColor:
                                    exam.status === "Đang diễn ra"
                                        ? "#d4edda"
                                        : exam.status === "Sắp diễn ra"
                                            ? "#fff3cd"
                                            : "#f8d7da",
                                color:
                                    exam.status === "Đang diễn ra"
                                        ? "#155724"
                                        : exam.status === "Sắp diễn ra"
                                            ? "#856404"
                                            : "#721c24"
                            }}
                        >
                            {exam.status}
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ExamList;
