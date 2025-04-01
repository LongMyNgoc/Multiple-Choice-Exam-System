// components/GoogleLoginButton.tsx
import { FcGoogle } from "react-icons/fc";
import { hoverEffect, clickEffect } from "../../utils/hoverEffects";

interface GoogleLoginButtonProps {
  onClick?: () => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onClick }) => {
  return (
    <button 
      className="btn w-100 d-flex align-items-center justify-content-center mb-3"
      style={{ backgroundColor: "#FFA3BE", border: "1px solid #ccc", padding: "10px" }}
      onMouseOver={(e) => hoverEffect(e, "in")}
      onMouseOut={(e) => hoverEffect(e, "out")}
      onMouseDown={(e) => clickEffect(e, "down")}
      onMouseUp={(e) => clickEffect(e, "up")}
      onClick={onClick}
    >
      <FcGoogle size={24} className="me-2" />
      Continue with Google
    </button>
  );
};

export default GoogleLoginButton;
