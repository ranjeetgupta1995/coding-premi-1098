import { useState } from "react";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const [isAuth] = useState(localStorage.getItem("token") || "");
  const logOut = async () => {
    localStorage.setItem("token", "");
  };

  if (!isAuth) {
    return <Navigate to="/login" replace={true} />;
  }
  return (
    <>
      <button onClick={logOut}>Logout</button>
    </>
  );
};

export default Logout;
