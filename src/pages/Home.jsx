import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const handlelogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div>
      hyyyy home page
      my home page
      {/* <button onClick={handlelogout}>Logout</button> */}
    </div>
  );
};

export default Home;
