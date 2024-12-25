import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, Flex, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LoginStyle.css";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const onFinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/v1/Admin/register", values);
      if (res.data.success) {
        message.success(res.data.message);
        navigate("/login");
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
        <Form
          layout="vertical"
          className="cardRegister"
          onFinish={onFinishHandler}
          onFinishFailed={onFinishFailedHandler}
        >
          <center>
            <h1>Register</h1>
          </center>
          <Form.Item
            label="name"
            className="form-label"
            name={"name"}
            rules={[{ required: true, message: "username is required" }]}
          >
            <Input prefix={<UserOutlined />} className="input-box" />
          </Form.Item>

          <Form.Item
            label="email"
            name={"email"}
            className="form-label"
            rules={[{ required: true, message: "Email is required" }]}
          >
            <Input className="input-box" />
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
            <Link to={"/login"} className="ms-4">
              {" "}
              login now
            </Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Register;
