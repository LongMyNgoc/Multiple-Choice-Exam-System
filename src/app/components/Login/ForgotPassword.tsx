import { useState } from "react";
import { resetPassword } from "@/app/utils/authFirebase/authForgotPassword";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn reload trang
    if (!email) return;

    await resetPassword(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Nhập email để đặt lại mật khẩu
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
      <button type="submit" className="btn btn-primary w-100">
        Gửi email đặt lại mật khẩu
      </button>
    </form>
  );
};

export default ForgotPassword;
