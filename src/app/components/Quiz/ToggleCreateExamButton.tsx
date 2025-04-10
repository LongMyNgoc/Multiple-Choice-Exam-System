// components/ToggleCreateExamButton.tsx
import { ToggleCreateExamButtonProps } from "@/app/types/exam";

const ToggleCreateExamButton = ({ show, onToggle }: ToggleCreateExamButtonProps) => {
    return (
        <button
            onClick={onToggle}
            style={{
                position: "absolute",
                top: 20,
                right: 20,
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
            }}
        >
            {show ? "Đóng" : "Tạo đề thi"}
        </button>
    );
};

export default ToggleCreateExamButton;
