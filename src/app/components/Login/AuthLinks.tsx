"use client";

import Link from "next/link";
import { useState } from "react";
import ForgotPasswordModal from "../Password/ForgotPassword/ForgotPasswordModal";
import RegisterModal from "../Password/RegisterPassword/RegisterModal";
import { linkHover } from "../../utils/hoverEffects";

const AuthLinks = () => {
  const [showForgot, setShowForgot] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <div className="mt-3 d-flex justify-content-between w-100">
        <Link
          href="#"
          className="text-decoration-none"
          onClick={() => setShowForgot(true)}
          style={{ fontSize: "0.9rem", color: "#007BFF", transition: "all 0.3s ease-in-out" }}
          onMouseOver={(e) => linkHover(e, "in")}
          onMouseOut={(e) => linkHover(e, "out")}
        >
          Forgot Password?
        </Link>

        <Link
          href="#"
          className="text-decoration-none"
          style={{ fontSize: "0.9rem", color: "#007BFF", transition: "all 0.3s ease-in-out" }}
          onClick={() => setShowRegister(true)}
          onMouseOver={(e) => linkHover(e, "in")}
          onMouseOut={(e) => linkHover(e, "out")}
        >
          Not registered yet? Sign up
        </Link>
      </div>

      {/* Modal Bootstrap for Forgot Password */}
      <ForgotPasswordModal show={showForgot} onClose={() => setShowForgot(false)} />

      {/* Modal Bootstrap for Register */}
      <RegisterModal show={showRegister} onClose={() => setShowRegister(false)} />
    </>
  );
};

export default AuthLinks;
