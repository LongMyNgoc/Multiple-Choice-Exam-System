import { QuizQuestion } from "@/app/types/quiz";
export const quizHTVTT: QuizQuestion[] = [
    {
      id: 1,
      question: "Hệ thống gợi ý (Recommendation System) là gì?",
      options: [
        "Là hệ thống giúp phân tích dữ liệu và đưa ra các dự đoán về hành vi của người dùng.",
        "Là hệ thống giúp người dùng tìm kiếm thông tin.",
        "Là hệ thống giúp lưu trữ và quản lý thông tin.",
        "Là hệ thống giúp người dùng tối ưu hóa các giao dịch trực tuyến."
      ],
      correctAnswer: "Là hệ thống giúp phân tích dữ liệu và đưa ra các dự đoán về hành vi của người dùng."
    },
    {
      id: 2,
      question: "Hệ thống gợi ý sử dụng phương pháp nào để dự đoán sở thích của người dùng?",
      options: [
        "Phân tích hành vi người dùng",
        "Khai phá dữ liệu",
        "Học máy",
        "Tất cả các phương pháp trên"
      ],
      correctAnswer: "Tất cả các phương pháp trên"
    },
    {
      id: 3,
      question: "Các loại hệ thống gợi ý chính bao gồm:",
      options: [
        "Hệ thống gợi ý dựa trên nội dung (Content-Based)",
        "Hệ thống gợi ý dựa trên cộng đồng (Collaborative-Based)",
        "Hệ thống gợi ý lai (Hybrid)",
        "Tất cả các loại trên"
      ],
      correctAnswer: "Tất cả các loại trên"
    },
    {
      id: 4,
      question: "Hệ thống gợi ý dựa trên nội dung (Content-Based) sử dụng gì để gợi ý sản phẩm?",
      options: [
        "Các thông tin về sản phẩm giống nhau.",
        "Các mối quan hệ giữa người dùng và sản phẩm.",
        "Các yếu tố từ dữ liệu người dùng.",
        "Các thông tin từ các người dùng khác."
      ],
      correctAnswer: "Các thông tin về sản phẩm giống nhau."
    },
    {
      id: 5,
      question: "Hệ thống gợi ý dựa trên cộng đồng (Collaborative Filtering) sử dụng gì để đưa ra gợi ý?",
      options: [
        "Sở thích của người dùng khác giống nhau.",
        "Chỉ sử dụng thông tin về sản phẩm.",
        "Thông tin từ các tìm kiếm của người dùng.",
        "Thông tin dựa trên hành vi cá nhân của người dùng."
      ],
      correctAnswer: "Sở thích của người dùng khác giống nhau."
    },
    {
      id: 6,
      question: "Hệ thống gợi ý lai (Hybrid) kết hợp các phương pháp nào?",
      options: [
        "Phương pháp dựa trên nội dung và phương pháp dựa trên cộng đồng.",
        "Phương pháp học sâu và học máy.",
        "Phương pháp dữ liệu lớn và khai phá dữ liệu.",
        "Phương pháp thống kê và phân tích hành vi."
      ],
      correctAnswer: "Phương pháp dựa trên nội dung và phương pháp dựa trên cộng đồng."
    },
    {
      id: 7,
      question: "Một trong các thách thức chính của hệ thống gợi ý là gì?",
      options: [
        "Đảm bảo tính chính xác của gợi ý.",
        "Tiết kiệm chi phí hệ thống.",
        "Cung cấp các gợi ý ngẫu nhiên.",
        "Tăng tốc độ phản hồi của hệ thống."
      ],
      correctAnswer: "Đảm bảo tính chính xác của gợi ý."
    },
    {
      id: 8,
      question: "Hệ thống gợi ý có thể sử dụng dữ liệu nào để cải thiện chất lượng gợi ý?",
      options: [
        "Dữ liệu hành vi người dùng.",
        "Dữ liệu sản phẩm.",
        "Dữ liệu từ các đánh giá của người dùng.",
        "Tất cả các loại dữ liệu trên."
      ],
      correctAnswer: "Tất cả các loại dữ liệu trên."
    },
    {
      id: 9,
      question: "Hệ thống gợi ý có thể bị ảnh hưởng bởi vấn đề gì?",
      options: [
        "Cold start problem (vấn đề khởi động lạnh)",
        "Overfitting (quá khớp)",
        "Bias (thiên vị)",
        "Tất cả các vấn đề trên"
      ],
      correctAnswer: "Tất cả các vấn đề trên"
    },
    {
      id: 10,
      question: "Phương pháp nào dưới đây được sử dụng trong hệ thống gợi ý collaborative filtering?",
      options: [
        "User-Item Filtering",
        "Item-Item Filtering",
        "Matrix Factorization",
        "Tất cả các phương pháp trên"
      ],
      correctAnswer: "Tất cả các phương pháp trên"
    },
    {
      id: 11,
      question: "Vấn đề cold start trong hệ thống gợi ý xảy ra khi nào?",
      options: [
        "Khi người dùng mới bắt đầu sử dụng hệ thống và chưa có đủ dữ liệu.",
        "Khi dữ liệu sản phẩm không đầy đủ.",
        "Khi hệ thống không thể phân loại dữ liệu người dùng.",
        "Khi người dùng không sử dụng hệ thống trong thời gian dài."
      ],
      correctAnswer: "Khi người dùng mới bắt đầu sử dụng hệ thống và chưa có đủ dữ liệu."
    },
    {
      id: 12,
      question: "Phương pháp nào giúp giảm vấn đề cold start trong hệ thống gợi ý?",
      options: [
        "Sử dụng thông tin từ các nguồn ngoài.",
        "Sử dụng thông tin chung chung từ các người dùng khác.",
        "Sử dụng kỹ thuật học sâu.",
        "Tất cả các phương pháp trên."
      ],
      correctAnswer: "Tất cả các phương pháp trên."
    },
    {
      id: 13,
      question: "Kỹ thuật nào sau đây thường được sử dụng trong các hệ thống gợi ý dựa trên nội dung?",
      options: [
        "Phân tích mô tả sản phẩm.",
        "Phân tích lịch sử người dùng.",
        "Tính toán sự tương đồng giữa sản phẩm.",
        "Tất cả các phương pháp trên."
      ],
      correctAnswer: "Tất cả các phương pháp trên."
    },
    {
      id: 14,
      question: "Hệ thống gợi ý có thể sử dụng các loại dữ liệu nào?",
      options: [
        "Dữ liệu hành vi người dùng.",
        "Dữ liệu sản phẩm.",
        "Dữ liệu từ các mạng xã hội.",
        "Tất cả các loại dữ liệu trên."
      ],
      correctAnswer: "Tất cả các loại dữ liệu trên."
    },
    {
      id: 15,
      question: "Hệ thống gợi ý có thể cải thiện trải nghiệm người dùng như thế nào?",
      options: [
        "Cung cấp các gợi ý phù hợp với sở thích cá nhân.",
        "Giảm thiểu thời gian tìm kiếm sản phẩm.",
        "Cung cấp các đề xuất dựa trên hành vi và nhu cầu người dùng.",
        "Tất cả các cách trên."
      ],
      correctAnswer: "Tất cả các cách trên."
    },
    {
      id: 16,
      question: "Phương pháp nào dưới đây không phải là một kỹ thuật trong collaborative filtering?",
      options: [
        "Kỹ thuật phân tích đặc trưng người dùng (User Profiling)",
        "Kỹ thuật phân tích đánh giá sản phẩm",
        "Kỹ thuật phân tích mối quan hệ giữa các sản phẩm (Item Similarity)",
        "Kỹ thuật học máy hồi quy"
      ],
      correctAnswer: "Kỹ thuật học máy hồi quy"
    },
    {
      id: 17,
      question: "Tại sao việc đánh giá chất lượng gợi ý rất quan trọng trong hệ thống gợi ý?",
      options: [
        "Để đảm bảo các gợi ý chính xác và phù hợp với nhu cầu người dùng.",
        "Để tăng khả năng tương tác của người dùng với hệ thống.",
        "Để giảm thiểu chi phí vận hành hệ thống.",
        "Cả A và B."
      ],
      correctAnswer: "Cả A và B."
    },
    {
      id: 18,
      question: "Kỹ thuật nào dưới đây thường được sử dụng trong hệ thống gợi ý collaborative filtering?",
      options: [
        "Kỹ thuật K-nearest neighbor (KNN)",
        "Matrix Factorization",
        "Latent Factor Models",
        "Tất cả các kỹ thuật trên"
      ],
      correctAnswer: "Tất cả các kỹ thuật trên"
    },
    {
      id: 19,
      question: "Hệ thống gợi ý có thể ứng dụng trong các lĩnh vực nào?",
      options: [
        "Mua sắm trực tuyến",
        "Phim ảnh và âm nhạc",
        "Mạng xã hội",
        "Tất cả các lĩnh vực trên"
      ],
      correctAnswer: "Tất cả các lĩnh vực trên"
    },
    {
      id: 20,
      question: "Một trong những lợi ích chính của hệ thống gợi ý là gì?",
      options: [
        "Cải thiện trải nghiệm người dùng.",
        "Tăng doanh thu bán hàng.",
        "Giảm chi phí marketing.",
        "Tất cả các lợi ích trên."
      ],
      correctAnswer: "Tất cả các lợi ích trên"
    }
  ];
  