import Link from "next/link";
import { linkHover, hoverEffect, clickEffect } from "../../utils/hoverEffects";
import ForgotPassword from "./ForgotPassword";
import RegisterPassword from "./RegisterPassword";
import { useState } from "react";

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
          onClick={() => setShowRegister(true)} // Set showRegister to true to show the modal
          onMouseOver={(e) => linkHover(e, "in")}
          onMouseOut={(e) => linkHover(e, "out")}
        >
          Not registered yet? Sign up
        </Link>
      </div>

      {/* Modal Bootstrap for Forgot Password */}
      {showForgot && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Quên mật khẩu</h5>
                <button type="button" className="btn-close" onClick={() => setShowForgot(false)}></button>
              </div>
              <div className="modal-body">
                <ForgotPassword />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowForgot(false)}>
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Bootstrap for Register */}
      {showRegister && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Đăng ký tài khoản</h5>
                <button type="button" className="btn-close" onClick={() => setShowRegister(false)}></button>
              </div>
              <div className="modal-body">
                <RegisterPassword /> {/* This is where the register component will appear */}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowRegister(false)}>
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthLinks;
