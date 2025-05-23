"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Login_Image from "../../assets/Login/Login_Image.png";
import AuthLinks from "./AuthLinks";
import GoogleLoginButton from "./GoogleLoginButton";
import { hoverEffect, clickEffect } from "../../utils/hoverEffects";
import { loginWithEmail } from "@/app/utils/authFirebase/authLoginWithEmail";
import MobileLogin from "./MobileLogin";
import useIsMobile from "@/app/hooks/useIsMobile";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const isMobile = useIsMobile();
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    const result = await loginWithEmail(email, password);
    setLoading(false);
    if (result.error === null) {
      router.push('/pages/QuizList');
    }
  };

  // 👇 Nếu là thiết bị mobile thì trả về layout mobile
  if (isMobile) {
    return <MobileLogin />;
  }

  // 👇 Desktop layout
  return (
    <div className="d-flex" style={{ backgroundColor: "#F9E6E6", minHeight: "100vh" }}>
      <div className="d-flex flex-column justify-content-start align-items-start p-5 w-50">
        <h1 className="mb-4">Login Now</h1>
        <p className="mb-4">Hi, Welcome back 👋</p>

        <GoogleLoginButton />

        <div className="text-center w-100 mb-3" style={{ fontSize: "0.9rem", color: "#666" }}>
          ─────── or Login with Email ───────
        </div>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter your email"
          style={{ backgroundColor: "#FFA3BE", border: "none", padding: "10px" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={(e) => e.currentTarget.style.boxShadow = "0 0 5px rgba(71, 75, 202, 0.5)"}
          onBlur={(e) => e.currentTarget.style.boxShadow = "none"}
        />

        <div className="mb-3 w-100 position-relative">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            placeholder="Enter your password"
            style={{ backgroundColor: "#FFA3BE", border: "none", padding: "10px" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={(e) => e.currentTarget.style.boxShadow = "0 0 5px rgba(71, 75, 202, 0.5)"}
            onBlur={(e) => e.currentTarget.style.boxShadow = "none"}
          />
          <button
            type="button"
            className="position-absolute top-50 end-0 translate-middle p-2 border-0 bg-transparent"
            style={{ cursor: "pointer" }}
            onClick={() => setShowPassword(!showPassword)}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(71, 75, 202, 0.1)"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "transparent"}
          >
          </button>
        </div>

        <button
          className="btn w-100"
          style={{ backgroundColor: "#474BCA", color: "white" }}
          onMouseOver={(e) => hoverEffect(e, "in")}
          onMouseOut={(e) => hoverEffect(e, "out")}
          onMouseDown={(e) => clickEffect(e, "down")}
          onMouseUp={(e) => clickEffect(e, "up")}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Đang đăng nhập..." : "Login"}
        </button>

        <AuthLinks />
      </div>

      <div className="w-50 d-grid justify-items-center" style={{ marginTop: "5%" }}>
        <Image src={Login_Image} alt="Login" className={`img-fluid`} />
      </div>
    </div>
  );
};

export default Login;
