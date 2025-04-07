import { updatePassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { toast } from "react-toastify";
import { FirebaseError } from "firebase/app";

/**
 * Đổi mật khẩu cho người dùng
 * @param newPassword Mật khẩu mới của người dùng
 * @returns Thông tin người dùng hoặc lỗi
 */
export const changePassword = async (newPassword: string) => {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error("Người dùng chưa đăng nhập");
    }

    // Kiểm tra nếu mật khẩu mới hợp lệ
    if (newPassword.length < 6) {
      toast.warning("Mật khẩu mới phải dài ít nhất 6 ký tự.");
      return { user: null, error: "Mật khẩu quá ngắn" };
    }

    // Cập nhật mật khẩu
    await updatePassword(user, newPassword);

    toast.success("Mật khẩu đã được thay đổi thành công!");

    return { user, error: null };
  } catch (error: unknown) {
    let errorMessage = "Có lỗi xảy ra. Vui lòng thử lại.";

    if (error instanceof FirebaseError) {
      // Kiểm tra mã lỗi từ Firebase và đặt thông báo thân thiện
      switch (error.code) {
        case "auth/requires-recent-login":
          errorMessage = "Cần phải đăng nhập lại để thực hiện thay đổi này.";
          break;
        default:
          errorMessage = "Đổi mật khẩu thất bại. Hãy thử lại sau.";
          break;
      }
    }

    // Hiển thị thông báo lỗi dễ hiểu
    toast.error(errorMessage);

    return { user: null, error: errorMessage };
  }
};
