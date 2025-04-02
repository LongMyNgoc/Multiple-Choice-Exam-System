import Topbar from "@/app/components/QuizList/Topbar";
import Sidebar from "@/app/components/QuizList/Sidebar";
import QuizList from "@/app/components/QuizList/QuizList";

const QuizListPage = () => {
  return (
    <div className="d-flex flex-column vh-100">
      {/* Topbar */}
      <Topbar />

      {/* Nội dung chính */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar bên trái */}
        <Sidebar />

        {/* Vùng hiển thị QuizList */}
        <div className="flex-grow-1 p-3" style={{ marginLeft: "250px", marginTop: "56px" }}>
          <QuizList />
        </div>
      </div>
    </div>
  );
};

export default QuizListPage;
