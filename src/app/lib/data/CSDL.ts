import { QuizQuestion } from "@/app/types/quiz";
  
  export const quizCSDL: QuizQuestion[] = [
    {
      id: 1,
      question: "Cơ sở dữ liệu là gì?",
      options: [
        "Một hệ thống để lưu trữ, quản lý và truy vấn dữ liệu",
        "Một chương trình phần mềm",
        "Một ngôn ngữ lập trình",
        "Một máy tính đặc biệt"
      ],
      correctAnswer: "Một hệ thống để lưu trữ, quản lý và truy vấn dữ liệu"
    },
    {
      id: 2,
      question: "SQL là viết tắt của từ gì?",
      options: [
        "Structured Query Language",
        "Simple Query Language",
        "Structured Quick Language",
        "Simple Question Language"
      ],
      correctAnswer: "Structured Query Language"
    },
    {
      id: 3,
      question: "Trong cơ sở dữ liệu quan hệ, một bảng là gì?",
      options: [
        "Một tập hợp các dòng dữ liệu có cùng cấu trúc",
        "Một cột trong bảng",
        "Một mối quan hệ giữa các bảng",
        "Một tập hợp các truy vấn SQL"
      ],
      correctAnswer: "Một tập hợp các dòng dữ liệu có cùng cấu trúc"
    },
    {
      id: 4,
      question: "Thao tác nào trong SQL dùng để chọn dữ liệu từ bảng?",
      options: [
        "INSERT",
        "UPDATE",
        "SELECT",
        "DELETE"
      ],
      correctAnswer: "SELECT"
    },
    {
      id: 5,
      question: "Trong SQL, câu lệnh nào dùng để thêm dữ liệu vào bảng?",
      options: [
        "SELECT INTO",
        "INSERT INTO",
        "UPDATE SET",
        "DELETE FROM"
      ],
      correctAnswer: "INSERT INTO"
    },
    {
      id: 6,
      question: "Khóa chính (Primary Key) trong cơ sở dữ liệu có đặc điểm gì?",
      options: [
        "Dữ liệu trong khóa chính không được phép trùng lặp",
        "Dữ liệu trong khóa chính có thể trùng lặp",
        "Khóa chính có thể null",
        "Khóa chính có thể không phải là trường duy nhất trong bảng"
      ],
      correctAnswer: "Dữ liệu trong khóa chính không được phép trùng lặp"
    },
    {
      id: 7,
      question: "Khóa ngoại (Foreign Key) dùng để làm gì?",
      options: [
        "Liên kết giữa các bảng trong cơ sở dữ liệu",
        "Đảm bảo tính duy nhất cho mỗi dòng dữ liệu",
        "Thực hiện các phép toán trong cơ sở dữ liệu",
        "Chỉ định kiểu dữ liệu của cột"
      ],
      correctAnswer: "Liên kết giữa các bảng trong cơ sở dữ liệu"
    },
    {
      id: 8,
      question: "Một chỉ mục (Index) trong cơ sở dữ liệu dùng để làm gì?",
      options: [
        "Tăng tốc độ truy vấn dữ liệu",
        "Giảm dung lượng cơ sở dữ liệu",
        "Cải thiện độ bảo mật của cơ sở dữ liệu",
        "Lưu trữ dữ liệu tạm thời"
      ],
      correctAnswer: "Tăng tốc độ truy vấn dữ liệu"
    },
    {
      id: 9,
      question: "Một thuộc tính trong bảng cơ sở dữ liệu có thể có những giá trị nào?",
      options: [
        "Chỉ có thể chứa một giá trị duy nhất",
        "Có thể chứa một hoặc nhiều giá trị",
        "Không có giá trị",
        "Chỉ có thể chứa số nguyên"
      ],
      correctAnswer: "Có thể chứa một hoặc nhiều giá trị"
    },
    {
      id: 10,
      question: "SQL JOIN được sử dụng để làm gì?",
      options: [
        "Liên kết các bảng với nhau",
        "Xóa dữ liệu từ bảng",
        "Cập nhật dữ liệu trong bảng",
        "Thêm dữ liệu vào bảng"
      ],
      correctAnswer: "Liên kết các bảng với nhau"
    },
    {
      id: 11,
      question: "Trong SQL, câu lệnh nào được dùng để xóa một bảng?",
      options: [
        "DELETE TABLE",
        "DROP TABLE",
        "REMOVE TABLE",
        "TRUNCATE TABLE"
      ],
      correctAnswer: "DROP TABLE"
    },
    {
      id: 12,
      question: "Câu lệnh nào dùng để sửa đổi dữ liệu trong bảng?",
      options: [
        "SELECT",
        "UPDATE",
        "INSERT",
        "DELETE"
      ],
      correctAnswer: "UPDATE"
    },
    {
      id: 13,
      question: "Một trong các nguyên lý cơ bản của mô hình dữ liệu quan hệ là gì?",
      options: [
        "Mỗi bảng phải có ít nhất một khóa chính",
        "Mỗi bảng phải có ít nhất một khóa ngoại",
        "Mỗi bảng phải chứa tối đa 10 cột",
        "Các bảng phải được nối trực tiếp với nhau"
      ],
      correctAnswer: "Mỗi bảng phải có ít nhất một khóa chính"
    },
    {
      id: 14,
      question: "Để tìm kiếm các giá trị trùng lặp trong một cột của bảng, ta sử dụng câu lệnh SQL nào?",
      options: [
        "SELECT DISTINCT",
        "SELECT UNIQUE",
        "SELECT ALL",
        "SELECT DUPLICATE"
      ],
      correctAnswer: "SELECT DISTINCT"
    },
    {
      id: 15,
      question: "Trong một cơ sở dữ liệu quan hệ, các dữ liệu phải tuân theo những quy tắc nào?",
      options: [
        "Dữ liệu phải có cấu trúc cố định",
        "Dữ liệu phải có mối quan hệ rõ ràng với nhau",
        "Dữ liệu không cần phải có kiểu dữ liệu",
        "Dữ liệu có thể là bất kỳ dạng nào"
      ],
      correctAnswer: "Dữ liệu phải có mối quan hệ rõ ràng với nhau"
    },
    {
      id: 16,
      question: "Trong cơ sở dữ liệu, kiểu dữ liệu nào dùng để lưu trữ ngày tháng?",
      options: [
        "DATE",
        "DATETIME",
        "TIMESTAMP",
        "TẤT CẢ CÁC CÂU TRÊN"
      ],
      correctAnswer: "TẤT CẢ CÁC CÂU TRÊN"
    },
    {
      id: 17,
      question: "Hàm nào trong SQL được sử dụng để tính tổng giá trị của một cột?",
      options: [
        "SUM()",
        "COUNT()",
        "AVG()",
        "MAX()"
      ],
      correctAnswer: "SUM()"
    },
    {
      id: 18,
      question: "Thao tác nào trong SQL dùng để xóa dữ liệu từ bảng?",
      options: [
        "DELETE",
        "REMOVE",
        "TRUNCATE",
        "DROP"
      ],
      correctAnswer: "DELETE"
    },
    {
      id: 19,
      question: "Một cơ sở dữ liệu quan hệ có thể có bao nhiêu bảng?",
      options: [
        "Một",
        "Nhiều",
        "Một hoặc nhiều",
        "Tùy thuộc vào phần mềm quản lý cơ sở dữ liệu"
      ],
      correctAnswer: "Nhiều"
    },
    {
      id: 20,
      question: "Trong cơ sở dữ liệu, một bảng chứa thông tin về nhân viên có thể có những cột nào?",
      options: [
        "Mã nhân viên, Tên, Ngày sinh, Lương",
        "Chỉ có Mã nhân viên",
        "Tên, Địa chỉ, Số điện thoại",
        "Tất cả các câu trên"
      ],
      correctAnswer: "Mã nhân viên, Tên, Ngày sinh, Lương"
    }
  ];
  