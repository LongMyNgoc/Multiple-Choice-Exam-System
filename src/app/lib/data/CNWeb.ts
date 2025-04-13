import { QuizQuestion } from "@/app/types/quizData";

export const quizCNWeb: QuizQuestion[] = [
    // Công nghệ Web
    {
      id: 1,
      question: "HTML là gì?",
      options: [
        "Một ngôn ngữ lập trình",
        "Một ngôn ngữ đánh dấu dùng để tạo cấu trúc trang web",
        "Một công cụ phát triển phần mềm",
        "Một hệ điều hành"
      ],
      correctAnswer: "Một ngôn ngữ đánh dấu dùng để tạo cấu trúc trang web"
    },
    {
      id: 2,
      question: "CSS được sử dụng để làm gì trong phát triển web?",
      options: [
        "Cung cấp các lệnh logic cho trang web",
        "Quản lý cơ sở dữ liệu",
        "Tạo cấu trúc trang web",
        "Định dạng kiểu dáng, màu sắc, và bố cục của trang web"
      ],
      correctAnswer: "Định dạng kiểu dáng, màu sắc, và bố cục của trang web"
    },
    {
      id: 3,
      question: "JavaScript chủ yếu được sử dụng trong phát triển web để làm gì?",
      options: [
        "Lập trình máy chủ",
        "Tạo các trang web động và tương tác",
        "Quản lý cơ sở dữ liệu",
        "Chạy hệ điều hành"
      ],
      correctAnswer: "Tạo các trang web động và tương tác"
    },
  
    // React
    {
      id: 4,
      question: "React là gì?",
      options: [
        "Một hệ điều hành",
        "Một framework để phát triển ứng dụng di động",
        "Một thư viện JavaScript dùng để xây dựng giao diện người dùng",
        "Một ngôn ngữ lập trình"
      ],
      correctAnswer: "Một thư viện JavaScript dùng để xây dựng giao diện người dùng"
    },
    {
      id: 5,
      question: "Trong React, một component là gì?",
      options: [
        "Một hàm hoặc lớp có thể tái sử dụng và quản lý giao diện người dùng",
        "Một thư viện bên ngoài giúp phát triển React",
        "Một kiểu dữ liệu trong React",
        "Một hệ điều hành"
      ],
      correctAnswer: "Một hàm hoặc lớp có thể tái sử dụng và quản lý giao diện người dùng"
    },
    {
      id: 6,
      question: "Trong React, `useState` là gì?",
      options: [
        "Một hook để thay đổi giá trị của một biến trong component",
        "Một thư viện để quản lý trạng thái ứng dụng",
        "Một component trong React",
        "Một cách để tạo giao diện người dùng động"
      ],
      correctAnswer: "Một hook để thay đổi giá trị của một biến trong component"
    },
    {
      id: 7,
      question: "Props trong React là gì?",
      options: [
        "Một cách để quản lý trạng thái trong component",
        "Các tham số được truyền vào component từ component cha",
        "Một kiểu dữ liệu trong React",
        "Một thư viện trong React"
      ],
      correctAnswer: "Các tham số được truyền vào component từ component cha"
    },
    {
      id: 8,
      question: "Virtual DOM trong React có công dụng gì?",
      options: [
        "Giúp cải thiện hiệu suất của ứng dụng React",
        "Giúp React hoạt động trên các hệ điều hành khác nhau",
        "Giúp tạo các giao diện người dùng mới",
        "Giúp quản lý cơ sở dữ liệu trong ứng dụng"
      ],
      correctAnswer: "Giúp cải thiện hiệu suất của ứng dụng React"
    },
  
    // FastAPI
    {
      id: 9,
      question: "FastAPI là gì?",
      options: [
        "Một framework Python để xây dựng API nhanh chóng và dễ dàng",
        "Một thư viện để phân tích dữ liệu",
        "Một ngôn ngữ lập trình",
        "Một hệ điều hành"
      ],
      correctAnswer: "Một framework Python để xây dựng API nhanh chóng và dễ dàng"
    },
    {
      id: 10,
      question: "FastAPI hỗ trợ những tính năng nào?",
      options: [
        "Auto-validation và auto-documentation cho API",
        "Chạy trên tất cả các hệ điều hành",
        "Tạo giao diện người dùng cho ứng dụng web",
        "Tất cả các tính năng trên"
      ],
      correctAnswer: "Auto-validation và auto-documentation cho API"
    },
    {
      id: 11,
      question: "Câu lệnh nào trong FastAPI giúp khởi tạo một API mới?",
      options: [
        "app.add_api()",
        "FastAPI()",
        "create_api()",
        "new_api()"
      ],
      correctAnswer: "FastAPI()"
    },
    {
      id: 12,
      question: "FastAPI sử dụng thư viện nào để quản lý các kiểu dữ liệu?",
      options: [
        "Pydantic",
        "Django",
        "Flask",
        "SQLAlchemy"
      ],
      correctAnswer: "Pydantic"
    },
    {
      id: 13,
      question: "FastAPI có thể hoạt động với cơ sở dữ liệu nào?",
      options: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Tất cả các cơ sở dữ liệu trên"
      ],
      correctAnswer: "Tất cả các cơ sở dữ liệu trên"
    },
    {
      id: 14,
      question: "Khi sử dụng FastAPI, để tạo một route cho API, bạn cần sử dụng phương thức nào?",
      options: [
        "app.route()",
        "app.get()",
        "app.post()",
        "app.api()"
      ],
      correctAnswer: "app.get()"
    },
    {
      id: 15,
      question: "Lợi ích của việc sử dụng FastAPI là gì?",
      options: [
        "API nhanh, dễ dàng bảo trì và tự động hóa tài liệu",
        "API nhanh nhưng khó bảo trì",
        "API chỉ hoạt động với một hệ điều hành duy nhất",
        "API rất chậm và không hỗ trợ tài liệu tự động"
      ],
      correctAnswer: "API nhanh, dễ dàng bảo trì và tự động hóa tài liệu"
    },
    {
      id: 16,
      question: "FastAPI hỗ trợ các loại xác thực nào?",
      options: [
        "Basic Authentication",
        "OAuth2",
        "API Key",
        "Tất cả các loại trên"
      ],
      correctAnswer: "Tất cả các loại trên"
    },
    {
      id: 17,
      question: "FastAPI hỗ trợ những chuẩn gì cho API?",
      options: [
        "REST",
        "GraphQL",
        "gRPC",
        "Tất cả các chuẩn trên"
      ],
      correctAnswer: "REST"
    }
  ];
  