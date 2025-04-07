// hooks/useUserEmail.ts
import { useEffect, useState } from "react";

const useUserEmail = (): string | null => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
    }
  }, []);

  return userEmail;
};

export default useUserEmail;
