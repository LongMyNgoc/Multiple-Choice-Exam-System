import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../lib/firebase"; // Giả sử bạn đã cấu hình Firebase
import { toast } from "react-toastify";
import { FirebaseError } from "firebase/app";

/**
 * Đăng nhập người dùng với Google
 * @returns Thông tin người dùng hoặc lỗi
 */
export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  try {
    // Đăng nhập qua Google
    const result = await signInWithPopup(auth, provider);

    // Kiểm tra nếu email chưa được xác minh
    if (!result.user.emailVerified) {
      // Đăng xuất ngay lập tức nếu email chưa xác minh
      await auth.signOut();
      toast.warning("Bạn cần xác minh email trước khi tiếp tục.");
      return { user: null, error: "Email chưa được xác minh" };
    }

    toast.success("Đăng nhập thành công với Google!");
    localStorage.setItem("userEmail", result.user.email || "");

    return { user: result.user, error: null };
  } catch (error: unknown) {
    let errorMessage = "Có lỗi xảy ra. Vui lòng thử lại.";

    if (error instanceof FirebaseError) {
      // Kiểm tra mã lỗi từ Firebase và đặt thông báo thân thiện
      switch (error.code) {
        case "auth/popup-closed-by-user":
          errorMessage = "Cửa sổ đăng nhập bị đóng. Vui lòng thử lại.";
          break;
        case "auth/cancelled-popup-request":
          errorMessage = "Đã hủy yêu cầu đăng nhập. Vui lòng thử lại.";
          break;
        default:
          errorMessage = "Đăng nhập thất bại. Hãy thử lại sau.";
          break;
      }
    }

    // Hiển thị thông báo lỗi dễ hiểu
    toast.error(errorMessage);

    return { user: null, error: errorMessage };
  }
};
