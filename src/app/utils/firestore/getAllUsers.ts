import { db } from "@/app/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";

// Định nghĩa kiểu User nếu chưa có
interface User {
  email: string;
  role: string;
}

/**
 * Lấy toàn bộ thông tin người dùng từ collection "users"
 * @returns Mảng chứa tất cả dữ liệu người dùng hoặc lỗi
 */
export const getAllUsers = async () => {
  try {
    const usersRef = collection(db, "users");
    const querySnapshot = await getDocs(usersRef);

    const users: User[] = [];  // Sử dụng kiểu User[] thay vì unknown[]
    querySnapshot.forEach((doc) => {
      const userData = doc.data() as User;  // Ép kiểu dữ liệu về User
      users.push(userData);  // Lưu thông tin người dùng vào mảng
    });

    return { users, error: null };
  } catch (error) {
    let errorMessage = "Lỗi khi lấy danh sách người dùng.";
    if (error instanceof Error) errorMessage = error.message;

    toast.error(errorMessage);
    return { users: [], error: errorMessage };
  }  
};
