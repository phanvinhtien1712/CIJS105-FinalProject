import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignInWrapper = styled.div`
  max-width: 400px;
  margin: 25rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  form {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 0.75rem;
    background-color: rgb(35, 37, 39);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .link-group {
    text-align: center;
    margin-top: 1rem;
    font-size: 0.9rem;
    a {
      color: rgb(238, 0, 0);
      text-decoration: none;
      font-weight: 500;
    }
  }
`;

const SignInScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) =>
        (u.username === username || u.email === username) &&
        u.password === password
    );
    if (user) {
      alert("Đăng nhập thành công!");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/");
      window.location.reload();
    } else {
      alert("Tên người dùng hoặc mật khẩu không chính xác.");
    }
  };

  return (
    <SignInWrapper>
      <h2>Đăng Nhập</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="text"
          placeholder="Tên đăng nhập hoặc Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Đăng Nhập</button>
      </form>
      <div className="link-group">
        Bạn chưa có tài khoản? <Link to="/sign_up">Đăng Ký</Link>
      </div>
    </SignInWrapper>
  );
};

export default SignInScreen;
