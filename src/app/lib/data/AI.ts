import { QuizQuestion } from "@/app/types/quizData";
  
  export const quizAI: QuizQuestion[] = [
    {
      id: 1,
      question: "Trí tuệ nhân tạo (AI) là gì?",
      options: [
        "Một hệ thống máy tính có khả năng thực hiện các nhiệm vụ mà thường đòi hỏi trí tuệ con người",
        "Một phần mềm chuyên giải toán",
        "Một loại robot được lập trình để hoạt động tự động",
        "Một chương trình tự động học hỏi từ dữ liệu"
      ],
      correctAnswer: "Một hệ thống máy tính có khả năng thực hiện các nhiệm vụ mà thường đòi hỏi trí tuệ con người"
    },
    {
      id: 2,
      question: "Thuật toán học máy (Machine Learning) thuộc loại trí tuệ nhân tạo nào?",
      options: [
        "Học từ dữ liệu",
        "Lập trình theo quy tắc",
        "Hệ thống chuyên gia",
        "Các thuật toán tối ưu"
      ],
      correctAnswer: "Học từ dữ liệu"
    },
    {
      id: 3,
      question: "Trong học máy, thuật ngữ 'supervised learning' (học có giám sát) có nghĩa là gì?",
      options: [
        "Dữ liệu đầu vào có kèm theo nhãn hoặc kết quả đúng",
        "Máy học từ kinh nghiệm mà không cần nhãn dữ liệu",
        "Hệ thống không cần dữ liệu huấn luyện",
        "Dữ liệu không có nhãn nhưng vẫn có thể học được"
      ],
      correctAnswer: "Dữ liệu đầu vào có kèm theo nhãn hoặc kết quả đúng"
    },
    {
      id: 4,
      question: "Thuật toán nào dưới đây không phải là một thuật toán học sâu (Deep Learning)?",
      options: [
        "Mạng thần kinh nhân tạo (Neural Networks)",
        "Máy học ngẫu nhiên (Random Forest)",
        "Mạng nơ-ron hồi tiếp (Recurrent Neural Networks)",
        "Mạng tích chập (Convolutional Neural Networks)"
      ],
      correctAnswer: "Máy học ngẫu nhiên (Random Forest)"
    },
    {
      id: 5,
      question: "Một trong những ứng dụng phổ biến của trí tuệ nhân tạo là gì?",
      options: [
        "Nhận diện hình ảnh và âm thanh",
        "Dự đoán xu hướng tài chính",
        "Điều khiển robot",
        "Tất cả các đáp án trên"
      ],
      correctAnswer: "Tất cả các đáp án trên"
    },
    {
      id: 6,
      question: "Các hệ thống chuyên gia trong trí tuệ nhân tạo dựa trên gì?",
      options: [
        "Cơ sở dữ liệu và quy tắc",
        "Mô hình học máy",
        "Mạng thần kinh",
        "Các mô hình toán học phức tạp"
      ],
      correctAnswer: "Cơ sở dữ liệu và quy tắc"
    },
    {
      id: 7,
      question: "Trong học máy, 'unsupervised learning' (học không giám sát) là gì?",
      options: [
        "Dữ liệu không có nhãn và hệ thống phải tự phát hiện các mẫu trong dữ liệu",
        "Hệ thống học từ dữ liệu có nhãn",
        "Máy tính cần các ví dụ để xác định quyết định",
        "Máy học từ kinh nghiệm mà không cần huấn luyện"
      ],
      correctAnswer: "Dữ liệu không có nhãn và hệ thống phải tự phát hiện các mẫu trong dữ liệu"
    },
    {
      id: 8,
      question: "Trong học máy, 'reinforcement learning' (học củng cố) là gì?",
      options: [
        "Hệ thống học từ các quyết định và kết quả qua việc thử nghiệm và học hỏi",
        "Máy học từ dữ liệu có nhãn và có mục tiêu xác định chính xác",
        "Máy tính học qua việc phân tích mô hình dữ liệu phức tạp",
        "Máy tính học qua việc nhận diện các đặc trưng trong dữ liệu"
      ],
      correctAnswer: "Hệ thống học từ các quyết định và kết quả qua việc thử nghiệm và học hỏi"
    },
    {
      id: 9,
      question: "Học sâu (Deep Learning) dựa trên cấu trúc nào?",
      options: [
        "Mạng nơ-ron nhiều lớp (Multilayer Neural Networks)",
        "Thuật toán học máy nâng cao",
        "Cấu trúc cây quyết định",
        "Cơ sở dữ liệu phân tán"
      ],
      correctAnswer: "Mạng nơ-ron nhiều lớp (Multilayer Neural Networks)"
    },
    {
      id: 10,
      question: "Ứng dụng nào sau đây là một ví dụ về trí tuệ nhân tạo trong y tế?",
      options: [
        "Hệ thống chẩn đoán bệnh tự động",
        "Phân tích hình ảnh y khoa",
        "Tự động hóa quy trình phòng thí nghiệm",
        "Tất cả các đáp án trên"
      ],
      correctAnswer: "Tất cả các đáp án trên"
    },
    {
      id: 11,
      question: "Mạng nơ-ron nhân tạo trong học sâu được sử dụng để làm gì?",
      options: [
        "Giải quyết các bài toán phân loại và hồi quy",
        "Dự đoán xu hướng thị trường chứng khoán",
        "Xử lý ngôn ngữ tự nhiên và nhận diện hình ảnh",
        "Tất cả các đáp án trên"
      ],
      correctAnswer: "Tất cả các đáp án trên"
    },
    {
      id: 12,
      question: "Thuật toán K-means là một thuật toán học máy loại nào?",
      options: [
        "Học có giám sát",
        "Học không giám sát",
        "Học củng cố",
        "Học sâu"
      ],
      correctAnswer: "Học không giám sát"
    },
    {
      id: 13,
      question: "Tính toán tối ưu là một trong những ứng dụng chính của trí tuệ nhân tạo trong lĩnh vực nào?",
      options: [
        "Lập lịch và phân bổ tài nguyên",
        "Xử lý ngôn ngữ tự nhiên",
        "Nhận diện khuôn mặt",
        "Phân tích dữ liệu"
      ],
      correctAnswer: "Lập lịch và phân bổ tài nguyên"
    },
    {
      id: 14,
      question: "Thuật toán học sâu nào thường được sử dụng trong nhận diện hình ảnh?",
      options: [
        "Mạng tích chập (CNN)",
        "Mạng nơ-ron hồi tiếp (RNN)",
        "Mạng nơ-ron đơn giản",
        "Mạng học máy"
      ],
      correctAnswer: "Mạng tích chập (CNN)"
    },
    {
      id: 15,
      question: "Trong học máy, 'overfitting' là gì?",
      options: [
        "Khi mô hình học quá chi tiết từ dữ liệu huấn luyện và không thể tổng quát tốt với dữ liệu mới",
        "Khi mô hình không học được gì từ dữ liệu huấn luyện",
        "Khi mô hình chỉ học được những mẫu cơ bản",
        "Khi mô hình không thể phân loại dữ liệu"
      ],
      correctAnswer: "Khi mô hình học quá chi tiết từ dữ liệu huấn luyện và không thể tổng quát tốt với dữ liệu mới"
    },
    {
      id: 16,
      question: "DeepMind, một công ty thuộc sở hữu của Google, nổi tiếng với việc phát triển ứng dụng AI nào?",
      options: [
        "AlphaGo",
        "Alexa",
        "Siri",
        "Tesla Autopilot"
      ],
      correctAnswer: "AlphaGo"
    },
    {
      id: 17,
      question: "Thuật toán nào dưới đây là một ví dụ về học máy có giám sát?",
      options: [
        "Hồi quy tuyến tính",
        "Clustering",
        "K-means",
        "Principal Component Analysis"
      ],
      correctAnswer: "Hồi quy tuyến tính"
    },
    {
      id: 18,
      question: "Một trong các ứng dụng của AI trong ngành ô tô là gì?",
      options: [
        "Tự lái xe",
        "Dự báo tai nạn giao thông",
        "Cảnh báo khi có người vượt đèn đỏ",
        "Tất cả các ứng dụng trên"
      ],
      correctAnswer: "Tất cả các ứng dụng trên"
    },
    {
      id: 19,
      question: "AI được áp dụng trong lĩnh vực nào dưới đây?",
      options: [
        "Phân tích dữ liệu lớn",
        "Xử lý ngôn ngữ tự nhiên",
        "Tự động hóa quy trình sản xuất",
        "Tất cả các lĩnh vực trên"
      ],
      correctAnswer: "Tất cả các lĩnh vực trên"
    },
    {
      id: 20,
      question: "Cái nào sau đây không phải là một thách thức lớn trong AI?",
      options: [
        "Khả năng nhận diện chính xác hình ảnh",
        "Thiếu dữ liệu huấn luyện",
        "Tốc độ học của mô hình",
        "Khả năng xử lý lý thuyết phức tạp"
      ],
      correctAnswer: "Khả năng xử lý lý thuyết phức tạp"
    }
  ];
  