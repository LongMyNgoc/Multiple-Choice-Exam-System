import { useState } from "react";
import { registerWithEmail } from "@/app/utils/authRegisterWithEmail"; // Đảm bảo import đúng từ file của bạn

const RegisterPassword = () => {
  // Định nghĩa state cho email
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);  // Thêm trạng thái loading để kiểm soát quá trình gửi email

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn reload trang
    if (!email) return;

    setLoading(true); // Bắt đầu quá trình đăng ký

    try {
      await registerWithEmail(email, "123456"); // Đăng ký qua firebase
    } catch (error) {
      // Không cần xử lý lỗi hay log nữa
    } finally {
      setLoading(false); // Kết thúc quá trình đăng ký
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Nhập email để đăng ký
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100" disabled={loading}>
        {loading ? "Đang đăng ký..." : "Đăng Ký"}
      </button>
    </form>
  );
};

export default RegisterPassword;
