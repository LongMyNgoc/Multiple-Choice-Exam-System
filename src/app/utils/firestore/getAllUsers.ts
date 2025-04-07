import { db } from "@/app/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";

/**
 * Lấy toàn bộ thông tin người dùng từ collection "users"
 * @returns Mảng chứa tất cả dữ liệu người dùng hoặc lỗi
 */
export const getAllUsers = async () => {
  try {
    const usersRef = collection(db, "users");
    const querySnapshot = await getDocs(usersRef);

    const users: unknown[] = [];
    querySnapshot.forEach((doc) => {
      users.push(doc.data()); // lấy tất cả thông tin
    });

    return { users, error: null };
  } catch (error) {
    let errorMessage = "Lỗi khi lấy danh sách người dùng.";
    if (error instanceof Error) errorMessage = error.message;

    toast.error(errorMessage);
    return { users: [], error: errorMessage };
  }
};
