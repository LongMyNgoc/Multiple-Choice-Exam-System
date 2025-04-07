// utils/getUserRole.ts
import { db } from "@/app/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";

/**
 * Truy vấn role người dùng dựa trên email
 * @param email Email người dùng
 * @returns Role hoặc null nếu không tìm thấy
 */
export const getUserRoleByEmail = async (email: string) => {
  try {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs[0].data();
      return { role: userData.role, error: null };
    } else {
      throw new Error("Không tìm thấy người dùng với email này.");
    }
  } catch (error) {
    let errorMessage = "Lỗi khi lấy role người dùng.";
    if (error instanceof Error) errorMessage = error.message;

    toast.error(errorMessage);
    return { role: null, error: errorMessage };
  }
};
