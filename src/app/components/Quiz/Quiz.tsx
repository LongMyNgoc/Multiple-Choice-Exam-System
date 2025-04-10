import { useState } from "react";
import CreateExam from "./CreateExam";
import EditExam from "./EditExam";
import ExamList from "./ExamList";
import ToggleCreateExamButton from "./ToggleCreateExamButton";
import useExamList from "@/app/hooks/useExamList";
import { ExamWithStatus } from "@/app/types/exam";

const Quiz = () => {
    const [showCreateExam, setShowCreateExam] = useState(false);
    const [selectedExam, setSelectedExam] = useState<ExamWithStatus | null>(null);
    const { exams } = useExamList();

    return (
        <div style={{ position: "relative", padding: "20px" }}>
            <ToggleCreateExamButton
                show={showCreateExam}
                onToggle={() => setShowCreateExam(prev => !prev)}
            />

            {showCreateExam && (
                <div style={{ marginTop: "60px" }}>
                    <CreateExam />
                </div>
            )}

            {selectedExam && (
                <div style={{ marginTop: "60px" }}>
                    <EditExam exam={selectedExam} onClose={() => setSelectedExam(null)} />
                </div>
            )}

            {!showCreateExam && !selectedExam && (
                <ExamList exams={exams} onSelectExam={setSelectedExam} />
            )}
        </div>
    );
};

export default Quiz;
