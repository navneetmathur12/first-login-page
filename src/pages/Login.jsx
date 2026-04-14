import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handlelogin = () => {
    const Userstore = JSON.parse(localStorage.getItem("user"));

    if (!Userstore) {
      alert("Please register first");
      return;
    }

    if (
      Userstore.email === data.email &&
      Userstore.password === data.password
    ) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/home");
    } else {
      alert("Wrong email or password");
    }
  };

  const handleSociallogin = (type) => {
    localStorage.setItem("isLoggedin", "true");
    alert(`${type} login successful`);
    navigate("/");
  };

  return (
    <div className="man_page">
      <div className="login_form">
        <h1>Login Page</h1>

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

        <button onClick={handlelogin}>Login</button>

        <p>
          Don't have any account?
          <button onClick={() => navigate("/register")}> Register</button>
        </p>

        <div className="divider">
          <span>Or login with</span>
        </div>

        <button onClick={() => handleSociallogin("Google")}>
          Continue with Google
        </button>

        <button onClick={() => handleSociallogin("Facebook")}>
          Continue with Facebook
        </button>
      </div>

      <div>
        <img src="/image/chair.jpg" alt="chair" className="chari_image" width={400} height={585}/>
      </div>
    </div>
  );
};

export default Login;
