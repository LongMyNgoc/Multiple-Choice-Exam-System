import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { toast } from "react-toastify";
import { FirebaseError } from "firebase/app";

/**
 * Gửi email đặt lại mật khẩu cho người dùng
 * @param email Email của người dùng
 */
export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    toast.success("Nếu Email hợp lệ hệ thống sẽ gửi mail đến. Hãy kiểm tra hộp thư.");
    return { success: true, error: null };
  } catch (error: unknown) {
    let errorMessage = "Không thể gửi email đặt lại mật khẩu. Vui lòng thử lại.";

    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = "Không tìm thấy tài khoản với email này.";
          break;
        case "auth/invalid-email":
          errorMessage = "Địa chỉ email không hợp lệ.";
          break;
        default:
          errorMessage = "Có lỗi xảy ra. Vui lòng thử lại sau.";
          break;
      }
    }

    toast.error(errorMessage);
    return { success: false, error: errorMessage };
  }
};
