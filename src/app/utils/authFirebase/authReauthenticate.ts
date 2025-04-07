import { reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { toast } from "react-toastify";

/**
 * Kiểm tra mật khẩu cũ
 * @param oldPassword Mật khẩu cũ
 * @returns true nếu mật khẩu cũ chính xác, false nếu không
 */
export const reauthenticate = async (oldPassword: string): Promise<boolean> => {
  const user = auth.currentUser;

  if (!user) {
    toast.error("Người dùng chưa đăng nhập.");
    return false;
  }

  try {
    const credentials = EmailAuthProvider.credential(user.email || "", oldPassword);
    await reauthenticateWithCredential(user, credentials); // Xác thực lại người dùng với mật khẩu cũ
    return true;
  } catch (error) {
    toast.error("Mật khẩu cũ không đúng. Vui lòng thử lại.");
    return false;
  }
};
