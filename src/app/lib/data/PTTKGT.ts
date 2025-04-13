import { QuizQuestion } from "@/app/types/quizData";
  
export const quizPTTKGT: QuizQuestion[] = [
    {
      id: 1,
      question: "Định lý Big-O đo lường điều gì trong một giải thuật?",
      options: [
        "Thời gian thực thi của giải thuật",
        "Độ phức tạp về bộ nhớ của giải thuật",
        "Số lượng phép toán mà giải thuật thực hiện",
        "Tất cả các yếu tố trên"
      ],
      correctAnswer: "Tất cả các yếu tố trên"
    },
    {
      id: 2,
      question: "Định lý Big-O cho độ phức tạp thời gian của một giải thuật có thể là bao nhiêu?",
      options: [
        "O(1)",
        "O(n)",
        "O(n^2)",
        "Tất cả các câu trên"
      ],
      correctAnswer: "Tất cả các câu trên"
    },
    {
      id: 3,
      question: "Giải thuật tìm kiếm tuyến tính (linear search) có độ phức tạp thời gian là gì?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
      correctAnswer: "O(n)"
    },
    {
      id: 4,
      question: "Trong thuật toán sắp xếp nổi bọt (Bubble Sort), độ phức tạp thời gian tốt nhất là:",
      options: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
      correctAnswer: "O(n)"
    },
    {
      id: 5,
      question: "Thuật toán sắp xếp nhanh (Quick Sort) có độ phức tạp thời gian trung bình là:",
      options: ["O(n log n)", "O(n^2)", "O(log n)", "O(n)"],
      correctAnswer: "O(n log n)"
    },
    {
      id: 6,
      question: "Thuật toán nào có độ phức tạp tốt nhất trong trường hợp sắp xếp đã được thực hiện trước?",
      options: ["Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort"],
      correctAnswer: "Insertion Sort"
    },
    {
      id: 7,
      question: "Giải thuật tìm kiếm nhị phân (Binary Search) có điều kiện tiên quyết là gì?",
      options: [
        "Danh sách phải được sắp xếp",
        "Danh sách phải có ít nhất một phần tử",
        "Danh sách không chứa phần tử trùng lặp",
        "Danh sách phải được sắp xếp theo thứ tự giảm dần"
      ],
      correctAnswer: "Danh sách phải được sắp xếp"
    },
    {
      id: 8,
      question: "Độ phức tạp của thuật toán tìm kiếm nhị phân là:",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      correctAnswer: "O(log n)"
    },
    {
      id: 9,
      question: "Thuật toán Dijkstra được sử dụng để giải quyết bài toán nào?",
      options: [
        "Tìm kiếm nhị phân trong mảng",
        "Sắp xếp các phần tử trong danh sách",
        "Tìm đường đi ngắn nhất trong đồ thị",
        "Chia bài toán thành các bài toán con"
      ],
      correctAnswer: "Tìm đường đi ngắn nhất trong đồ thị"
    },
    {
      id: 10,
      question: "Giải thuật Merge Sort là một thuật toán:",
      options: [
        "Sắp xếp chèn",
        "Sắp xếp chia để trị",
        "Sắp xếp chọn",
        "Sắp xếp nổi bọt"
      ],
      correctAnswer: "Sắp xếp chia để trị"
    },
    {
      id: 11,
      question: "Độ phức tạp của thuật toán Merge Sort là:",
      options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
      correctAnswer: "O(n log n)"
    },
    {
      id: 12,
      question: "Giải thuật nào sau đây không phải là một thuật toán sắp xếp?",
      options: ["Merge Sort", "Quick Sort", "Heap Sort", "Binary Search"],
      correctAnswer: "Binary Search"
    },
    {
      id: 13,
      question: "Đặc điểm của thuật toán chia để trị (Divide and Conquer) là:",
      options: [
        "Chia bài toán thành các phần con",
        "Giải quyết các phần con độc lập",
        "Kết hợp các phần con lại để giải quyết bài toán ban đầu",
        "Tất cả các câu trên"
      ],
      correctAnswer: "Tất cả các câu trên"
    },
    {
      id: 14,
      question: "Một đặc điểm quan trọng của thuật toán tham lam (Greedy Algorithm) là:",
      options: [
        "Lựa chọn tối ưu tại mỗi bước mà không quan tâm đến các lựa chọn trong tương lai",
        "Chia bài toán thành các phần con",
        "Tìm kiếm đường đi ngắn nhất",
        "Tìm kiếm tất cả các giải pháp tối ưu"
      ],
      correctAnswer: "Lựa chọn tối ưu tại mỗi bước mà không quan tâm đến các lựa chọn trong tương lai"
    },
    {
      id: 15,
      question: "Giải thuật nào sử dụng cấu trúc cây nhị phân tìm kiếm (BST) trong tìm kiếm và sắp xếp?",
      options: ["Heap Sort", "Quick Sort", "Merge Sort", "Binary Search Tree Sort"],
      correctAnswer: "Binary Search Tree Sort"
    },
    {
      id: 16,
      question: "Thuật toán Floyd-Warshall được sử dụng để giải quyết bài toán gì?",
      options: [
        "Tìm đường đi ngắn nhất giữa tất cả các cặp đỉnh trong đồ thị",
        "Tìm đường đi ngắn nhất từ một đỉnh đến các đỉnh còn lại",
        "Tìm chu trình Euler trong đồ thị",
        "Tìm đường đi dài nhất trong đồ thị"
      ],
      correctAnswer: "Tìm đường đi ngắn nhất giữa tất cả các cặp đỉnh trong đồ thị"
    },
    {
      id: 17,
      question: "Giải thuật nào có thể sử dụng để giải quyết bài toán tìm kiếm tối ưu trong đồ thị không trọng số?",
      options: [
        "Dijkstra",
        "Bellman-Ford",
        "A*",
        "Breadth-First Search (BFS)"
      ],
      correctAnswer: "Breadth-First Search (BFS)"
    },
    {
      id: 18,
      question: "Một ưu điểm của thuật toán quy hoạch động (Dynamic Programming) là:",
      options: [
        "Lưu trữ các kết quả đã tính toán để tránh tính toán lại",
        "Giải quyết bài toán bằng cách phân chia thành các bài toán con độc lập",
        "Lựa chọn tối ưu tại mỗi bước",
        "Áp dụng thuật toán tham lam"
      ],
      correctAnswer: "Lưu trữ các kết quả đã tính toán để tránh tính toán lại"
    },
    {
      id: 19,
      question: "Thuật toán nào sau đây không phải là một thuật toán sắp xếp theo kiểu so sánh?",
      options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Counting Sort"],
      correctAnswer: "Counting Sort"
    },
    {
      id: 20,
      question: "Thuật toán nào sau đây có thể được sử dụng để sắp xếp mảng có số lượng phần tử lớn?",
      options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"],
      correctAnswer: "Quick Sort"
    }
  ];
  