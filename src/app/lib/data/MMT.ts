import { QuizQuestion } from "@/app/types/quizData";

export const quizMMT: QuizQuestion[] = [
    {
      id: 1,
      question: "Mạng máy tính là gì?",
      options: [
        "Hệ thống kết nối giữa các thiết bị điện tử",
        "Hệ thống kết nối giữa các máy tính và thiết bị khác để chia sẻ dữ liệu",
        "Chỉ là một mạng Internet",
        "Hệ thống máy tính chỉ sử dụng để lưu trữ dữ liệu"
      ],
      correctAnswer: "Hệ thống kết nối giữa các máy tính và thiết bị khác để chia sẻ dữ liệu"
    },
    {
      id: 2,
      question: "Mạng LAN (Local Area Network) là gì?",
      options: [
        "Mạng kết nối các máy tính trong phạm vi rộng lớn như toàn cầu",
        "Mạng kết nối các máy tính trong phạm vi địa lý hạn chế như một tòa nhà hoặc văn phòng",
        "Mạng kết nối các máy tính qua vệ tinh",
        "Mạng kết nối các máy tính ở các khu vực nông thôn"
      ],
      correctAnswer: "Mạng kết nối các máy tính trong phạm vi địa lý hạn chế như một tòa nhà hoặc văn phòng"
    },
    {
      id: 3,
      question: "Mạng WAN (Wide Area Network) có phạm vi?",
      options: [
        "Mạng kết nối giữa các thiết bị trong cùng một tòa nhà",
        "Mạng kết nối các thiết bị trong khu vực địa lý rộng lớn như thành phố hoặc quốc gia",
        "Mạng kết nối các thiết bị chỉ trong một công ty",
        "Mạng chỉ kết nối các thiết bị trong một trường học"
      ],
      correctAnswer: "Mạng kết nối các thiết bị trong khu vực địa lý rộng lớn như thành phố hoặc quốc gia"
    },
    {
      id: 4,
      question: "Để xác định địa chỉ IP của một máy tính, chúng ta cần sử dụng?",
      options: [
        "Tên miền (Domain Name)",
        "Địa chỉ MAC",
        "Địa chỉ IP",
        "Port"
      ],
      correctAnswer: "Địa chỉ IP"
    },
    {
      id: 5,
      question: "Mã hóa trong mạng máy tính được sử dụng để làm gì?",
      options: [
        "Bảo vệ dữ liệu khỏi sự can thiệp từ bên ngoài",
        "Chuyển đổi tín hiệu giữa các thiết bị",
        "Tăng tốc độ truyền dữ liệu",
        "Cải thiện chất lượng âm thanh khi gọi điện"
      ],
      correctAnswer: "Bảo vệ dữ liệu khỏi sự can thiệp từ bên ngoài"
    },
    {
      id: 6,
      question: "Mô hình OSI (Open Systems Interconnection) có bao nhiêu lớp?",
      options: [
        "5 lớp",
        "6 lớp",
        "7 lớp",
        "8 lớp"
      ],
      correctAnswer: "7 lớp"
    },
    {
      id: 7,
      question: "Lớp nào trong mô hình OSI chịu trách nhiệm về việc định tuyến và truyền tải dữ liệu giữa các thiết bị trong mạng?",
      options: [
        "Lớp vật lý (Physical Layer)",
        "Lớp liên kết dữ liệu (Data Link Layer)",
        "Lớp mạng (Network Layer)",
        "Lớp ứng dụng (Application Layer)"
      ],
      correctAnswer: "Lớp mạng (Network Layer)"
    },
    {
      id: 8,
      question: "Giao thức nào dưới đây dùng để truyền tải dữ liệu trong mạng máy tính?",
      options: [
        "HTTP",
        "IP",
        "TCP",
        "Tất cả các giao thức trên"
      ],
      correctAnswer: "Tất cả các giao thức trên"
    },
    {
      id: 9,
      question: "Giao thức TCP/IP là gì?",
      options: [
        "Một giao thức mã hóa dữ liệu",
        "Một giao thức điều khiển và truyền tải dữ liệu trong mạng máy tính",
        "Một giao thức liên kết mạng",
        "Một giao thức để bảo mật thông tin"
      ],
      correctAnswer: "Một giao thức điều khiển và truyền tải dữ liệu trong mạng máy tính"
    },
    {
      id: 10,
      question: "Địa chỉ MAC (Media Access Control) được sử dụng để làm gì?",
      options: [
        "Xác định một thiết bị trong mạng",
        "Cung cấp dịch vụ mạng đến người dùng",
        "Xác định một máy chủ trong mạng",
        "Xác định tên miền của một website"
      ],
      correctAnswer: "Xác định một thiết bị trong mạng"
    },
    {
      id: 11,
      question: "Giao thức IP có nhiệm vụ gì?",
      options: [
        "Điều khiển luồng dữ liệu trong mạng",
        "Định tuyến và xác định địa chỉ máy tính trong mạng",
        "Mã hóa dữ liệu truyền tải qua mạng",
        "Tăng cường bảo mật trong mạng"
      ],
      correctAnswer: "Định tuyến và xác định địa chỉ máy tính trong mạng"
    },
    {
      id: 12,
      question: "Mô hình Client-Server trong mạng máy tính có đặc điểm gì?",
      options: [
        "Máy chủ cung cấp dịch vụ, máy khách yêu cầu dịch vụ",
        "Máy chủ chỉ yêu cầu dịch vụ từ các máy khách",
        "Cả máy chủ và máy khách đều không yêu cầu dịch vụ",
        "Không có sự phân biệt giữa máy chủ và máy khách"
      ],
      correctAnswer: "Máy chủ cung cấp dịch vụ, máy khách yêu cầu dịch vụ"
    },
    {
      id: 13,
      question: "Để kết nối các mạng máy tính với nhau, người ta thường sử dụng thiết bị nào?",
      options: [
        "Router",
        "Switch",
        "Hub",
        "Modem"
      ],
      correctAnswer: "Router"
    },
    {
      id: 14,
      question: "Giao thức DNS (Domain Name System) được sử dụng để làm gì?",
      options: [
        "Chuyển đổi địa chỉ IP thành tên miền",
        "Chuyển đổi tên miền thành địa chỉ IP",
        "Xác định một thiết bị trong mạng",
        "Đảm bảo dữ liệu được mã hóa trong mạng"
      ],
      correctAnswer: "Chuyển đổi tên miền thành địa chỉ IP"
    },
    {
      id: 15,
      question: "Giao thức HTTP được sử dụng chủ yếu trong ứng dụng nào?",
      options: [
        "Truyền tải dữ liệu giữa các máy tính trong mạng",
        "Truyền tải trang web qua internet",
        "Gửi email qua mạng",
        "Truyền tải các tệp âm thanh qua mạng"
      ],
      correctAnswer: "Truyền tải trang web qua internet"
    },
    {
      id: 16,
      question: "Mạng Wi-Fi là một loại mạng gì?",
      options: [
        "Mạng LAN không dây",
        "Mạng WAN không dây",
        "Mạng LAN có dây",
        "Mạng Internet"
      ],
      correctAnswer: "Mạng LAN không dây"
    },
    {
      id: 17,
      question: "Phương pháp nào dưới đây được sử dụng để chia sẻ một kết nối Internet trong mạng LAN?",
      options: [
        "Cổng mạng (Gateway)",
        "Router",
        "Switch",
        "Hub"
      ],
      correctAnswer: "Router"
    },
    {
      id: 18,
      question: "Giao thức SSL/TLS chủ yếu được sử dụng để làm gì trong mạng máy tính?",
      options: [
        "Mã hóa dữ liệu để bảo vệ quyền riêng tư",
        "Quản lý kết nối mạng",
        "Giám sát hoạt động mạng",
        "Chia sẻ tài nguyên trong mạng"
      ],
      correctAnswer: "Mã hóa dữ liệu để bảo vệ quyền riêng tư"
    },
    {
      id: 19,
      question: "Điều gì dưới đây là một loại giao thức điều khiển trong mạng?",
      options: [
        "FTP",
        "TCP",
        "DNS",
        "IP"
      ],
      correctAnswer: "TCP"
    },
    {
      id: 20,
      question: "Lớp nào trong mô hình TCP/IP đảm nhiệm việc chuyển đổi dữ liệu giữa các hệ thống mạng khác nhau?",
      options: [
        "Application Layer",
        "Transport Layer",
        "Internet Layer",
        "Link Layer"
      ],
      correctAnswer: "Internet Layer"
    }
  ];
  