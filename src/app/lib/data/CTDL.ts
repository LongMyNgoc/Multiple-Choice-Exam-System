import { QuizQuestion } from "@/app/types/quiz";

export const quizCTDL: QuizQuestion[] = [
    {
      id: 1,
      question: "Cấu trúc dữ liệu nào hoạt động theo nguyên tắc LIFO?",
      options: ["Queue", "Stack", "Array", "Tree"],
      correctAnswer: "Stack"
    },
    {
      id: 2,
      question: "Cấu trúc dữ liệu nào hoạt động theo nguyên tắc FIFO?",
      options: ["Stack", "Queue", "Linked List", "Tree"],
      correctAnswer: "Queue"
    },
    {
      id: 3,
      question: "Cách khai báo node cho danh sách liên kết đơn:",
      options: [
        "struct Node { int data; Node* next; };",
        "struct Node { int data; Node next; };",
        "class Node { int data; Node* prev; };",
        "struct Node { int data; };"
      ],
      correctAnswer: "struct Node { int data; Node* next; };"
    },
    {
      id: 4,
      question: "Để thêm phần tử vào đầu danh sách liên kết đơn:",
      options: [
        "Thêm vào cuối danh sách",
        "Tạo node mới, trỏ next tới head",
        "Duyệt đến cuối rồi thêm",
        "Không thể thêm vào đầu"
      ],
      correctAnswer: "Tạo node mới, trỏ next tới head"
    },
    {
      id: 5,
      question: "Cấu trúc dữ liệu nào tốt nhất cho việc cài đặt đệ quy?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      correctAnswer: "Stack"
    },
    {
      id: 6,
      question: "Hàng đợi ưu tiên khác với hàng đợi thông thường ở điểm nào?",
      options: [
        "Có thể chứa nhiều loại dữ liệu",
        "Phần tử có độ ưu tiên được xử lý trước",
        "Không cần phải xếp hàng",
        "Không hỗ trợ xóa phần tử"
      ],
      correctAnswer: "Phần tử có độ ưu tiên được xử lý trước"
    },
    {
      id: 7,
      question: "Một cây nhị phân có tối đa bao nhiêu node ở mức thứ k (bắt đầu từ 0)?",
      options: ["k", "2^k", "2k", "k^2"],
      correctAnswer: "2^k"
    },
    {
      id: 8,
      question: "Traversal theo thứ tự NLR là thuật toán nào?",
      options: ["Inorder", "Preorder", "Postorder", "Level-order"],
      correctAnswer: "Preorder"
    },
    {
      id: 9,
      question: "Cây tìm kiếm nhị phân (BST) có đặc điểm gì?",
      options: [
        "Node trái < node gốc < node phải",
        "Tất cả node phải giống nhau",
        "Cây không có node gốc",
        "Không có node bên phải"
      ],
      correctAnswer: "Node trái < node gốc < node phải"
    },
    {
      id: 10,
      question: "Độ phức tạp tìm kiếm trung bình trong BST là gì?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
      correctAnswer: "O(log n)"
    },
    {
      id: 11,
      question: "Cấu trúc dữ liệu nào sử dụng đỉnh (vertex) và cạnh (edge)?",
      options: ["Stack", "Tree", "Graph", "Queue"],
      correctAnswer: "Graph"
    },
    {
      id: 12,
      question: "Thuật toán tìm kiếm theo chiều sâu là:",
      options: ["DFS", "BFS", "Dijkstra", "Kruskal"],
      correctAnswer: "DFS"
    },
    {
      id: 13,
      question: "BFS sử dụng cấu trúc dữ liệu nào để duyệt?",
      options: ["Stack", "Queue", "Array", "Tree"],
      correctAnswer: "Queue"
    },
    {
      id: 14,
      question: "Đệ quy là gì?",
      options: [
        "Một dạng vòng lặp",
        "Hàm gọi lại chính nó",
        "Kỹ thuật dùng biến toàn cục",
        "Cách khai báo biến"
      ],
      correctAnswer: "Hàm gọi lại chính nó"
    },
    {
      id: 15,
      question: "Điều kiện dừng trong đệ quy được gọi là gì?",
      options: ["Điều kiện sai", "Điều kiện lặp", "Điểm kết thúc", "Điều kiện cơ bản"],
      correctAnswer: "Điều kiện cơ bản"
    },
    {
      id: 16,
      question: "Cách biểu diễn đồ thị nào không phụ thuộc vào số lượng cạnh?",
      options: ["Danh sách kề", "Ma trận kề", "Cây", "Mảng"],
      correctAnswer: "Danh sách kề"
    },
    {
      id: 17,
      question: "Một cây nhị phân đầy đủ có đặc điểm gì?",
      options: [
        "Chỉ có một node",
        "Mỗi node có 0 hoặc 2 node con",
        "Mỗi node có nhiều hơn 2 node con",
        "Không có node lá"
      ],
      correctAnswer: "Mỗi node có 0 hoặc 2 node con"
    },
    {
      id: 18,
      question: "Heap là:",
      options: [
        "Một mảng được sắp xếp",
        "Cấu trúc dữ liệu dạng cây",
        "Danh sách liên kết",
        "Một thuật toán"
      ],
      correctAnswer: "Cấu trúc dữ liệu dạng cây"
    },
    {
      id: 19,
      question: "Độ phức tạp của tìm kiếm tuyến tính (linear search) là:",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      correctAnswer: "O(n)"
    },
    {
      id: 20,
      question: "Thuật toán sắp xếp nào sau đây là sắp xếp chia để trị?",
      options: ["Bubble Sort", "Merge Sort", "Insertion Sort", "Selection Sort"],
      correctAnswer: "Merge Sort"
    }
  ];
  