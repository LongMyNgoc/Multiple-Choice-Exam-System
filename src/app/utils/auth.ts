import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { toast } from "react-toastify";

/**
 * Đăng nhập người dùng với email và password
 * @param email Email của người dùng
 * @param password Mật khẩu của người dùng
 * @returns Thông tin người dùng hoặc lỗi
 */
export const loginWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    toast.success("Đăng nhập thành công!");
    localStorage.setItem("userEmail", email);
    return { user: userCredential.user, error: null };
  } catch (error: any) {
    let errorMessage = "Có lỗi xảy ra. Vui lòng thử lại.";

    // Kiểm tra mã lỗi từ Firebase và đặt thông báo thân thiện
    switch (error.code) {
      case "auth/user-not-found":
        errorMessage = "Không tìm thấy tài khoản. Vui lòng kiểm tra lại email.";
        break;
      case "auth/wrong-password":
        errorMessage = "Mật khẩu không đúng. Vui lòng nhập lại.";
        break;
      case "auth/invalid-email":
        errorMessage = "Địa chỉ email không hợp lệ. Hãy kiểm tra lại.";
        break;
      case "auth/user-disabled":
        errorMessage = "Tài khoản của bạn đã bị vô hiệu hóa. Hãy liên hệ hỗ trợ.";
        break;
      case "auth/invalid-credential":
        errorMessage = "Email hoặc mật khẩu không chính xác. Vui lòng thử lại.";
        break;
      default:
        errorMessage = "Đăng nhập thất bại. Hãy thử lại sau.";
        break;
    }

    // Hiển thị thông báo lỗi dễ hiểu
    toast.error(errorMessage);

    return { user: null, error: errorMessage };
  }
};
