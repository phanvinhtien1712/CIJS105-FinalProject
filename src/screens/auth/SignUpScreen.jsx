import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignUpWrapper = styled.div`
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
    background-color: rgb(53, 56, 55);
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

const SignUpScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!username || !password || !email) {
      alert("Vui lòng điền đầy đủ thông tin đăng ký.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((u) => u.username === username || u.email === email)) {
      alert("Tên người dùng hoặc email đã tồn tại.");
      return;
    }
    const newUser = { username, password, email, cart: [] };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công! Vui lòng đăng nhập.");
    navigate("/sign_in");
  };

  return (
    <SignUpWrapper>
      <h2>Đăng Ký</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Đăng Ký</button>
      </form>
      <div className="link-group">
        Bạn đã có tài khoản? <Link to="/sign_in">Đăng Nhập</Link>
      </div>
    </SignUpWrapper>
  );
};

export default SignUpScreen;
