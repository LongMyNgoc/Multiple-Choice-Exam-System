import { QuizQuestion } from "@/app/types/quizData";

  export const quizLTWindow: QuizQuestion[] = [
    {
      id: 1,
      question: "Lập trình Windows thường sử dụng ngôn ngữ nào?",
      options: [
        "C",
        "C++",
        "C#",
        "Tất cả các ngôn ngữ trên"
      ],
      correctAnswer: "Tất cả các ngôn ngữ trên"
    },
    {
      id: 2,
      question: "Để phát triển ứng dụng Windows, chúng ta cần phải sử dụng công cụ nào?",
      options: [
        "Visual Studio",
        "Eclipse",
        "NetBeans",
        "Xcode"
      ],
      correctAnswer: "Visual Studio"
    },
    {
      id: 3,
      question: "Trong lập trình Windows, Windows API là gì?",
      options: [
        "Một bộ công cụ lập trình đồ họa",
        "Một hệ điều hành đặc biệt",
        "Một bộ thư viện chức năng giúp lập trình viên giao tiếp với hệ điều hành Windows",
        "Một công cụ phát triển phần mềm"
      ],
      correctAnswer: "Một bộ thư viện chức năng giúp lập trình viên giao tiếp với hệ điều hành Windows"
    },
    {
      id: 4,
      question: "Windows Forms là gì?",
      options: [
        "Một loại ứng dụng web",
        "Một thư viện để phát triển ứng dụng giao diện đồ họa (GUI) trên Windows",
        "Một hệ điều hành",
        "Một loại cơ sở dữ liệu"
      ],
      correctAnswer: "Một thư viện để phát triển ứng dụng giao diện đồ họa (GUI) trên Windows"
    },
    {
      id: 5,
      question: "Trong lập trình Windows, Control là gì?",
      options: [
        "Một loại sự kiện trong ứng dụng",
        "Một phần tử giao diện người dùng như nút bấm, textbox, label, v.v.",
        "Một hàm hệ thống",
        "Một kiểu dữ liệu"
      ],
      correctAnswer: "Một phần tử giao diện người dùng như nút bấm, textbox, label, v.v."
    },
    {
      id: 6,
      question: "Thư viện nào được sử dụng để tạo các ứng dụng Windows Forms trong C#?",
      options: [
        "System.Windows.Forms",
        "Microsoft.Win32",
        "Windows.System",
        "System.IO"
      ],
      correctAnswer: "System.Windows.Forms"
    },
    {
      id: 7,
      question: "Để xử lý các sự kiện trong lập trình Windows Forms, ta cần phải làm gì?",
      options: [
        "Sử dụng phương thức `MessageBox`",
        "Gắn các phương thức xử lý sự kiện vào các điều khiển (control) tương ứng",
        "Cài đặt các thư viện bên ngoài",
        "Viết mã trong hàm main()"
      ],
      correctAnswer: "Gắn các phương thức xử lý sự kiện vào các điều khiển (control) tương ứng"
    },
    {
      id: 8,
      question: "Trong lập trình Windows, `MessageBox` dùng để làm gì?",
      options: [
        "Hiển thị hộp thoại thông báo",
        "Mở một cửa sổ mới",
        "Chạy ứng dụng bên ngoài",
        "Lưu trữ dữ liệu người dùng"
      ],
      correctAnswer: "Hiển thị hộp thoại thông báo"
    },
    {
      id: 9,
      question: "Thư viện nào cung cấp các lớp để làm việc với các file và thư mục trong lập trình Windows?",
      options: [
        "System.IO",
        "System.Net",
        "System.Windows.Forms",
        "System.Threading"
      ],
      correctAnswer: "System.IO"
    },
    {
      id: 10,
      question: "Trong C# Windows Forms, sự kiện `Click` của một nút được gọi khi nào?",
      options: [
        "Khi người dùng click chuột vào nút đó",
        "Khi người dùng nhấn phím Enter",
        "Khi ứng dụng bắt đầu chạy",
        "Khi nút được khởi tạo"
      ],
      correctAnswer: "Khi người dùng click chuột vào nút đó"
    },
    {
      id: 11,
      question: "Cách nào trong lập trình Windows Forms dùng để thay đổi màu nền của một form?",
      options: [
        "SetBackgroundColor()",
        "this.BackColor = Color.Red;",
        "this.ChangeColor(Color.Red);",
        "SetColor('Red')"
      ],
      correctAnswer: "this.BackColor = Color.Red;"
    },
    {
      id: 12,
      question: "Một trong các ưu điểm của lập trình Windows Forms là gì?",
      options: [
        "Dễ dàng phát triển ứng dụng có giao diện đồ họa (GUI)",
        "Có thể phát triển ứng dụng web dễ dàng",
        "Tốc độ xử lý rất nhanh",
        "Hỗ trợ trên nhiều nền tảng"
      ],
      correctAnswer: "Dễ dàng phát triển ứng dụng có giao diện đồ họa (GUI)"
    },
    {
      id: 13,
      question: "Khi lập trình ứng dụng Windows Forms trong C#, ta có thể sử dụng loại điều khiển nào để nhập liệu từ người dùng?",
      options: [
        "TextBox",
        "Button",
        "Label",
        "PictureBox"
      ],
      correctAnswer: "TextBox"
    },
    {
      id: 14,
      question: "Câu lệnh nào trong C# dùng để thoát ứng dụng Windows Forms?",
      options: [
        "Exit()",
        "this.Close()",
        "ExitApplication()",
        "this.Exit()"
      ],
      correctAnswer: "this.Close()"
    },
    {
      id: 15,
      question: "Chức năng nào trong Windows Forms dùng để thay đổi giao diện của ứng dụng theo hướng hiện đại?",
      options: [
        "Windows Presentation Foundation (WPF)",
        "Windows Forms",
        "Console Application",
        "Win32 API"
      ],
      correctAnswer: "Windows Presentation Foundation (WPF)"
    },
    {
      id: 16,
      question: "Trong C# Windows Forms, sự kiện nào xảy ra khi người dùng nhấn phím trên bàn phím?",
      options: [
        "KeyPress",
        "Click",
        "TextChanged",
        "KeyDown"
      ],
      correctAnswer: "KeyPress"
    },
    {
      id: 17,
      question: "Trong lập trình Windows, phương thức nào dùng để hiển thị một hộp thoại mở file?",
      options: [
        "OpenFileDialog()",
        "SaveFileDialog()",
        "MessageBox()",
        "OpenFile()"
      ],
      correctAnswer: "OpenFileDialog()"
    },
    {
      id: 18,
      question: "Thư viện `System.Threading` trong lập trình Windows được sử dụng để làm gì?",
      options: [
        "Quản lý các tác vụ bất đồng bộ và đa luồng",
        "Quản lý giao diện người dùng",
        "Xử lý các sự kiện chuột và bàn phím",
        "Thực hiện các phép toán hình học"
      ],
      correctAnswer: "Quản lý các tác vụ bất đồng bộ và đa luồng"
    },
    {
      id: 19,
      question: "Lập trình Windows Forms có thể chạy trên hệ điều hành nào?",
      options: [
        "Windows",
        "Linux",
        "macOS",
        "Tất cả các hệ điều hành trên"
      ],
      correctAnswer: "Windows"
    },
    {
      id: 20,
      question: "Câu lệnh nào trong C# được dùng để hiển thị một form mới?",
      options: [
        "this.Show()",
        "form.Show()",
        "this.Open()",
        "form.Display()"
      ],
      correctAnswer: "form.Show()"
    }
  ];
  