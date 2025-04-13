import { QuizQuestion } from "@/app/types/quizData";
  
  export const quizUnity: QuizQuestion[] = [
    {
      id: 1,
      question: "Unity là gì?",
      options: [
        "Một phần mềm thiết kế đồ họa 3D",
        "Một công cụ phát triển game",
        "Một hệ điều hành",
        "Một ngôn ngữ lập trình"
      ],
      correctAnswer: "Một công cụ phát triển game"
    },
    {
      id: 2,
      question: "Unity hỗ trợ các nền tảng nào?",
      options: [
        "Windows, Mac, Linux, Android, iOS, WebGL, và nhiều nền tảng khác",
        "Chỉ Windows và Mac",
        "Chỉ Android và iOS",
        "Chỉ WebGL và Linux"
      ],
      correctAnswer: "Windows, Mac, Linux, Android, iOS, WebGL, và nhiều nền tảng khác"
    },
    {
      id: 3,
      question: "Ngôn ngữ lập trình chính trong Unity là gì?",
      options: [
        "Java",
        "C#",
        "C++",
        "Python"
      ],
      correctAnswer: "C#"
    },
    {
      id: 4,
      question: "Component trong Unity là gì?",
      options: [
        "Một đối tượng trong scene",
        "Một loại script trong Unity",
        "Một phần tử trong game object để xác định hành vi",
        "Một phần mềm hỗ trợ Unity"
      ],
      correctAnswer: "Một phần tử trong game object để xác định hành vi"
    },
    {
      id: 5,
      question: "Hàm nào được gọi khi một game object được khởi tạo trong Unity?",
      options: [
        "Start()",
        "Awake()",
        "Update()",
        "OnDestroy()"
      ],
      correctAnswer: "Awake()"
    },
    {
      id: 6,
      question: "Cách nào trong Unity dùng để thay đổi vị trí của một game object?",
      options: [
        "transform.position",
        "transform.move()",
        "gameObject.setPosition()",
        "position.update()"
      ],
      correctAnswer: "transform.position"
    },
    {
      id: 7,
      question: "Khi nào Unity sẽ gọi hàm `Update()`?",
      options: [
        "Khi game object được khởi tạo",
        "Khi game object bị phá hủy",
        "Mỗi frame trong khi game đang chạy",
        "Khi game object va chạm với đối tượng khác"
      ],
      correctAnswer: "Mỗi frame trong khi game đang chạy"
    },
    {
      id: 8,
      question: "Công cụ nào trong Unity giúp bạn tạo các môi trường 3D?",
      options: [
        "Unity Engine",
        "Terrain Tools",
        "Mesh Renderer",
        "Lighting"
      ],
      correctAnswer: "Terrain Tools"
    },
    {
      id: 9,
      question: "Cái gì trong Unity là một đối tượng có thể có nhiều thành phần (components) và có thể được quản lý trong Scene?",
      options: [
        "Prefab",
        "GameObject",
        "Texture",
        "Script"
      ],
      correctAnswer: "GameObject"
    },
    {
      id: 10,
      question: "Unity hỗ trợ tính năng gì để lập trình các hiệu ứng vật lý?",
      options: [
        "Physics Engine",
        "Lighting Engine",
        "Particle System",
        "Shader Effects"
      ],
      correctAnswer: "Physics Engine"
    },
    {
      id: 11,
      question: "Công cụ nào trong Unity giúp lập trình viên tạo ra các vật thể 3D phức tạp?",
      options: [
        "NavMesh",
        "Particle System",
        "Mesh Renderer",
        "ProBuilder"
      ],
      correctAnswer: "ProBuilder"
    },
    {
      id: 12,
      question: "Component nào trong Unity dùng để điều khiển vật lý của đối tượng?",
      options: [
        "Rigidbody",
        "Collider",
        "Transform",
        "Material"
      ],
      correctAnswer: "Rigidbody"
    },
    {
      id: 13,
      question: "Công cụ nào trong Unity giúp tạo ra và xử lý các hiệu ứng âm thanh?",
      options: [
        "AudioSource",
        "AudioClip",
        "AudioListener",
        "AudioManager"
      ],
      correctAnswer: "AudioSource"
    },
    {
      id: 14,
      question: "Công cụ nào trong Unity giúp lập trình viên tạo ra các tương tác giữa người chơi và game?",
      options: [
        "Input Manager",
        "NavMesh",
        "Collider",
        "Physics"
      ],
      correctAnswer: "Input Manager"
    },
    {
      id: 15,
      question: "Prefab trong Unity là gì?",
      options: [
        "Một loại game object",
        "Một mẫu đối tượng có thể tái sử dụng",
        "Một script dùng để điều khiển đối tượng",
        "Một loại component"
      ],
      correctAnswer: "Một mẫu đối tượng có thể tái sử dụng"
    },
    {
      id: 16,
      question: "Unity hỗ trợ nền tảng nào để phát triển game VR?",
      options: [
        "Oculus Rift",
        "HTC Vive",
        "PlayStation VR",
        "Tất cả các nền tảng trên"
      ],
      correctAnswer: "Tất cả các nền tảng trên"
    },
    {
      id: 17,
      question: "Unity có hỗ trợ phát triển game cho thiết bị di động không?",
      options: [
        "Có, hỗ trợ cả Android và iOS",
        "Không, chỉ hỗ trợ máy tính",
        "Có, nhưng chỉ hỗ trợ Android",
        "Có, nhưng chỉ hỗ trợ iOS"
      ],
      correctAnswer: "Có, hỗ trợ cả Android và iOS"
    },
    {
      id: 18,
      question: "Công cụ nào trong Unity giúp bạn tạo các hiệu ứng đặc biệt cho các vật thể trong game?",
      options: [
        "Shader Graph",
        "Particle System",
        "Post Processing Stack",
        "Lighting Effects"
      ],
      correctAnswer: "Particle System"
    },
    {
      id: 19,
      question: "Hàm nào trong Unity được gọi khi một đối tượng va chạm với một đối tượng khác?",
      options: [
        "OnCollisionEnter()",
        "OnTriggerEnter()",
        "OnCollisionStay()",
        "OnCollisionExit()"
      ],
      correctAnswer: "OnCollisionEnter()"
    },
    {
      id: 20,
      question: "Công cụ nào trong Unity dùng để tạo các cảnh chơi, kết nối các game object và điều khiển logic của game?",
      options: [
        "Scene Editor",
        "Hierarchy Panel",
        "Game Manager",
        "Scripting Editor"
      ],
      correctAnswer: "Scene Editor"
    }
  ];
  