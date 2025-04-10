import { useState } from "react";
import CreateExam from "../CreateExam/CreateExam";
import EditExam from "../EditExam/EditExam";
import ExamList from "./ExamList";
import ToggleCreateExamButton from "./ToggleCreateExamButton";
import useExamList from "@/app/hooks/useExamList";
import { ExamWithStatus } from "@/app/types/exam";

const Quiz = () => {
    const [showCreateExam, setShowCreateExam] = useState(false);
    const [selectedExam, setSelectedExam] = useState<ExamWithStatus | null>(null);
    const { exams } = useExamList();

    return (
        <div className="position-relative p-4">
            <ToggleCreateExamButton
                show={showCreateExam}
                onToggle={() => setShowCreateExam(prev => !prev)}
            />

            {showCreateExam && (
                <div className="mt-5">
                    <CreateExam />
                </div>
            )}

            {selectedExam && (
                <div className="mt-5">
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
