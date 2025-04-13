import { QuizQuestion } from "@/app/types/quizData";

export const quizDTDM: QuizQuestion[] = [
    {
      id: 1,
      question: "Điện toán đám mây (Cloud Computing) là gì?",
      options: [
        "Lưu trữ và xử lý dữ liệu qua các máy tính cá nhân",
        "Lưu trữ và xử lý dữ liệu qua các máy chủ từ xa qua internet",
        "Chạy ứng dụng chỉ trên một máy chủ duy nhất",
        "Sử dụng các máy tính chỉ để phát triển phần mềm"
      ],
      correctAnswer: "Lưu trữ và xử lý dữ liệu qua các máy chủ từ xa qua internet"
    },
    {
      id: 2,
      question: "Mô hình dịch vụ nào trong điện toán đám mây cung cấp phần cứng và hệ điều hành?",
      options: [
        "IaaS (Infrastructure as a Service)",
        "PaaS (Platform as a Service)",
        "SaaS (Software as a Service)",
        "DaaS (Data as a Service)"
      ],
      correctAnswer: "IaaS (Infrastructure as a Service)"
    },
    {
      id: 3,
      question: "Mô hình PaaS trong điện toán đám mây cung cấp dịch vụ gì?",
      options: [
        "Chỉ cung cấp phần cứng và hệ điều hành",
        "Cung cấp nền tảng để phát triển và triển khai ứng dụng",
        "Cung cấp phần mềm ứng dụng sẵn có",
        "Cung cấp các dịch vụ mạng"
      ],
      correctAnswer: "Cung cấp nền tảng để phát triển và triển khai ứng dụng"
    },
    {
      id: 4,
      question: "Mô hình SaaS trong điện toán đám mây cung cấp dịch vụ gì?",
      options: [
        "Cung cấp phần cứng và nền tảng phần mềm",
        "Cung cấp phần mềm ứng dụng sẵn có",
        "Cung cấp các dịch vụ lưu trữ dữ liệu",
        "Cung cấp nền tảng để phát triển ứng dụng"
      ],
      correctAnswer: "Cung cấp phần mềm ứng dụng sẵn có"
    },
    {
      id: 5,
      question: "Điều nào dưới đây là lợi ích của điện toán đám mây?",
      options: [
        "Tiết kiệm chi phí về phần cứng",
        "Giảm thời gian phát triển phần mềm",
        "Cải thiện tính sẵn sàng và khả năng mở rộng",
        "Tất cả các đáp án trên"
      ],
      correctAnswer: "Tất cả các đáp án trên"
    },
    {
      id: 6,
      question: "Cloud computing giúp doanh nghiệp đạt được điều gì?",
      options: [
        "Giảm chi phí vận hành và cơ sở hạ tầng",
        "Tăng cường bảo mật và tuân thủ pháp lý",
        "Dễ dàng mở rộng quy mô dịch vụ",
        "Tất cả các đáp án trên"
      ],
      correctAnswer: "Tất cả các đáp án trên"
    },
    {
      id: 7,
      question: "Amazon Web Services (AWS) là một ví dụ của dịch vụ nào trong điện toán đám mây?",
      options: [
        "IaaS (Infrastructure as a Service)",
        "PaaS (Platform as a Service)",
        "SaaS (Software as a Service)",
        "DaaS (Data as a Service)"
      ],
      correctAnswer: "IaaS (Infrastructure as a Service)"
    },
    {
      id: 8,
      question: "Điều nào dưới đây không phải là một ví dụ của PaaS?",
      options: [
        "Google App Engine",
        "Microsoft Azure",
        "Amazon EC2",
        "Heroku"
      ],
      correctAnswer: "Amazon EC2"
    },
    {
      id: 9,
      question: "Điện toán đám mây có thể giúp các doanh nghiệp trong việc quản lý như thế nào?",
      options: [
        "Giảm chi phí hạ tầng IT",
        "Cải thiện khả năng truy cập dữ liệu và ứng dụng từ mọi nơi",
        "Dễ dàng mở rộng tài nguyên IT khi cần thiết",
        "Tất cả các đáp án trên"
      ],
      correctAnswer: "Tất cả các đáp án trên"
    },
    {
      id: 10,
      question: "Dịch vụ nào dưới đây cung cấp SaaS (Software as a Service)?",
      options: [
        "Google Drive",
        "AWS EC2",
        "Azure Virtual Machines",
        "Google Kubernetes Engine"
      ],
      correctAnswer: "Google Drive"
    },
    {
      id: 11,
      question: "Điện toán đám mây giúp giảm chi phí đầu tư vào các phần cứng, nhưng lại có thể gây rủi ro nào?",
      options: [
        "Rủi ro về bảo mật và quyền riêng tư",
        "Rủi ro về hiệu suất mạng",
        "Rủi ro về khả năng quản lý tài nguyên",
        "Rủi ro về sự ổn định của các ứng dụng"
      ],
      correctAnswer: "Rủi ro về bảo mật và quyền riêng tư"
    },
    {
      id: 12,
      question: "Điều nào dưới đây là một đặc điểm của điện toán đám mây công cộng?",
      options: [
        "Doanh nghiệp sở hữu toàn bộ hạ tầng",
        "Hạ tầng được chia sẻ giữa nhiều người dùng",
        "Ứng dụng chỉ có thể chạy trong một khu vực địa lý cố định",
        "Không thể mở rộng tài nguyên khi cần thiết"
      ],
      correctAnswer: "Hạ tầng được chia sẻ giữa nhiều người dùng"
    },
    {
      id: 13,
      question: "Điện toán đám mây riêng (Private Cloud) có gì khác biệt so với đám mây công cộng?",
      options: [
        "Đám mây riêng chỉ được sử dụng bởi một tổ chức hoặc doanh nghiệp duy nhất",
        "Đám mây riêng có thể mở rộng không giới hạn",
        "Đám mây riêng dễ dàng truy cập qua internet",
        "Đám mây riêng sử dụng phần cứng do các nhà cung cấp công cộng cung cấp"
      ],
      correctAnswer: "Đám mây riêng chỉ được sử dụng bởi một tổ chức hoặc doanh nghiệp duy nhất"
    },
    {
      id: 14,
      question: "Điện toán đám mây hybrid kết hợp giữa đám mây nào dưới đây?",
      options: [
        "Đám mây công cộng và đám mây riêng",
        "Đám mây công cộng và đám mây cộng đồng",
        "Đám mây riêng và đám mây cộng đồng",
        "Đám mây công cộng và các hệ thống lưu trữ trực tuyến"
      ],
      correctAnswer: "Đám mây công cộng và đám mây riêng"
    },
    {
      id: 15,
      question: "Câu nào dưới đây mô tả đúng nhất về IaaS (Infrastructure as a Service)?",
      options: [
        "Cung cấp phần mềm ứng dụng cho người dùng",
        "Cung cấp nền tảng phát triển ứng dụng",
        "Cung cấp phần cứng ảo hóa, mạng và lưu trữ qua internet",
        "Cung cấp các công cụ phân tích và xử lý dữ liệu"
      ],
      correctAnswer: "Cung cấp phần cứng ảo hóa, mạng và lưu trữ qua internet"
    },
    {
      id: 16,
      question: "Một trong các dịch vụ dưới đây là ví dụ của PaaS?",
      options: [
        "Google App Engine",
        "Amazon EC2",
        "Microsoft Azure",
        "IBM Watson"
      ],
      correctAnswer: "Google App Engine"
    },
    {
      id: 17,
      question: "Điện toán đám mây có thể cung cấp tài nguyên tính toán mà không cần phải làm gì?",
      options: [
        "Không cần phải đầu tư hạ tầng vật lý",
        "Không cần phải bảo mật dữ liệu",
        "Không cần phải đào tạo nhân viên",
        "Không cần phải cập nhật phần mềm"
      ],
      correctAnswer: "Không cần phải đầu tư hạ tầng vật lý"
    },
    {
      id: 18,
      question: "Điều nào dưới đây là một trong những yếu tố quan trọng khi chọn nhà cung cấp dịch vụ điện toán đám mây?",
      options: [
        "Chi phí và khả năng mở rộng",
        "Sự bảo mật và tuân thủ các quy định",
        "Khả năng phục hồi sau thảm họa",
        "Tất cả các đáp án trên"
      ],
      correctAnswer: "Tất cả các đáp án trên"
    },
    {
      id: 19,
      question: "Các dịch vụ điện toán đám mây có thể giúp các tổ chức doanh nghiệp làm gì?",
      options: [
        "Tiết kiệm chi phí và tài nguyên",
        "Cải thiện tính sẵn sàng và khả năng mở rộng",
        "Tăng cường khả năng chia sẻ tài nguyên",
        "Tất cả các đáp án trên"
      ],
      correctAnswer: "Tất cả các đáp án trên"
    },
    {
      id: 20,
      question: "Điện toán đám mây có thể giúp doanh nghiệp trong việc triển khai phần mềm như thế nào?",
      options: [
        "Tăng tốc quá trình triển khai và cập nhật phần mềm",
        "Chỉ có thể triển khai phần mềm trên hệ thống riêng",
        "Yêu cầu phần cứng riêng biệt cho mỗi ứng dụng",
        "Không hỗ trợ các ứng dụng đám mây"
      ],
      correctAnswer: "Tăng tốc quá trình triển khai và cập nhật phần mềm"
    }
  ];
  