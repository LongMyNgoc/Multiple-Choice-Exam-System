// utils/editUserRole.ts
import { db } from "@/app/lib/firebase";
import { collection, query, where, getDocs, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

/**
 * Cập nhật role người dùng theo email
 * @param email Email người dùng
 * @param newRole Vai trò mới (ví dụ: 'admin', 'user', 'moderator', ...)
 * @returns Kết quả thành công hoặc thông báo lỗi
 */
export const editUserRoleByEmail = async (email: string, newRole: string) => {
  try {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      await updateDoc(userDoc.ref, { role: newRole });

      toast.success(`Cập nhật vai trò thành công cho ${email}.`);
      return { success: true, error: null };
    } else {
      throw new Error("Không tìm thấy người dùng với email này.");
    }
  } catch (error) {
    let errorMessage = "Lỗi khi cập nhật vai trò người dùng.";
    if (error instanceof Error) errorMessage = error.message;

    toast.error(errorMessage);
    return { success: false, error: errorMessage };
  }
};
