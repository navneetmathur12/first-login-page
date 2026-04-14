import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleRegister = () => {
    if (!data.name || !data.email || !data.password) {
      alert("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert("Please enter a valid email");
      return;
    }

    localStorage.setItem("user", JSON.stringify(data));
    alert("Registered Successfully");
    navigate("/login");
  };

  return (
    <div className="man_page">
      <div className="register_form">
        <h1>Register Your Account</h1>
        <div className="input_box">
          <input
            type="text"
            value={data.name}
            required
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <label>Name</label>
        </div>

        <div className="input_box">
          <input
            type="email"
            value={data.email}
            required
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <label>Email</label>
        </div>

        <div className="input_box">
          <input
            type="password"
            value={data.password}
            required
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <label>Password</label>
        </div>

        <button onClick={handleRegister}>Register</button>

        <div className="social_login">
          <button onClick={() => handleSociallogin("Google")}>
            Continue with Google
          </button>

          <button onClick={() => handleSociallogin("Facebook")}>
            Continue with Facebook
          </button>
        </div>
      </div>

      <div>
        <img
          src="/image/chair.jpg"
          alt="chair"
          className="chari_image"
          width={400}
          height={570}
        />
      </div>
    </div>
  );
};

export default Register;
