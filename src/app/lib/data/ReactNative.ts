import { QuizQuestion } from "@/app/types/quizData";
  
  export const quizReactNative: QuizQuestion[] = [
    {
      id: 1,
      question: "React Native là gì?",
      options: [
        "Một framework để phát triển ứng dụng di động dùng JavaScript",
        "Một ngôn ngữ lập trình mới cho di động",
        "Một công cụ tạo giao diện người dùng cho di động",
        "Một hệ điều hành dành cho di động"
      ],
      correctAnswer: "Một framework để phát triển ứng dụng di động dùng JavaScript"
    },
    {
      id: 2,
      question: "Làm thế nào để cài đặt React Native trên máy tính?",
      options: [
        "Cài đặt Node.js, Expo CLI và Android Studio",
        "Cài đặt Xcode và Android Studio",
        "Cài đặt Node.js và React Native CLI",
        "Cài đặt Expo CLI và Java Development Kit"
      ],
      correctAnswer: "Cài đặt Node.js, Expo CLI và Android Studio"
    },
    {
      id: 3,
      question: "React Native sử dụng gì để phát triển giao diện người dùng?",
      options: [
        "HTML và CSS",
        "JSX và StyleSheet",
        "Java và XML",
        "JavaScript và CSS"
      ],
      correctAnswer: "JSX và StyleSheet"
    },
    {
      id: 4,
      question: "Component nào trong React Native giúp hiển thị văn bản?",
      options: [
        "Text",
        "View",
        "Image",
        "Button"
      ],
      correctAnswer: "Text"
    },
    {
      id: 5,
      question: "Phương thức nào trong React Native giúp tạo ra một button?",
      options: [
        "Button",
        "TouchableOpacity",
        "TouchableHighlight",
        "All of the above"
      ],
      correctAnswer: "All of the above"
    },
    {
      id: 6,
      question: "Expo là gì trong React Native?",
      options: [
        "Một framework cho việc phát triển ứng dụng di động nhanh chóng",
        "Một công cụ để tạo các ứng dụng di động trực tiếp trên máy tính",
        "Một thư viện di động chỉ hỗ trợ hệ điều hành Android",
        "Một IDE để phát triển ứng dụng di động"
      ],
      correctAnswer: "Một framework cho việc phát triển ứng dụng di động nhanh chóng"
    },
    {
      id: 7,
      question: "Trong React Native, `state` là gì?",
      options: [
        "Một đối tượng lưu trữ thông tin về giao diện người dùng và có thể thay đổi theo thời gian",
        "Một đối tượng chứa dữ liệu của ứng dụng",
        "Một đối tượng chỉ đọc không thay đổi",
        "Một phương thức trong React"
      ],
      correctAnswer: "Một đối tượng lưu trữ thông tin về giao diện người dùng và có thể thay đổi theo thời gian"
    },
    {
      id: 8,
      question: "Cách nào giúp bạn xử lý sự kiện trong React Native?",
      options: [
        "Thêm phương thức trực tiếp vào đối tượng JSX",
        "Sử dụng `onPress` trong các thành phần như `Button`, `TouchableOpacity`",
        "Dùng `addEventListener`",
        "Sử dụng Redux để xử lý sự kiện"
      ],
      correctAnswer: "Sử dụng `onPress` trong các thành phần như `Button`, `TouchableOpacity`"
    },
    {
      id: 9,
      question: "React Native sử dụng cơ chế nào để cập nhật giao diện?",
      options: [
        "Virtual DOM",
        "Direct DOM",
        "Native View Rendering",
        "WebView"
      ],
      correctAnswer: "Virtual DOM"
    },
    {
      id: 10,
      question: "Cách nào giúp React Native giao tiếp với native code trên iOS hoặc Android?",
      options: [
        "React Native Bridges",
        "JavaScript API",
        "Native Modules",
        "All of the above"
      ],
      correctAnswer: "All of the above"
    },
    {
      id: 11,
      question: "Phương thức nào giúp bạn điều hướng giữa các màn hình trong React Native?",
      options: [
        "React Navigation",
        "Native Navigation",
        "Stack Navigator",
        "Push Notification"
      ],
      correctAnswer: "React Navigation"
    },
    {
      id: 12,
      question: "Khi nào React Native sử dụng hot reloading?",
      options: [
        "Khi mã nguồn thay đổi, ứng dụng tự động cập nhật mà không cần phải reload toàn bộ ứng dụng",
        "Khi thêm một module mới vào ứng dụng",
        "Khi thêm một component mới vào ứng dụng",
        "Khi bạn thay đổi màu sắc của giao diện người dùng"
      ],
      correctAnswer: "Khi mã nguồn thay đổi, ứng dụng tự động cập nhật mà không cần phải reload toàn bộ ứng dụng"
    },
    {
      id: 13,
      question: "Phương thức nào giúp bạn gọi API trong React Native?",
      options: [
        "fetch()",
        "axios()",
        "XMLHttpRequest",
        "Tất cả các phương thức trên"
      ],
      correctAnswer: "Tất cả các phương thức trên"
    },
    {
      id: 14,
      question: "Sự khác biệt giữa `TouchableOpacity` và `TouchableHighlight` trong React Native là gì?",
      options: [
        "`TouchableOpacity` thay đổi độ mờ của đối tượng khi nhấn, `TouchableHighlight` thay đổi màu nền",
        "`TouchableOpacity` thay đổi màu nền, `TouchableHighlight` thay đổi độ mờ",
        "Chúng giống hệt nhau",
        "`TouchableOpacity` không thể dùng cho các button, trong khi `TouchableHighlight` có thể"
      ],
      correctAnswer: "`TouchableOpacity` thay đổi độ mờ của đối tượng khi nhấn, `TouchableHighlight` thay đổi màu nền"
    },
    {
      id: 15,
      question: "Trong React Native, component nào giúp hiển thị một danh sách các mục?",
      options: [
        "FlatList",
        "ScrollView",
        "SectionList",
        "All of the above"
      ],
      correctAnswer: "All of the above"
    },
    {
      id: 16,
      question: "Lệnh nào được dùng để khởi tạo một dự án React Native mới?",
      options: [
        "react-native init project-name",
        "npx create-react-native-app project-name",
        "npm init react-native-app project-name",
        "Tất cả các lệnh trên"
      ],
      correctAnswer: "react-native init project-name"
    },
    {
      id: 17,
      question: "Công cụ nào giúp bạn kiểm tra và gỡ lỗi ứng dụng React Native?",
      options: [
        "React Developer Tools",
        "React Native Debugger",
        "Expo Developer Tools",
        "Tất cả các công cụ trên"
      ],
      correctAnswer: "Tất cả các công cụ trên"
    },
    {
      id: 18,
      question: "Cách nào để sử dụng các thư viện bên ngoài trong React Native?",
      options: [
        "Cài đặt qua npm hoặc yarn và import vào project",
        "Thêm thư viện trực tiếp vào folder của ứng dụng",
        "Chạy lệnh `npm install` và gọi API của thư viện",
        "Sử dụng các thư viện mặc định của React Native"
      ],
      correctAnswer: "Cài đặt qua npm hoặc yarn và import vào project"
    },
    {
      id: 19,
      question: "Cách nào giúp bạn làm việc với cơ sở dữ liệu trong React Native?",
      options: [
        "Sử dụng SQLite hoặc Realm",
        "Sử dụng Firebase",
        "Sử dụng SQLite hoặc Firebase",
        "Tất cả các cách trên"
      ],
      correctAnswer: "Tất cả các cách trên"
    },
    {
      id: 20,
      question: "Để tạo một ứng dụng React Native cho cả iOS và Android, bạn cần làm gì?",
      options: [
        "Cài đặt Expo CLI và sử dụng các công cụ tích hợp",
        "Sử dụng React Native CLI và cấu hình cho cả hai nền tảng",
        "Chỉ phát triển trên một nền tảng rồi sử dụng Expo để xây dựng cho nền tảng còn lại",
        "Tạo hai dự án riêng biệt cho iOS và Android"
      ],
      correctAnswer: "Sử dụng React Native CLI và cấu hình cho cả hai nền tảng"
    }
  ];
  