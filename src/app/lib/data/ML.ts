import { QuizQuestion } from "@/app/types/quizData";
  
  export const quizML: QuizQuestion[] = [
    {
      id: 1,
      question: "Học máy (Machine Learning) là gì?",
      options: [
        "Một phương pháp dạy máy tính tự học từ dữ liệu và cải thiện qua thời gian",
        "Một kỹ thuật lập trình máy tính",
        "Một hệ thống quản lý cơ sở dữ liệu",
        "Một công cụ vẽ đồ thị dữ liệu"
      ],
      correctAnswer: "Một phương pháp dạy máy tính tự học từ dữ liệu và cải thiện qua thời gian"
    },
    {
      id: 2,
      question: "Thuật toán nào dưới đây là thuật toán học có giám sát (supervised learning)?",
      options: [
        "Hồi quy tuyến tính",
        "K-means clustering",
        "Học sâu (Deep Learning)",
        "Thuật toán tìm kiếm A*"
      ],
      correctAnswer: "Hồi quy tuyến tính"
    },
    {
      id: 3,
      question: "Thuật toán học máy nào được sử dụng để phân loại dữ liệu?",
      options: [
        "Hồi quy tuyến tính",
        "Máy vector hỗ trợ (Support Vector Machine)",
        "K-means clustering",
        "Tất cả các đáp án trên"
      ],
      correctAnswer: "Máy vector hỗ trợ (Support Vector Machine)"
    },
    {
      id: 4,
      question: "Trong học máy, thuật ngữ 'overfitting' có nghĩa là gì?",
      options: [
        "Mô hình học quá chi tiết từ dữ liệu huấn luyện, làm giảm khả năng tổng quát với dữ liệu mới",
        "Mô hình không học được gì từ dữ liệu huấn luyện",
        "Mô hình có thể dự đoán tốt cho mọi dữ liệu",
        "Mô hình quá đơn giản và không thể học được dữ liệu"
      ],
      correctAnswer: "Mô hình học quá chi tiết từ dữ liệu huấn luyện, làm giảm khả năng tổng quát với dữ liệu mới"
    },
    {
      id: 5,
      question: "Thuật toán học máy nào sau đây thuộc loại học không giám sát?",
      options: [
        "K-means clustering",
        "Hồi quy tuyến tính",
        "Support Vector Machine",
        "Học sâu (Deep Learning)"
      ],
      correctAnswer: "K-means clustering"
    },
    {
      id: 6,
      question: "Trong học máy, thuật ngữ 'feature' (đặc trưng) có nghĩa là gì?",
      options: [
        "Một thuộc tính hoặc yếu tố của dữ liệu mà máy học có thể sử dụng để dự đoán kết quả",
        "Kết quả mà mô hình dự đoán",
        "Cách mà dữ liệu được phân loại",
        "Các bước trong quy trình huấn luyện mô hình"
      ],
      correctAnswer: "Một thuộc tính hoặc yếu tố của dữ liệu mà máy học có thể sử dụng để dự đoán kết quả"
    },
    {
      id: 7,
      question: "Thuật toán nào sau đây có thể được sử dụng để giảm độ phức tạp của dữ liệu trong học máy?",
      options: [
        "Principal Component Analysis (PCA)",
        "K-means clustering",
        "Random Forest",
        "Support Vector Machine"
      ],
      correctAnswer: "Principal Component Analysis (PCA)"
    },
    {
      id: 8,
      question: "Khi nào bạn nên sử dụng thuật toán 'k-nearest neighbors' (KNN)?",
      options: [
        "Khi bạn muốn phân loại dữ liệu dựa trên các điểm gần nhất trong không gian đặc trưng",
        "Khi bạn có một số lượng lớn dữ liệu có nhãn",
        "Khi bạn cần dự đoán giá trị liên tục",
        "Khi dữ liệu có một cấu trúc phức tạp"
      ],
      correctAnswer: "Khi bạn muốn phân loại dữ liệu dựa trên các điểm gần nhất trong không gian đặc trưng"
    },
    {
      id: 9,
      question: "Trong học máy, thuật ngữ 'classification' (phân loại) có nghĩa là gì?",
      options: [
        "Dự đoán giá trị liên tục",
        "Phân chia dữ liệu thành các lớp khác nhau",
        "Tìm kiếm trong cơ sở dữ liệu",
        "Tất cả các đáp án trên"
      ],
      correctAnswer: "Phân chia dữ liệu thành các lớp khác nhau"
    },
    {
      id: 10,
      question: "Thuật toán nào dưới đây là một thuật toán học sâu?",
      options: [
        "Mạng thần kinh nhân tạo (Neural Network)",
        "Quyết định cây (Decision Trees)",
        "Hồi quy tuyến tính",
        "K-means clustering"
      ],
      correctAnswer: "Mạng thần kinh nhân tạo (Neural Network)"
    },
    {
      id: 11,
      question: "Thuật toán nào được sử dụng trong học máy để xây dựng mô hình phân loại dữ liệu?",
      options: [
        "Máy hỗ trợ vector (SVM)",
        "Hồi quy tuyến tính",
        "Học sâu",
        "Tất cả các đáp án trên"
      ],
      correctAnswer: "Máy hỗ trợ vector (SVM)"
    },
    {
      id: 12,
      question: "Khi nào bạn sẽ sử dụng phương pháp 'bagging' trong học máy?",
      options: [
        "Khi bạn muốn tăng cường độ chính xác của mô hình thông qua việc kết hợp nhiều mô hình độc lập",
        "Khi bạn cần cải thiện độ chính xác của một mô hình học sâu",
        "Khi bạn muốn giảm thiểu độ phức tạp của dữ liệu",
        "Khi bạn cần tối ưu hóa siêu tham số của mô hình"
      ],
      correctAnswer: "Khi bạn muốn tăng cường độ chính xác của mô hình thông qua việc kết hợp nhiều mô hình độc lập"
    },
    {
      id: 13,
      question: "Thuật toán nào dưới đây thuộc nhóm thuật toán học máy 'ensemble learning'?",
      options: [
        "Random Forest",
        "K-means clustering",
        "Hồi quy tuyến tính",
        "Support Vector Machine"
      ],
      correctAnswer: "Random Forest"
    },
    {
      id: 14,
      question: "Một trong những lý do khiến 'deep learning' (học sâu) trở nên phổ biến là gì?",
      options: [
        "Khả năng xử lý dữ liệu phức tạp và không có cấu trúc, như hình ảnh và âm thanh",
        "Thuật toán này dễ hiểu và nhanh chóng triển khai",
        "Yêu cầu dữ liệu đầu vào ít và dễ dàng",
        "Các mô hình học sâu không yêu cầu huấn luyện dữ liệu"
      ],
      correctAnswer: "Khả năng xử lý dữ liệu phức tạp và không có cấu trúc, như hình ảnh và âm thanh"
    },
    {
      id: 15,
      question: "Thuật toán nào sau đây là một phương pháp học máy không giám sát?",
      options: [
        "K-means clustering",
        "Hồi quy tuyến tính",
        "Máy hỗ trợ vector",
        "Học sâu"
      ],
      correctAnswer: "K-means clustering"
    },
    {
      id: 16,
      question: "Trong học máy, 'gradient descent' (giảm dần theo gradient) là gì?",
      options: [
        "Một thuật toán tối ưu được sử dụng để điều chỉnh các tham số mô hình",
        "Một kỹ thuật phân loại dữ liệu",
        "Một phương pháp phân tích dữ liệu lớn",
        "Một loại thuật toán học sâu"
      ],
      correctAnswer: "Một thuật toán tối ưu được sử dụng để điều chỉnh các tham số mô hình"
    },
    {
      id: 17,
      question: "Thuật toán nào được sử dụng để dự đoán giá trị liên tục trong học máy?",
      options: [
        "Hồi quy tuyến tính",
        "K-means clustering",
        "Máy hỗ trợ vector",
        "Quyết định cây"
      ],
      correctAnswer: "Hồi quy tuyến tính"
    },
    {
      id: 18,
      question: "Thuật toán học máy nào thường được sử dụng trong phân loại văn bản?",
      options: [
        "Máy hỗ trợ vector (SVM)",
        "Hồi quy tuyến tính",
        "K-means clustering",
        "Học sâu"
      ],
      correctAnswer: "Máy hỗ trợ vector (SVM)"
    },
    {
      id: 19,
      question: "Một trong các ví dụ về học máy trong thực tế là gì?",
      options: [
        "Hệ thống khuyến nghị của Amazon",
        "Nhận diện khuôn mặt trong các ứng dụng bảo mật",
        "Chẩn đoán bệnh qua hình ảnh y khoa",
        "Tất cả các đáp án trên"
      ],
      correctAnswer: "Tất cả các đáp án trên"
    },
    {
      id: 20,
      question: "Học máy có thể được ứng dụng trong lĩnh vực nào dưới đây?",
      options: [
        "Y tế",
        "Ngành ô tô",
        "Tài chính",
        "Tất cả các đáp án trên"
      ],
      correctAnswer: "Tất cả các đáp án trên"
    }
  ];
  