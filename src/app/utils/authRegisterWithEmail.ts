import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../lib/firebase";
import { toast } from "react-toastify";
import { FirebaseError } from "firebase/app";

/**
 * Đăng ký người dùng với email và mật khẩu
 * @param email Email người dùng
 * @param password Mật khẩu người dùng
 * @returns Thông tin người dùng hoặc lỗi
 */
export const registerWithEmail = async (email: string, password: string) => {
  try {
    // Đăng ký người dùng mới
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Gửi email xác minh sau khi đăng ký
    if (auth.currentUser) {
      await sendEmailVerification(auth.currentUser);
      toast.info("Hệ thống đã gửi email xác minh. Vui lòng kiểm tra hộp thư và xác nhận tài khoản.");
    }

    // Quá trình đăng ký thành công, không cho phép đăng nhập ngay
    return { user: userCredential.user, error: null };
  } catch (error: unknown) {
    let errorMessage = "Có lỗi xảy ra khi đăng ký.";

    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "Email đã được sử dụng.";
          break;
        case "auth/invalid-email":
          errorMessage = "Email không hợp lệ.";
          break;
        case "auth/weak-password":
          errorMessage = "Mật khẩu quá yếu (tối thiểu 6 ký tự).";
          break;
        default:
          errorMessage = "Đăng ký thất bại. Hãy thử lại sau.";
          break;
      }
    }

    toast.error(errorMessage);
    return { user: null, error: errorMessage };
  }
};
