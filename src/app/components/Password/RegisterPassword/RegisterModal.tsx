"use client";

import { FC } from "react";
import RegisterPassword from "./RegisterPassword";

interface RegisterModalProps {
  show: boolean;
  onClose: () => void;
}

const RegisterModal: FC<RegisterModalProps> = ({ show, onClose }) => {
  return (
    <div
      className={`modal fade ${show ? "show" : ""}`}
      style={{ display: show ? "block" : "none", backgroundColor: "rgba(0,0,0,0.5)" }}
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Đăng ký tài khoản</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <RegisterPassword />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
