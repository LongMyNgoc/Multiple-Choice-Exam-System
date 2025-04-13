import { QuizQuestion } from "@/app/types/quizData";

  export const quizLTPHP: QuizQuestion[] = [
    {
      id: 1,
      question: "PHP là gì?",
      options: [
        "Một ngôn ngữ lập trình dùng để xây dựng các trang web động",
        "Một công cụ xử lý dữ liệu trên máy tính",
        "Một phần mềm chỉnh sửa ảnh",
        "Một hệ quản trị cơ sở dữ liệu"
      ],
      correctAnswer: "Một ngôn ngữ lập trình dùng để xây dựng các trang web động"
    },
    {
      id: 2,
      question: "PHP là viết tắt của từ gì?",
      options: [
        "Personal Home Page",
        "PHP: Hypertext Preprocessor",
        "Preprocessor Hypertext PHP",
        "PHP: Personal Hypertext"
      ],
      correctAnswer: "PHP: Hypertext Preprocessor"
    },
    {
      id: 3,
      question: "PHP có thể được sử dụng để làm gì?",
      options: [
        "Xử lý biểu mẫu (form)",
        "Gửi email",
        "Tạo các trang web động",
        "Tất cả các đáp án trên"
      ],
      correctAnswer: "Tất cả các đáp án trên"
    },
    {
      id: 4,
      question: "Câu lệnh nào được sử dụng để hiển thị thông tin ra màn hình trong PHP?",
      options: [
        "echo",
        "print",
        "var_dump",
        "Tất cả các đáp án trên"
      ],
      correctAnswer: "Tất cả các đáp án trên"
    },
    {
      id: 5,
      question: "Biến trong PHP bắt đầu bằng ký tự nào?",
      options: [
        "$",
        "&",
        "#",
        "%"
      ],
      correctAnswer: "$"
    },
    {
      id: 6,
      question: "Trong PHP, cú pháp để kết nối với cơ sở dữ liệu MySQL là gì?",
      options: [
        "mysqli_connect()",
        "mysql_connect()",
        "pdo_connect()",
        "connect_mysql()"
      ],
      correctAnswer: "mysqli_connect()"
    },
    {
      id: 7,
      question: "Câu lệnh nào dưới đây dùng để bắt đầu một phiên làm việc trong PHP?",
      options: [
        "session_start()",
        "start_session()",
        "init_session()",
        "open_session()"
      ],
      correctAnswer: "session_start()"
    },
    {
      id: 8,
      question: "Câu lệnh nào dùng để chấm dứt một phiên làm việc trong PHP?",
      options: [
        "session_end()",
        "session_destroy()",
        "session_close()",
        "session_finish()"
      ],
      correctAnswer: "session_destroy()"
    },
    {
      id: 9,
      question: "PHP hỗ trợ loại cơ sở dữ liệu nào?",
      options: [
        "MySQL",
        "PostgreSQL",
        "SQLite",
        "Tất cả các đáp án trên"
      ],
      correctAnswer: "Tất cả các đáp án trên"
    },
    {
      id: 10,
      question: "Trong PHP, hàm nào dùng để kiểm tra xem một biến có được khai báo hay không?",
      options: [
        "isset()",
        "empty()",
        "isset_var()",
        "exists()"
      ],
      correctAnswer: "isset()"
    },
    {
      id: 11,
      question: "Trong PHP, hàm nào được dùng để lấy độ dài của một chuỗi?",
      options: [
        "strlen()",
        "count()",
        "strlen_length()",
        "length()"
      ],
      correctAnswer: "strlen()"
    },
    {
      id: 12,
      question: "Câu lệnh nào dưới đây được dùng để kiểm tra điều kiện trong PHP?",
      options: [
        "if-else",
        "switch",
        "while",
        "Tất cả các đáp án trên"
      ],
      correctAnswer: "Tất cả các đáp án trên"
    },
    {
      id: 13,
      question: "Trong PHP, từ khóa nào được sử dụng để khai báo một hàm?",
      options: [
        "function",
        "declare",
        "method",
        "create"
      ],
      correctAnswer: "function"
    },
    {
      id: 14,
      question: "Cách nào để chèn mã PHP vào một trang HTML?",
      options: [
        "<?php ... ?>",
        "<script type='php'> ... </script>",
        "<php> ... </php>",
        "<php></php>"
      ],
      correctAnswer: "<?php ... ?>"
    },
    {
      id: 15,
      question: "Trong PHP, để truyền tham số theo phương thức POST, bạn sử dụng biến toàn cục nào?",
      options: [
        "$_POST",
        "$_GET",
        "$_REQUEST",
        "$_FILES"
      ],
      correctAnswer: "$_POST"
    },
    {
      id: 16,
      question: "PHP có thể chạy trên hệ điều hành nào?",
      options: [
        "Windows",
        "Linux",
        "MacOS",
        "Tất cả các đáp án trên"
      ],
      correctAnswer: "Tất cả các đáp án trên"
    },
    {
      id: 17,
      question: "Câu lệnh nào dùng để tạo một kết nối mới đến cơ sở dữ liệu MySQL trong PHP?",
      options: [
        "mysqli_connect()",
        "mysql_connect()",
        "pdo_connect()",
        "create_connection()"
      ],
      correctAnswer: "mysqli_connect()"
    },
    {
      id: 18,
      question: "PHP hỗ trợ kiểu dữ liệu nào dưới đây?",
      options: [
        "String",
        "Integer",
        "Array",
        "Tất cả các đáp án trên"
      ],
      correctAnswer: "Tất cả các đáp án trên"
    },
    {
      id: 19,
      question: "Câu lệnh nào dưới đây dùng để chuyển hướng người dùng đến một trang khác trong PHP?",
      options: [
        "header()",
        "redirect()",
        "go_to()",
        "location()"
      ],
      correctAnswer: "header()"
    },
    {
      id: 20,
      question: "Câu lệnh nào được sử dụng để tạo một mảng trong PHP?",
      options: [
        "$array = array()",
        "$array = []",
        "$array = new Array()",
        "Cả A và B"
      ],
      correctAnswer: "Cả A và B"
    }
  ];
  