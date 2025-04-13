import { QuizQuestion } from "@/app/types/quizData";

export const quizLTDT: QuizQuestion[] = [
    {
      id: 1,
      question: "Đồ thị nào dưới đây có các đỉnh và các cạnh mà các cạnh không có hướng?",
      options: [
        "Đồ thị có hướng",
        "Đồ thị vô hướng",
        "Đồ thị hướng kép",
        "Đồ thị chu trình"
      ],
      correctAnswer: "Đồ thị vô hướng"
    },
    {
      id: 2,
      question: "Trong một đồ thị, hai đỉnh được gọi là kề nhau nếu:",
      options: [
        "Chúng được kết nối bởi một cạnh",
        "Chúng không có cạnh nối",
        "Chúng thuộc cùng một tập đỉnh",
        "Chúng cùng có bậc bằng nhau"
      ],
      correctAnswer: "Chúng được kết nối bởi một cạnh"
    },
    {
      id: 3,
      question: "Bậc của một đỉnh trong đồ thị là gì?",
      options: [
        "Số lượng đỉnh mà đỉnh đó có thể kết nối",
        "Số lượng cạnh nối với đỉnh đó",
        "Số lượng cạnh có hướng từ đỉnh đó",
        "Số lượng đỉnh mà đỉnh đó không kết nối"
      ],
      correctAnswer: "Số lượng cạnh nối với đỉnh đó"
    },
    {
      id: 4,
      question: "Một đồ thị được gọi là cây nếu nó có những đặc điểm nào?",
      options: [
        "Đồ thị không có chu trình và kết nối tất cả các đỉnh",
        "Đồ thị có ít nhất một chu trình",
        "Đồ thị có hướng và có chu trình",
        "Đồ thị có ít nhất một đỉnh không có cạnh nối"
      ],
      correctAnswer: "Đồ thị không có chu trình và kết nối tất cả các đỉnh"
    },
    {
      id: 5,
      question: "Đặc điểm nào dưới đây của đồ thị không có chu trình?",
      options: [
        "Đồ thị có thể có hoặc không có cạnh",
        "Đồ thị luôn có ít nhất một chu trình",
        "Đồ thị không có chu trình gọi là đồ thị cây",
        "Đồ thị có chu trình nhỏ nhất là một cạnh"
      ],
      correctAnswer: "Đồ thị không có chu trình gọi là đồ thị cây"
    },
    {
      id: 6,
      question: "Trong đồ thị có hướng, cạnh nối từ đỉnh u đến đỉnh v được gọi là gì?",
      options: [
        "Cạnh vô hướng",
        "Cạnh có hướng",
        "Cạnh hai chiều",
        "Cạnh thuận tiện"
      ],
      correctAnswer: "Cạnh có hướng"
    },
    {
      id: 7,
      question: "Một đồ thị có hướng là đồ thị mà các cạnh của nó:",
      options: [
        "Có chiều",
        "Không có chiều",
        "Chỉ kết nối giữa các đỉnh khác nhau",
        "Có trọng số"
      ],
      correctAnswer: "Có chiều"
    },
    {
      id: 8,
      question: "Thuật toán nào được sử dụng để tìm đường đi ngắn nhất trong đồ thị có trọng số?",
      options: [
        "Thuật toán Dijkstra",
        "Thuật toán Kruskal",
        "Thuật toán Floyd-Warshall",
        "Thuật toán Prim"
      ],
      correctAnswer: "Thuật toán Dijkstra"
    },
    {
      id: 9,
      question: "Đồ thị nào dưới đây không có chu trình?",
      options: [
        "Đồ thị cây",
        "Đồ thị chu trình",
        "Đồ thị có hướng",
        "Đồ thị có chu trình lặp"
      ],
      correctAnswer: "Đồ thị cây"
    },
    {
      id: 10,
      question: "Thuật toán nào dưới đây dùng để tìm cây bao trùm nhỏ nhất trong đồ thị?",
      options: [
        "Thuật toán Dijkstra",
        "Thuật toán Kruskal",
        "Thuật toán Floyd-Warshall",
        "Thuật toán Bellman-Ford"
      ],
      correctAnswer: "Thuật toán Kruskal"
    },
    {
      id: 11,
      question: "Thuật toán nào dưới đây là thuật toán tìm kiếm trong đồ thị?",
      options: [
        "Thuật toán Tìm kiếm theo chiều rộng (BFS)",
        "Thuật toán Tìm kiếm theo chiều sâu (DFS)",
        "Cả A và B",
        "Thuật toán Dijkstra"
      ],
      correctAnswer: "Cả A và B"
    },
    {
      id: 12,
      question: "Cây nhị phân là gì?",
      options: [
        "Là cây trong đó mỗi đỉnh có tối đa hai đỉnh con",
        "Là cây trong đó mỗi đỉnh có ít nhất hai đỉnh con",
        "Là đồ thị có hướng và không có chu trình",
        "Là đồ thị có ít nhất một chu trình"
      ],
      correctAnswer: "Là cây trong đó mỗi đỉnh có tối đa hai đỉnh con"
    },
    {
      id: 13,
      question: "Cây bao trùm nhỏ nhất của đồ thị là gì?",
      options: [
        "Cây chứa tất cả các đỉnh và các cạnh có trọng số nhỏ nhất",
        "Cây chứa tất cả các đỉnh và có chiều dài nhỏ nhất",
        "Cây chứa tất cả các đỉnh và không có trọng số",
        "Cây có ít nhất một chu trình"
      ],
      correctAnswer: "Cây chứa tất cả các đỉnh và các cạnh có trọng số nhỏ nhất"
    },
    {
      id: 14,
      question: "Thuật toán nào dưới đây được sử dụng để tìm đường đi ngắn nhất giữa tất cả các cặp đỉnh trong đồ thị?",
      options: [
        "Thuật toán Dijkstra",
        "Thuật toán Floyd-Warshall",
        "Thuật toán Kruskal",
        "Thuật toán Prim"
      ],
      correctAnswer: "Thuật toán Floyd-Warshall"
    },
    {
      id: 15,
      question: "Đồ thị có hướng có đặc điểm gì?",
      options: [
        "Các cạnh có hướng, tức là từ một đỉnh này đến một đỉnh khác",
        "Các cạnh không có hướng, có thể đi ngược lại",
        "Các cạnh luôn có trọng số",
        "Các đỉnh chỉ có thể kết nối với chính nó"
      ],
      correctAnswer: "Các cạnh có hướng, tức là từ một đỉnh này đến một đỉnh khác"
    },
    {
      id: 16,
      question: "Để kiểm tra một đồ thị có chu trình hay không, ta có thể sử dụng thuật toán nào?",
      options: [
        "Thuật toán Tìm kiếm theo chiều rộng (BFS)",
        "Thuật toán Tìm kiếm theo chiều sâu (DFS)",
        "Thuật toán Dijkstra",
        "Thuật toán Kruskal"
      ],
      correctAnswer: "Thuật toán Tìm kiếm theo chiều sâu (DFS)"
    },
    {
      id: 17,
      question: "Mối quan hệ giữa số đỉnh (V) và số cạnh (E) trong một đồ thị vô hướng liên thông là gì?",
      options: [
        "E ≤ V - 1",
        "E ≥ V - 1",
        "E = V",
        "E = V - 1"
      ],
      correctAnswer: "E ≥ V - 1"
    },
    {
      id: 18,
      question: "Thuật toán nào dưới đây được sử dụng để tìm thành phần liên thông trong đồ thị?",
      options: [
        "Thuật toán Tìm kiếm theo chiều rộng (BFS)",
        "Thuật toán Tìm kiếm theo chiều sâu (DFS)",
        "Thuật toán Kruskal",
        "Thuật toán Dijkstra"
      ],
      correctAnswer: "Cả A và B"
    },
    {
      id: 19,
      question: "Trong đồ thị, một thành phần liên thông là gì?",
      options: [
        "Một tập con của đồ thị mà mọi đỉnh đều có thể được truy cập từ bất kỳ đỉnh nào trong tập con đó",
        "Một tập con của đồ thị không chứa chu trình",
        "Một tập con của đồ thị mà không có cạnh",
        "Một tập con của đồ thị có ít nhất một chu trình"
      ],
      correctAnswer: "Một tập con của đồ thị mà mọi đỉnh đều có thể được truy cập từ bất kỳ đỉnh nào trong tập con đó"
    },
    {
      id: 20,
      question: "Một đồ thị có trọng số là gì?",
      options: [
        "Đồ thị có các cạnh được gán một giá trị trọng số",
        "Đồ thị không có trọng số",
        "Đồ thị có tất cả các đỉnh có trọng số bằng nhau",
        "Đồ thị có tất cả các cạnh có trọng số bằng nhau"
      ],
      correctAnswer: "Đồ thị có các cạnh được gán một giá trị trọng số"
    }
  ];
  