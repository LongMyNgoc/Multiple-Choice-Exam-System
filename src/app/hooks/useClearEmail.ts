// hooks/useClearEmail.ts
const useClearEmail = () => {
    const clearUserEmail = () => {
      localStorage.removeItem("userEmail");
    };
  
    return clearUserEmail;
  };
  
  export default useClearEmail;
  