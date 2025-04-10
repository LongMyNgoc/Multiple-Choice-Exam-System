import { ToggleCreateExamButtonProps } from "@/app/types/exam";

const ToggleCreateExamButton = ({ show, onToggle }: ToggleCreateExamButtonProps) => {
    return (
        <button
            onClick={onToggle}
            className="btn btn-success position-absolute top-0 end-0 m-3"
        >
            {show ? "Đóng" : "Tạo đề thi"}
        </button>
    );
};

export default ToggleCreateExamButton;
