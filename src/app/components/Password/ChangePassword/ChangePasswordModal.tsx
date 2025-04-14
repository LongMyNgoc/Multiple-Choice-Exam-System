"use client";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { changePassword } from "@/app/utils/authFirebase/authChangePassword";
import { reauthenticate } from "@/app/utils/authFirebase/authReauthenticate";
import { ChangePasswordModalProps } from "@/app/types/password";
import useClearEmail from '@/app/hooks/useClearEmail';

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({ show, onClose }) => {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const clearEmail = useClearEmail();

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      toast.warning("Mật khẩu mới và mật khẩu xác nhận không khớp.");
      return;
    }

    // Kiểm tra mật khẩu mới phải dài ít nhất 6 ký tự
    if (newPassword.length < 6) {
      toast.warning("Mật khẩu mới phải dài ít nhất 6 ký tự.");
      return;
    }

    setLoading(true);

    // Kiểm tra mật khẩu cũ
    const isReauthenticated = await reauthenticate(oldPassword); // Kiểm tra mật khẩu cũ
    if (!isReauthenticated) {
      setLoading(false);
      return;
    }

    // Thực hiện đổi mật khẩu
    const result = await changePassword(newPassword);

    if (result.error) {
      toast.error(result.error);
    } else {
      onClose(); // Đóng modal sau khi thay đổi mật khẩu thành công
      clearEmail();
      router.push('/');
    }

    setLoading(false);
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Đổi mật khẩu</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formOldPassword">
            <Form.Label>Mật khẩu cũ</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập mật khẩu cũ"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)} // Cập nhật mật khẩu cũ
            />
          </Form.Group>

          <Form.Group controlId="formNewPassword" className="mt-3">
            <Form.Label>Mật khẩu mới</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập mật khẩu mới"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)} // Cập nhật mật khẩu mới
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword" className="mt-3">
            <Form.Label>Xác nhận mật khẩu mới</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập lại mật khẩu mới"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} // Cập nhật mật khẩu xác nhận
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Hủy
        </Button>
        <Button variant="primary" onClick={handlePasswordChange} disabled={loading}>
          {loading ? "Đang xử lý..." : "Xác nhận"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ChangePasswordModal;
