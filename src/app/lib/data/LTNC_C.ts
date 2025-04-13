import { QuizQuestion } from "@/app/types/quizData";

export const quizLTNCC: QuizQuestion[] = [
    {
      id: 1,
      question: "Điều nào sau đây là đúng về con trỏ trong C++?",
      options: [
        "Con trỏ lưu giá trị của biến",
        "Con trỏ không thể thay đổi giá trị của biến nó trỏ tới",
        "Con trỏ lưu địa chỉ của biến",
        "Con trỏ không sử dụng được với mảng"
      ],
      correctAnswer: "Con trỏ lưu địa chỉ của biến"
    },
    {
      id: 2,
      question: "Ký hiệu nào dùng để truy cập giá trị mà con trỏ trỏ tới?",
      options: ["&", "*", "->", "%"],
      correctAnswer: "*"
    },
    {
      id: 3,
      question: "Từ khóa `new` trong C++ dùng để làm gì?",
      options: [
        "Khởi tạo đối tượng",
        "Cấp phát bộ nhớ động",
        "Xóa biến",
        "Tạo class mới"
      ],
      correctAnswer: "Cấp phát bộ nhớ động"
    },
    {
      id: 4,
      question: "Cách giải phóng bộ nhớ được cấp phát bằng `new` là:",
      options: ["free()", "remove()", "delete", "dispose()"],
      correctAnswer: "delete"
    },
    {
      id: 5,
      question: "Cách khai báo mảng động trong C++:",
      options: [
        "int arr[] = new int[10];",
        "int* arr = new int[10];",
        "int arr = new int[10];",
        "new int arr[10];"
      ],
      correctAnswer: "int* arr = new int[10];"
    },
    {
      id: 6,
      question: "Hàm nào dùng để thao tác với file văn bản trong C++?",
      options: ["cin", "fstream", "file()", "iostream"],
      correctAnswer: "fstream"
    },
    {
      id: 7,
      question: "Để mở file để ghi (write) ta dùng mode nào?",
      options: ["ios::in", "ios::out", "ios::app", "ios::read"],
      correctAnswer: "ios::out"
    },
    {
      id: 8,
      question: "STL là viết tắt của:",
      options: [
        "Standard Type Language",
        "Standard Template Library",
        "Structured Template Language",
        "Static Template Library"
      ],
      correctAnswer: "Standard Template Library"
    },
    {
      id: 9,
      question: "Cấu trúc nào sau đây là một phần của STL?",
      options: ["loop", "if-else", "vector", "switch"],
      correctAnswer: "vector"
    },
    {
      id: 10,
      question: "Để thêm phần tử vào cuối `vector<int> v` ta dùng:",
      options: ["v.add()", "v.push()", "v.insert()", "v.push_back()"],
      correctAnswer: "v.push_back()"
    },
    {
      id: 11,
      question: "Iterator trong C++ dùng để:",
      options: [
        "Chạy vòng lặp với tốc độ nhanh hơn",
        "Truy cập phần tử trong container STL",
        "Tạo ra template mới",
        "Tăng hiệu năng chương trình"
      ],
      correctAnswer: "Truy cập phần tử trong container STL"
    },
    {
      id: 12,
      question: "Để đọc từng dòng trong file văn bản ta dùng:",
      options: ["getline()", "readline()", "scanf()", "read()"],
      correctAnswer: "getline()"
    },
    {
      id: 13,
      question: "Phép toán nào có độ ưu tiên cao nhất?",
      options: ["++", "+", "*", "="],
      correctAnswer: "++"
    },
    {
      id: 14,
      question: "Hàm nào dùng để ép kiểu từ float sang int?",
      options: ["convert()", "(int)", "cast()", "static()"],
      correctAnswer: "(int)"
    },
    {
      id: 15,
      question: "Thư viện nào hỗ trợ thao tác với file trong C++?",
      options: ["<stdio.h>", "<string>", "<fstream>", "<cstdlib>"],
      correctAnswer: "<fstream>"
    },
    {
      id: 16,
      question: "Biến tham chiếu trong C++ được khai báo bằng ký hiệu nào?",
      options: ["*", "&", "$", "#"],
      correctAnswer: "&"
    },
    {
      id: 17,
      question: "Cách nào dưới đây tạo một tham chiếu đến biến x?",
      options: ["int &ref = x;", "int *ref = x;", "int ref = &x;", "ref int = x;"],
      correctAnswer: "int &ref = x;"
    },
    {
      id: 18,
      question: "Điểm khác biệt giữa con trỏ và tham chiếu là:",
      options: [
        "Tham chiếu không thể NULL, còn con trỏ có thể",
        "Tham chiếu có thể thay đổi địa chỉ",
        "Con trỏ nhanh hơn",
        "Tham chiếu không truy cập được giá trị"
      ],
      correctAnswer: "Tham chiếu không thể NULL, còn con trỏ có thể"
    },
    {
      id: 19,
      question: "Từ khóa `typedef` dùng để:",
      options: [
        "Tạo tên mới cho kiểu dữ liệu",
        "Tạo hàm mới",
        "Tạo kiểu dữ liệu động",
        "Định nghĩa class"
      ],
      correctAnswer: "Tạo tên mới cho kiểu dữ liệu"
    },
    {
      id: 20,
      question: "Cách nào khai báo con trỏ hàm hợp lệ?",
      options: [
        "int* f();",
        "int (*f)(int, int);",
        "pointer f(int, int);",
        "*int f();"
      ],
      correctAnswer: "int (*f)(int, int);"
    },
  ];
  