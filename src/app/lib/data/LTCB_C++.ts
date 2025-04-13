// lib/data/quizData.ts

import { QuizQuestion } from "@/app/types/quizData";

export const quizLTCBC: QuizQuestion[] = [
  {
    id: 1,
    question: 'Câu lệnh nào dùng để xuất dữ liệu ra màn hình trong C++?',
    options: ['printf', 'cout', 'cin', 'scanf'],
    correctAnswer: 'cout',
  },
  {
    id: 2,
    question: 'Từ khóa nào dùng để khai báo hằng số trong C++?',
    options: ['final', 'const', 'define', 'static'],
    correctAnswer: 'const',
  },
  {
    id: 3,
    question: 'Kiểu dữ liệu nào lưu giá trị số nguyên?',
    options: ['int', 'float', 'double', 'char'],
    correctAnswer: 'int',
  },
  {
    id: 4,
    question: 'Câu lệnh nào dùng để nhập dữ liệu từ bàn phím?',
    options: ['cin', 'cout', 'input', 'scanf'],
    correctAnswer: 'cin',
  },
  {
    id: 5,
    question: 'Toán tử nào dùng để lấy địa chỉ của biến?',
    options: ['*', '&', '#', '%'],
    correctAnswer: '&',
  },
  {
    id: 6,
    question: 'Hàm nào dùng để kết thúc chương trình trong C++?',
    options: ['exit()', 'end()', 'return 0;', 'close()'],
    correctAnswer: 'return 0;',
  },
  {
    id: 7,
    question: 'Câu lệnh điều kiện nào đúng trong C++?',
    options: ['if (x == 5)', 'if x = 5 then', 'if x == 5:', 'if x equals 5'],
    correctAnswer: 'if (x == 5)',
  },
  {
    id: 8,
    question: 'Vòng lặp nào luôn chạy ít nhất một lần?',
    options: ['for', 'while', 'do...while', 'foreach'],
    correctAnswer: 'do...while',
  },
  {
    id: 9,
    question: 'Đâu là cú pháp khai báo mảng đúng?',
    options: ['int arr[];', 'int arr[5];', 'arr int[5];', 'int[5] arr;'],
    correctAnswer: 'int arr[5];',
  },
  {
    id: 10,
    question: 'Hàm main trong C++ trả về kiểu dữ liệu nào?',
    options: ['void', 'int', 'char', 'string'],
    correctAnswer: 'int',
  },
  {
    id: 11,
    question: 'Câu nào đúng để tạo hàm có giá trị trả về?',
    options: ['void sum()', 'int sum()', 'function sum()', 'sum int()'],
    correctAnswer: 'int sum()',
  },
  {
    id: 12,
    question: 'Toán tử ++x và x++ khác nhau ở điểm nào?',
    options: [
      'Không khác nhau',
      '++x tăng sau, x++ tăng trước',
      '++x tăng trước, x++ tăng sau',
      '++x giảm giá trị',
    ],
    correctAnswer: '++x tăng trước, x++ tăng sau',
  },
  {
    id: 13,
    question: 'Biến con trỏ dùng để làm gì?',
    options: [
      'Lưu địa chỉ của biến khác',
      'Tăng tốc chương trình',
      'Lưu giá trị kiểu float',
      'Không có công dụng',
    ],
    correctAnswer: 'Lưu địa chỉ của biến khác',
  },
  {
    id: 14,
    question: 'Câu nào là khai báo con trỏ đúng trong C++?',
    options: ['int *p;', 'pointer int p;', 'int p*;', 'p *int;'],
    correctAnswer: 'int *p;',
  },
  {
    id: 15,
    question: 'Đâu là từ khóa dùng trong lập trình hướng đối tượng C++?',
    options: ['include', 'object', 'class', 'define'],
    correctAnswer: 'class',
  },
  {
    id: 16,
    question: 'Tính đóng gói (encapsulation) có nghĩa là gì?',
    options: [
      'Ẩn chi tiết và bảo vệ dữ liệu',
      'Kế thừa từ lớp khác',
      'Gộp nhiều lớp lại',
      'Lưu trữ dữ liệu trên RAM',
    ],
    correctAnswer: 'Ẩn chi tiết và bảo vệ dữ liệu',
  },
  {
    id: 17,
    question: 'Phương thức khởi tạo (constructor) có đặc điểm gì?',
    options: [
      'Có cùng tên với class',
      'Phải trả về int',
      'Có thể có tên bất kỳ',
      'Phải có từ khóa return',
    ],
    correctAnswer: 'Có cùng tên với class',
  },
  {
    id: 18,
    question: 'Tính kế thừa cho phép?',
    options: [
      'Tạo biến nội bộ',
      'Chia sẻ và mở rộng class',
      'Lưu dữ liệu trong file',
      'Tăng tốc độ chương trình',
    ],
    correctAnswer: 'Chia sẻ và mở rộng class',
  },
  {
    id: 19,
    question: 'Tính đa hình (polymorphism) cho phép?',
    options: [
      'Một hàm thực hiện nhiều hành vi',
      'Tăng bộ nhớ',
      'Tạo nhiều class cùng lúc',
      'Bảo vệ dữ liệu khỏi virus',
    ],
    correctAnswer: 'Một hàm thực hiện nhiều hành vi',
  },
  {
    id: 20,
    question: 'Đâu là phép gán đúng trong C++?',
    options: ['x == 10;', 'x === 10;', 'x = 10;', 'x := 10;'],
    correctAnswer: 'x = 10;',
  },
];
