import Link from "next/link";
import { linkHover } from "../../utils/hoverEffects";

const AuthLinks = () => {
  return (
    <div className="mt-3 d-flex justify-content-between w-100">
      <Link 
        href="/forgot-password" 
        className="text-decoration-none"
        style={{ fontSize: "0.9rem", color: "#007BFF", transition: "all 0.3s ease-in-out" }}
        onMouseOver={(e) => linkHover(e, "in")}
        onMouseOut={(e) => linkHover(e, "out")}
      >
        Forgot Password?
      </Link>
      <Link 
        href="/signup" 
        className="text-decoration-none"
        style={{ fontSize: "0.9rem", color: "#007BFF", transition: "all 0.3s ease-in-out" }}
        onMouseOver={(e) => linkHover(e, "in")}
        onMouseOut={(e) => linkHover(e, "out")}
      >
        Not registered yet? Create an account SignUp
      </Link>
    </div>
  );
};

export default AuthLinks;
