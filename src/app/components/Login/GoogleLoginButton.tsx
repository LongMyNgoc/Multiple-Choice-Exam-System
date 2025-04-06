// components/GoogleLoginButton.tsx
import { FcGoogle } from "react-icons/fc";
import { hoverEffect, clickEffect } from "../../utils/hoverEffects";
import { loginWithGoogle } from "@/app/utils/authFirebase/authLoginWithGoogle";
import { useRouter } from 'next/navigation';

const GoogleLoginButton = () => {
  const router = useRouter();
  const handleLogin = async () => {
      const result = await loginWithGoogle(); // Gọi hàm đăng nhập
    
      // Chỉ chuyển trang nếu đăng nhập thành công (không có lỗi)
      if (result.error === null) {
        router.push('/pages/QuizList'); // Chuyển hướng đến trang QuizList
      }
    };  
  return (
    <button
      className="btn w-100 d-flex align-items-center justify-content-center mb-3"
      style={{ backgroundColor: "#FFA3BE", border: "1px solid #ccc", padding: "10px" }}
      onMouseOver={(e) => hoverEffect(e, "in")}
      onMouseOut={(e) => hoverEffect(e, "out")}
      onMouseDown={(e) => clickEffect(e, "down")}
      onMouseUp={(e) => clickEffect(e, "up")}
      onClick={handleLogin} // Handle the click event
    >
      <FcGoogle size={24} className="me-2" />
      Continue with Google
    </button>
  );
};

export default GoogleLoginButton;
