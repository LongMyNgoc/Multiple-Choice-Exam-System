"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { loginWithEmail } from "@/app/utils/authFirebase/authLoginWithEmail";
import AuthLinks from "./AuthLinks";
import GoogleLoginButton from "./GoogleLoginButton";
import { hoverEffect, clickEffect } from "../../utils/hoverEffects";

const MobileLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    const result = await loginWithEmail(email, password);
    setLoading(false);
    if (result.error === null) {
      router.push('/pages/QuizList');
    }
  };

  return (
    <div
      className="d-flex justify-content-center"
      style={{ backgroundColor: "#F9E6E6", height: "85vh", overflow: "hidden" }}
    >

      <div
        className="d-flex flex-column justify-content-start align-items-center p-4 w-100"
        style={{ maxWidth: "400px" }}
      >

        <h1 className="mb-3 text-center">Login Now</h1>
        <p className="mb-3 text-center">Hi, Welcome back 👋</p>

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
          className="btn w-100 mb-3"
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
    </div>
  );
};

export default MobileLogin;
