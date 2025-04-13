import { QuizQuestion } from "@/app/types/quizData";

export const quizDevOps: QuizQuestion[] = [
    {
      id: 1,
      question: "DevOps là gì?",
      options: [
        "Một phương pháp phát triển phần mềm giúp tăng cường hợp tác giữa phát triển và vận hành",
        "Một công cụ để quản lý cơ sở dữ liệu",
        "Một hệ điều hành mới",
        "Một loại phần mềm để kiểm tra lỗi"
      ],
      correctAnswer: "Một phương pháp phát triển phần mềm giúp tăng cường hợp tác giữa phát triển và vận hành"
    },
    {
      id: 2,
      question: "CI/CD trong DevOps là gì?",
      options: [
        "Continuous Integration và Continuous Deployment",
        "Continuous Intelligence và Continuous Delivery",
        "Continuous Integration và Continuous Distribution",
        "Continuous Integration và Cloud Deployment"
      ],
      correctAnswer: "Continuous Integration và Continuous Deployment"
    },
    {
      id: 3,
      question: "Mục tiêu chính của Continuous Integration (CI) là gì?",
      options: [
        "Tự động kiểm tra mã nguồn mỗi khi có thay đổi để phát hiện lỗi sớm",
        "Tự động triển khai phần mềm đến môi trường sản xuất",
        "Kiểm tra tính năng của phần mềm",
        "Tạo môi trường phát triển"
      ],
      correctAnswer: "Tự động kiểm tra mã nguồn mỗi khi có thay đổi để phát hiện lỗi sớm"
    },
    {
      id: 4,
      question: "Mục tiêu chính của Continuous Delivery (CD) là gì?",
      options: [
        "Tự động triển khai phần mềm đến môi trường sản xuất",
        "Kiểm tra mã nguồn của dự án",
        "Tạo các bản sao lưu của phần mềm",
        "Phân tích và báo cáo hiệu suất phần mềm"
      ],
      correctAnswer: "Tự động triển khai phần mềm đến môi trường sản xuất"
    },
    {
      id: 5,
      question: "Docker trong DevOps có công dụng gì?",
      options: [
        "Tạo ra các container giúp cô lập và triển khai ứng dụng dễ dàng hơn",
        "Tạo các bản sao lưu của cơ sở dữ liệu",
        "Giám sát hoạt động hệ thống",
        "Quản lý các dịch vụ mạng"
      ],
      correctAnswer: "Tạo ra các container giúp cô lập và triển khai ứng dụng dễ dàng hơn"
    },
    {
      id: 6,
      question: "Kubernetes được sử dụng để làm gì trong DevOps?",
      options: [
        "Quản lý và triển khai các container ứng dụng",
        "Giám sát hiệu suất phần mềm",
        "Quản lý cơ sở dữ liệu",
        "Tạo giao diện người dùng"
      ],
      correctAnswer: "Quản lý và triển khai các container ứng dụng"
    },
    {
      id: 7,
      question: "Công cụ nào thường được sử dụng trong DevOps để quản lý cấu hình?",
      options: [
        "Ansible",
        "MongoDB",
        "ReactJS",
        "Django"
      ],
      correctAnswer: "Ansible"
    },
    {
      id: 8,
      question: "GitOps là gì?",
      options: [
        "Một phương pháp để triển khai và quản lý các ứng dụng sử dụng Git làm nguồn quản lý cấu hình",
        "Một công cụ quản lý mã nguồn",
        "Một phần mềm giám sát hệ thống",
        "Một kỹ thuật lập trình"
      ],
      correctAnswer: "Một phương pháp để triển khai và quản lý các ứng dụng sử dụng Git làm nguồn quản lý cấu hình"
    },
    {
      id: 9,
      question: "Terraform là gì trong DevOps?",
      options: [
        "Công cụ mã hóa cơ sở hạ tầng dưới dạng mã nguồn",
        "Công cụ triển khai phần mềm",
        "Công cụ kiểm tra bảo mật",
        "Công cụ giám sát hiệu suất"
      ],
      correctAnswer: "Công cụ mã hóa cơ sở hạ tầng dưới dạng mã nguồn"
    },
    {
      id: 10,
      question: "Một trong những nguyên lý chính của DevOps là gì?",
      options: [
        "Tự động hóa quy trình để giảm thiểu công sức thủ công",
        "Tăng cường bảo mật",
        "Chỉ sử dụng một ngôn ngữ lập trình duy nhất",
        "Làm việc độc lập giữa nhóm phát triển và nhóm vận hành"
      ],
      correctAnswer: "Tự động hóa quy trình để giảm thiểu công sức thủ công"
    },
    {
      id: 11,
      question: "Một trong các công cụ phổ biến trong DevOps để tự động hóa kiểm thử là gì?",
      options: [
        "Jenkins",
        "SQL Server",
        "Postman",
        "WordPress"
      ],
      correctAnswer: "Jenkins"
    },
    {
      id: 12,
      question: "Mục tiêu của việc triển khai tự động trong DevOps là gì?",
      options: [
        "Giảm thiểu thời gian phát triển và giúp phần mềm được triển khai nhanh chóng và liên tục",
        "Tạo thêm môi trường phát triển",
        "Tăng số lượng phần mềm được triển khai",
        "Giảm thiểu số lượng mã nguồn"
      ],
      correctAnswer: "Giảm thiểu thời gian phát triển và giúp phần mềm được triển khai nhanh chóng và liên tục"
    },
    {
      id: 13,
      question: "Cloud computing trong DevOps giúp gì?",
      options: [
        "Cung cấp các dịch vụ hạ tầng linh hoạt cho việc triển khai và vận hành phần mềm",
        "Tạo ra các ứng dụng di động",
        "Tối ưu hóa mã nguồn phần mềm",
        "Giám sát hiệu suất phần mềm"
      ],
      correctAnswer: "Cung cấp các dịch vụ hạ tầng linh hoạt cho việc triển khai và vận hành phần mềm"
    },
    {
      id: 14,
      question: "CI/CD pipeline trong DevOps giúp gì?",
      options: [
        "Tự động hóa các bước phát triển phần mềm từ kiểm tra mã nguồn đến triển khai phần mềm",
        "Tạo các môi trường phát triển mới",
        "Giám sát hiệu suất phần mềm",
        "Phân tích và tối ưu hóa mã nguồn"
      ],
      correctAnswer: "Tự động hóa các bước phát triển phần mềm từ kiểm tra mã nguồn đến triển khai phần mềm"
    },
    {
      id: 15,
      question: "Kỹ thuật nào trong DevOps giúp giảm thiểu rủi ro khi triển khai phần mềm?",
      options: [
        "Blue-Green Deployment",
        "Single Deployment",
        "Fast Deployment",
        "Monolithic Deployment"
      ],
      correctAnswer: "Blue-Green Deployment"
    },
    {
      id: 16,
      question: "Một trong các công cụ giám sát phổ biến trong DevOps là gì?",
      options: [
        "Prometheus",
        "MySQL",
        "Django",
        "Nginx"
      ],
      correctAnswer: "Prometheus"
    },
    {
      id: 17,
      question: "Trong DevOps, phương pháp nào giúp giảm thiểu sự cố khi có thay đổi phần mềm?",
      options: [
        "Canary Releases",
        "Full Deployments",
        "Rolling Updates",
        "Cold Deployments"
      ],
      correctAnswer: "Canary Releases"
    },
    {
      id: 18,
      question: "DevOps giúp giải quyết vấn đề gì?",
      options: [
        "Làm cho quá trình phát triển phần mềm nhanh hơn và ít rủi ro hơn",
        "Tạo ra phần mềm miễn phí",
        "Giúp cải thiện hiệu suất của cơ sở dữ liệu",
        "Làm cho các ứng dụng chạy trên tất cả các hệ điều hành"
      ],
      correctAnswer: "Làm cho quá trình phát triển phần mềm nhanh hơn và ít rủi ro hơn"
    },
    {
      id: 19,
      question: "Một trong các công cụ phổ biến trong DevOps để quản lý container là gì?",
      options: [
        "Docker",
        "Angular",
        "React",
        "MongoDB"
      ],
      correctAnswer: "Docker"
    },
    {
      id: 20,
      question: "Khi nào DevOps nên được áp dụng trong một dự án phần mềm?",
      options: [
        "Khi có nhu cầu tự động hóa quy trình phát triển và triển khai phần mềm",
        "Khi phát triển phần mềm truyền thống",
        "Khi chỉ cần triển khai phần mềm",
        "Khi không cần kiểm tra phần mềm"
      ],
      correctAnswer: "Khi có nhu cầu tự động hóa quy trình phát triển và triển khai phần mềm"
    }
  ];
  