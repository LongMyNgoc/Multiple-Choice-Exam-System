import { QuizQuestion } from "@/app/types/quizData";

export const quizOOPC: QuizQuestion[] = [
    {
      id: 1,
      question: 'Từ khóa `virtual` trong C++ dùng để làm gì?',
      options: [
        'Tạo hàm tĩnh',
        'Khai báo biến toàn cục',
        'Cho phép override trong kế thừa',
        'Tạo class trừu tượng',
      ],
      correctAnswer: 'Cho phép override trong kế thừa',
    },
    {
      id: 2,
      question: 'Một class trừu tượng trong C++ là?',
      options: [
        'Class chứa ít nhất một hàm thuần ảo',
        'Class có biến private',
        'Class chỉ có constructor',
        'Class không có hàm',
      ],
      correctAnswer: 'Class chứa ít nhất một hàm thuần ảo',
    },
    {
      id: 3,
      question: 'Hàm thuần ảo được khai báo như thế nào?',
      options: [
        'virtual void f();',
        'virtual void f() = 0;',
        'pure virtual void f();',
        'abstract void f();',
      ],
      correctAnswer: 'virtual void f() = 0;',
    },
    {
      id: 4,
      question: 'Đa kế thừa là gì trong C++?',
      options: [
        'Một class kế thừa từ nhiều class khác',
        'Một class có nhiều biến',
        'Một class chứa nhiều hàm',
        'Một hàm gọi nhiều class',
      ],
      correctAnswer: 'Một class kế thừa từ nhiều class khác',
    },
    {
      id: 5,
      question: 'Khi nào dùng `this` pointer?',
      options: [
        'Khi cần gọi hàm toàn cục',
        'Để truy cập địa chỉ class hiện tại',
        'Để tạo biến tĩnh',
        'Không có tác dụng gì',
      ],
      correctAnswer: 'Để truy cập địa chỉ class hiện tại',
    },
    {
      id: 6,
      question: 'Hàm khởi tạo có thể bị overload không?',
      options: ['Không bao giờ', 'Chỉ có một', 'Có thể overload', 'Chỉ trong struct'],
      correctAnswer: 'Có thể overload',
    },
    {
      id: 7,
      question: 'Destructor dùng để làm gì?',
      options: [
        'Khởi tạo đối tượng',
        'Xoá vùng nhớ khi object bị huỷ',
        'Sao chép đối tượng',
        'Tạo biến toàn cục',
      ],
      correctAnswer: 'Xoá vùng nhớ khi object bị huỷ',
    },
    {
      id: 8,
      question: 'Hàm hủy (destructor) trong class có cú pháp nào?',
      options: ['~ClassName()', 'destructor ClassName()', '!ClassName()', 'ClassName()'],
      correctAnswer: '~ClassName()',
    },
    {
      id: 9,
      question: 'Tính đóng gói (encapsulation) giúp?',
      options: [
        'Bảo mật dữ liệu',
        'Tăng tốc độ xử lý',
        'Tăng bộ nhớ',
        'Sao chép nhanh hơn',
      ],
      correctAnswer: 'Bảo mật dữ liệu',
    },
    {
      id: 10,
      question: 'Từ khóa `protected` cho phép truy cập ở đâu?',
      options: [
        'Mọi nơi trong chương trình',
        'Chỉ bên trong class',
        'Trong class và lớp con',
        'Chỉ trong hàm main',
      ],
      correctAnswer: 'Trong class và lớp con',
    },
    {
      id: 11,
      question: 'Từ khóa `template` trong C++ dùng để làm gì?',
      options: [
        'Tạo hàm hoặc class với kiểu dữ liệu tổng quát',
        'Tạo file mẫu',
        'Tạo biến toàn cục',
        'Tạo class ảo',
      ],
      correctAnswer: 'Tạo hàm hoặc class với kiểu dữ liệu tổng quát',
    },
    {
      id: 12,
      question: 'Câu lệnh `try...catch` dùng để?',
      options: [
        'Lặp vô hạn',
        'Xử lý lỗi khi thực thi',
        'Tạo class tạm',
        'Dừng chương trình',
      ],
      correctAnswer: 'Xử lý lỗi khi thực thi',
    },
    {
      id: 13,
      question: 'Hàm `friend` có thể?',
      options: [
        'Truy cập các thành phần private của class',
        'Kế thừa class cha',
        'Thay thế destructor',
        'Tăng tốc độ chương trình',
      ],
      correctAnswer: 'Truy cập các thành phần private của class',
    },
    {
      id: 14,
      question: 'Overloading là gì?',
      options: [
        'Định nghĩa nhiều hàm cùng tên, khác tham số',
        'Ghi đè hàm cha',
        'Gọi đệ quy vô hạn',
        'Lỗi bộ nhớ',
      ],
      correctAnswer: 'Định nghĩa nhiều hàm cùng tên, khác tham số',
    },
    {
      id: 15,
      question: 'Overriding là gì?',
      options: [
        'Ghi đè lại hàm ảo từ lớp cha',
        'Tạo class mới',
        'Gọi hàm main nhiều lần',
        'Tạo vòng lặp vô hạn',
      ],
      correctAnswer: 'Ghi đè lại hàm ảo từ lớp cha',
    },
    {
      id: 16,
      question: 'Class có thể chứa?',
      options: [
        'Biến, hàm, constructor, destructor',
        'Chỉ biến',
        'Chỉ hàm',
        'Chỉ hàm main',
      ],
      correctAnswer: 'Biến, hàm, constructor, destructor',
    },
    {
      id: 17,
      question: 'Class kế thừa từ class khác dùng cú pháp nào?',
      options: [
        'class A : public B',
        'class A inherits B',
        'class A extends B',
        'class A > B',
      ],
      correctAnswer: 'class A : public B',
    },
    {
      id: 18,
      question: 'Phân biệt giữa `struct` và `class` trong C++ là?',
      options: [
        'Struct mặc định public, class mặc định private',
        'Struct nhanh hơn',
        'Class luôn có constructor',
        'Struct không chứa hàm',
      ],
      correctAnswer: 'Struct mặc định public, class mặc định private',
    },
    {
      id: 19,
      question: 'Hàm tạo sao chép (copy constructor) được gọi khi?',
      options: [
        'Truyền đối tượng làm đối số',
        'Xoá đối tượng',
        'Truy cập biến private',
        'Khai báo mảng',
      ],
      correctAnswer: 'Truyền đối tượng làm đối số',
    },
    {
      id: 20,
      question: 'Trong file I/O C++, hàm mở file đọc là?',
      options: [
        'ifstream fin("file.txt");',
        'fstream open("file.txt");',
        'file.open("file.txt");',
        'ofstream file("file.txt");',
      ],
      correctAnswer: 'ifstream fin("file.txt");',
    },
  ];
  