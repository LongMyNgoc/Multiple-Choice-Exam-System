import { QuizQuestion } from "@/app/types/quiz";

export const quizDHMT: QuizQuestion[] = [
    {
      id: 1,
      question: "Đồ họa máy tính là gì?",
      options: [
        "Là ngành nghiên cứu về máy tính và phần mềm xử lý hình ảnh.",
        "Là ngành nghiên cứu về cách xây dựng các mô hình 3D và hình ảnh động.",
        "Là ngành nghiên cứu về hệ thống điều khiển máy tính.",
        "Là ngành nghiên cứu về cách xử lý âm thanh trong máy tính."
      ],
      correctAnswer: "Là ngành nghiên cứu về máy tính và phần mềm xử lý hình ảnh."
    },
    {
      id: 2,
      question: "Công nghệ nào dùng để hiển thị đồ họa 3D trên máy tính?",
      options: [
        "OpenGL",
        "DirectX",
        "Vulkan",
        "Tất cả các đáp án trên"
      ],
      correctAnswer: "Tất cả các đáp án trên"
    },
    {
      id: 3,
      question: "Trong đồ họa máy tính, từ khóa 'rendering' có nghĩa là gì?",
      options: [
        "Chuyển đổi mô hình 3D thành hình ảnh 2D.",
        "Tạo ra mô hình 3D từ hình ảnh 2D.",
        "Cải thiện độ phân giải của hình ảnh.",
        "Lưu trữ hình ảnh trong bộ nhớ."
      ],
      correctAnswer: "Chuyển đổi mô hình 3D thành hình ảnh 2D."
    },
    {
      id: 4,
      question: "Thuật toán nào thường được sử dụng để vẽ một đoạn thẳng trong đồ họa máy tính?",
      options: [
        "Thuật toán Bresenham",
        "Thuật toán DDA",
        "Thuật toán Midpoint",
        "Cả A và B"
      ],
      correctAnswer: "Cả A và B"
    },
    {
      id: 5,
      question: "Trong đồ họa máy tính, thuật ngữ 'texture mapping' có nghĩa là gì?",
      options: [
        "Gán hình ảnh lên bề mặt của một mô hình 3D.",
        "Thay đổi màu sắc của các điểm ảnh.",
        "Tạo hiệu ứng ánh sáng trên mô hình.",
        "Xử lý các điểm ảnh để giảm độ phân giải."
      ],
      correctAnswer: "Gán hình ảnh lên bề mặt của một mô hình 3D."
    },
    {
      id: 6,
      question: "Để hiển thị đồ họa trên màn hình, chúng ta thường sử dụng API nào?",
      options: [
        "OpenGL",
        "DirectX",
        "WebGL",
        "Tất cả các đáp án trên"
      ],
      correctAnswer: "Tất cả các đáp án trên"
    },
    {
      id: 7,
      question: "Trong đồ họa 3D, thuật ngữ 'shading' có nghĩa là gì?",
      options: [
        "Áp dụng màu sắc cho các đối tượng 3D.",
        "Điều chỉnh ánh sáng và bóng đổ trên bề mặt của đối tượng.",
        "Thay đổi hình dạng của đối tượng.",
        "Chỉnh sửa vị trí của các đối tượng trong không gian."
      ],
      correctAnswer: "Điều chỉnh ánh sáng và bóng đổ trên bề mặt của đối tượng."
    },
    {
      id: 8,
      question: "Phương pháp nào được sử dụng để vẽ các đối tượng 3D lên màn hình 2D?",
      options: [
        "Phép chiếu (Projection)",
        "Chuyển đổi hình học (Transformation)",
        "Phép biến hình (Warping)",
        "Cả A và B"
      ],
      correctAnswer: "Cả A và B"
    },
    {
      id: 9,
      question: "Hàm nào trong OpenGL được sử dụng để thiết lập góc nhìn của máy ảnh?",
      options: [
        "glOrtho()",
        "gluPerspective()",
        "glRotatef()",
        "glLookAt()"
      ],
      correctAnswer: "gluPerspective()"
    },
    {
      id: 10,
      question: "Trong đồ họa máy tính, thuật ngữ 'z-buffering' được sử dụng để làm gì?",
      options: [
        "Đảm bảo độ chính xác của phép chiếu.",
        "Quản lý thứ tự các đối tượng khi vẽ.",
        "Xử lý ánh sáng và bóng đổ.",
        "Tối ưu hóa độ phân giải của hình ảnh."
      ],
      correctAnswer: "Quản lý thứ tự các đối tượng khi vẽ."
    },
    {
      id: 11,
      question: "Trong đồ họa máy tính, thuật toán 'Phong shading' được sử dụng để gì?",
      options: [
        "Mô phỏng ánh sáng và bóng đổ.",
        "Áp dụng màu sắc cho bề mặt.",
        "Tạo hiệu ứng chuyển động.",
        "Cải thiện độ phân giải."
      ],
      correctAnswer: "Mô phỏng ánh sáng và bóng đổ."
    },
    {
      id: 12,
      question: "Trong mô hình đồ họa 3D, hệ tọa độ nào thường được sử dụng?",
      options: [
        "Tọa độ Cartesian",
        "Tọa độ Cylindrical",
        "Tọa độ Polar",
        "Tọa độ Homogeneous"
      ],
      correctAnswer: "Tọa độ Homogeneous"
    },
    {
      id: 13,
      question: "Trong đồ họa máy tính, 'ray tracing' là gì?",
      options: [
        "Một phương pháp mô phỏng ánh sáng bằng cách theo dõi các tia ánh sáng.",
        "Một phương pháp để tạo ra các mô hình 3D.",
        "Một kỹ thuật cải thiện hiệu suất rendering.",
        "Một thuật toán để giảm độ phân giải hình ảnh."
      ],
      correctAnswer: "Một phương pháp mô phỏng ánh sáng bằng cách theo dõi các tia ánh sáng."
    },
    {
      id: 14,
      question: "Thuật toán nào trong đồ họa máy tính dùng để vẽ đường tròn?",
      options: [
        "Thuật toán Midpoint",
        "Thuật toán Bresenham",
        "Thuật toán DDA",
        "Cả A và B"
      ],
      correctAnswer: "Cả A và B"
    },
    {
      id: 15,
      question: "Trong đồ họa máy tính, 'clipping' là gì?",
      options: [
        "Chọn lọc các đối tượng để hiển thị trên màn hình.",
        "Điều chỉnh độ sáng của các đối tượng.",
        "Xử lý các đối tượng 3D để chuyển thành 2D.",
        "Cải thiện tốc độ hiển thị hình ảnh."
      ],
      correctAnswer: "Chọn lọc các đối tượng để hiển thị trên màn hình."
    },
    {
      id: 16,
      question: "Thuật toán nào được sử dụng để vẽ các mặt phẳng trong không gian 3D?",
      options: [
        "Thuật toán Phép chiếu Perspectiv",
        "Thuật toán Plane Clipping",
        "Thuật toán Shading",
        "Thuật toán Vẽ Tường"
      ],
      correctAnswer: "Thuật toán Plane Clipping"
    },
    {
      id: 17,
      question: "Trong OpenGL, hàm nào được sử dụng để tạo một cửa sổ vẽ?",
      options: [
        "glCreateWindow()",
        "glutCreateWindow()",
        "glWindow()",
        "createOpenGL()"
      ],
      correctAnswer: "glutCreateWindow()"
    },
    {
      id: 18,
      question: "Để thay đổi vị trí của đối tượng trong không gian 3D trong OpenGL, ta sử dụng hàm nào?",
      options: [
        "glTranslate()",
        "glRotate()",
        "glScale()",
        "Tất cả các đáp án trên"
      ],
      correctAnswer: "Tất cả các đáp án trên"
    },
    {
      id: 19,
      question: "Công nghệ nào dưới đây được sử dụng để tạo mô phỏng thực tế trong đồ họa máy tính?",
      options: [
        "Virtual Reality",
        "Augmented Reality",
        "Ray Tracing",
        "Cả A và B"
      ],
      correctAnswer: "Cả A và B"
    },
    {
      id: 20,
      question: "Hàm nào dưới đây trong OpenGL được sử dụng để thay đổi kích thước của đối tượng?",
      options: [
        "glScale()",
        "glZoom()",
        "glResize()",
        "glResizeObject()"
      ],
      correctAnswer: "glScale()"
    }
  ];
  