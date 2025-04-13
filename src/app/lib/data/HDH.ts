import { QuizQuestion } from "@/app/types/quizData";

export const quizHDH: QuizQuestion[] = [
    {
      id: 1,
      question: "Hệ điều hành là gì?",
      options: [
        "Một phần mềm hệ thống quản lý phần cứng và phần mềm",
        "Một loại phần cứng điều khiển các thiết bị",
        "Một phần mềm chạy trên trình duyệt web",
        "Một chương trình duyệt virus"
      ],
      correctAnswer: "Một phần mềm hệ thống quản lý phần cứng và phần mềm"
    },
    {
      id: 2,
      question: "Chức năng chính của hệ điều hành là gì?",
      options: [
        "Quản lý tài nguyên hệ thống",
        "Thiết kế giao diện web",
        "Biên dịch mã nguồn thành ngôn ngữ máy",
        "Duyệt internet nhanh hơn"
      ],
      correctAnswer: "Quản lý tài nguyên hệ thống"
    },
    {
      id: 3,
      question: "Thành phần nào của hệ điều hành chịu trách nhiệm quản lý tiến trình?",
      options: [
        "Bộ lập lịch CPU",
        "Trình quản lý bộ nhớ",
        "Hệ thống tệp tin",
        "Trình quản lý thiết bị"
      ],
      correctAnswer: "Bộ lập lịch CPU"
    },
    {
      id: 4,
      question: "Loại hệ điều hành nào hỗ trợ nhiều người dùng truy cập cùng lúc?",
      options: [
        "Hệ điều hành đa nhiệm",
        "Hệ điều hành thời gian thực",
        "Hệ điều hành đơn nhiệm",
        "Hệ điều hành đa người dùng"
      ],
      correctAnswer: "Hệ điều hành đa người dùng"
    },
    {
      id: 5,
      question: "Quá trình chuyển đổi giữa hai tiến trình đang chạy gọi là gì?",
      options: [
        "Chuyển ngữ cảnh",
        "Đổi trạng thái tiến trình",
        "Đa nhiệm giả lập",
        "Lập lịch thời gian thực"
      ],
      correctAnswer: "Chuyển ngữ cảnh"
    },
    {
      id: 6,
      question: "Hệ điều hành nào phổ biến nhất hiện nay?",
      options: [
        "Windows",
        "Linux",
        "MacOS",
        "Android"
      ],
      correctAnswer: "Windows"
    },
    {
      id: 7,
      question: "Bảng phân trang trong bộ nhớ có nhiệm vụ gì?",
      options: [
        "Dịch địa chỉ logic sang địa chỉ vật lý",
        "Lưu trữ dữ liệu tạm thời",
        "Điều phối tiến trình",
        "Quản lý hệ thống tập tin"
      ],
      correctAnswer: "Dịch địa chỉ logic sang địa chỉ vật lý"
    },
    {
      id: 8,
      question: "Thuật toán nào dưới đây được dùng trong lập lịch CPU?",
      options: [
        "FCFS (First Come First Serve)",
        "FIFO (First In First Out)",
        "LIFO (Last In First Out)",
        "DFS (Depth First Search)"
      ],
      correctAnswer: "FCFS (First Come First Serve)"
    },
    {
      id: 9,
      question: "Trong hệ điều hành, Deadlock xảy ra khi nào?",
      options: [
        "Nhiều tiến trình chờ tài nguyên nhưng không thể tiếp tục thực thi",
        "Một tiến trình sử dụng quá nhiều bộ nhớ",
        "Lỗi phần cứng làm hệ thống bị treo",
        "Một tiến trình bị lỗi và bị hệ điều hành đóng lại"
      ],
      correctAnswer: "Nhiều tiến trình chờ tài nguyên nhưng không thể tiếp tục thực thi"
    },
    {
      id: 10,
      question: "Cơ chế nào giúp giảm thiểu tình trạng Deadlock?",
      options: [
        "Phòng tránh Deadlock",
        "Tăng tốc độ CPU",
        "Xóa toàn bộ tiến trình",
        "Giảm dung lượng ổ cứng"
      ],
      correctAnswer: "Phòng tránh Deadlock"
    },
    {
      id: 11,
      question: "Bộ nhớ ảo có tác dụng gì?",
      options: [
        "Cho phép sử dụng nhiều bộ nhớ hơn RAM vật lý",
        "Làm tăng tốc độ CPU",
        "Lưu trữ dữ liệu vĩnh viễn",
        "Giúp hệ điều hành bảo mật tốt hơn"
      ],
      correctAnswer: "Cho phép sử dụng nhiều bộ nhớ hơn RAM vật lý"
    },
    {
      id: 12,
      question: "Hệ thống tập tin nào được sử dụng trong Windows?",
      options: [
        "NTFS",
        "EXT4",
        "HFS+",
        "APFS"
      ],
      correctAnswer: "NTFS"
    },
    {
      id: 13,
      question: "Chế độ nào của CPU cho phép thực thi mã người dùng?",
      options: [
        "User Mode",
        "Kernel Mode",
        "Privileged Mode",
        "Supervisor Mode"
      ],
      correctAnswer: "User Mode"
    },
    {
      id: 14,
      question: "Lệnh nào được sử dụng để hiển thị danh sách tiến trình đang chạy trong Linux?",
      options: [
        "ps",
        "ls",
        "cd",
        "rm"
      ],
      correctAnswer: "ps"
    },
    {
      id: 15,
      question: "Hệ điều hành nào là mã nguồn mở?",
      options: [
        "Linux",
        "Windows",
        "MacOS",
        "iOS"
      ],
      correctAnswer: "Linux"
    },
    {
      id: 16,
      question: "Trong hệ điều hành, khái niệm 'thrashing' là gì?",
      options: [
        "Khi hệ thống sử dụng quá nhiều bộ nhớ ảo dẫn đến giảm hiệu suất",
        "Khi CPU chạy quá nhiều tiến trình cùng lúc",
        "Khi bộ nhớ bị lỗi",
        "Khi hệ điều hành không thể khởi động"
      ],
      correctAnswer: "Khi hệ thống sử dụng quá nhiều bộ nhớ ảo dẫn đến giảm hiệu suất"
    },
    {
      id: 17,
      question: "Lập lịch CPU dựa trên ưu tiên có thể dẫn đến vấn đề nào?",
      options: [
        "Starvation (tiến trình có mức ưu tiên thấp bị bỏ qua)",
        "Thrashing",
        "Deadlock",
        "Tăng hiệu suất hệ thống"
      ],
      correctAnswer: "Starvation (tiến trình có mức ưu tiên thấp bị bỏ qua)"
    },
    {
      id: 18,
      question: "Linux sử dụng hệ thống tập tin nào phổ biến?",
      options: [
        "EXT4",
        "NTFS",
        "FAT32",
        "APFS"
      ],
      correctAnswer: "EXT4"
    },
    {
      id: 19,
      question: "Chức năng chính của Kernel trong hệ điều hành là gì?",
      options: [
        "Quản lý tài nguyên hệ thống và điều phối tiến trình",
        "Hiển thị giao diện đồ họa",
        "Chạy ứng dụng người dùng",
        "Duyệt internet nhanh hơn"
      ],
      correctAnswer: "Quản lý tài nguyên hệ thống và điều phối tiến trình"
    },
    {
      id: 20,
      question: "Hệ điều hành thời gian thực (RTOS) được sử dụng trong lĩnh vực nào?",
      options: [
        "Điều khiển thiết bị nhúng",
        "Soạn thảo văn bản",
        "Chạy game",
        "Lập trình web"
      ],
      correctAnswer: "Điều khiển thiết bị nhúng"
    }
  ];
  