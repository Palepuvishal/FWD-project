import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, Flex, Space, message } from "antd";
import { useNavigate, Link } from "react-router-dom";
import "../styles/LoginStyle.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const onFinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/v1/Admin/login", values);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("User Found");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };

  const onFinishFailedHandler = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="form-container">
        <div className="image">
          <img src="" alt="not found" />
        </div>
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          onFinishFailed={onFinishFailedHandler}
          className="cardlogin"
        >
          <h1 className="text-center"> Login</h1>
          <Form.Item
            label="email"
            className="form-label"
            name={"email"}
            rules={[{ required: true, message: "email is required" }]}
          >
            <Input prefix={<UserOutlined />} className="input-box" />
          </Form.Item>

          <Form.Item
            label="password"
            name={"password"}
            className="form-label"
            rules={[{ required: true, message: "password is required" }]}
          >
            <Input prefix={<LockOutlined />} className="input-box" />
          </Form.Item>

          <Form.Item className="form-label">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item className="form-label">
            <button type="submit" className="btn-to-submit">
              {" "}
              Submit
            </button>
            <Link to={"/register"} className="ms-4">
              {" "}
              Register now
            </Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
