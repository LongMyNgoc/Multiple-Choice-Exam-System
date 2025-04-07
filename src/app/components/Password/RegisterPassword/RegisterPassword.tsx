import { useState } from "react";
import { registerWithEmail } from "@/app/utils/authFirebase/authRegisterWithEmail";

const RegisterPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Thêm state cho password
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setLoading(true);

    try {
      await registerWithEmail(email, password); // Dùng mật khẩu người dùng nhập
    } catch (error) {
      // Có thể thêm hiển thị lỗi ở đây nếu cần
    } finally {
      setLoading(false);
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
          placeholder="nguyenphilong.dev@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Nhập mật khẩu
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
