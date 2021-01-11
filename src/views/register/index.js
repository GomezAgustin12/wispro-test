import React, { useState } from "react";
import { Form, Input, Button, Card, Layout, notification } from "antd";
import logo from "assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "components";
import "./styles.css";
import { postUserRedux } from "redux/user/userActions";

const { Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Register = () => {
  const [form] = Form.useForm();
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(postUserRedux(values));
      form.resetFields();
      notification.success({ message: "Usuario registrado" });
    } catch (error) {
      console.log(error.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Content className="register-page-container">
      {loading && <Loader />}
      <Card className="register-form-container">
        <div className="register-logo">
          <img src={logo} alt="logo" width="300px" />
        </div>
        <Form
          {...layout}
          form={form}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Nombre"
            name="name"
            rules={[{ required: true, message: "Ingrese nombre" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Apellido"
            name="lastname"
            rules={[{ required: true, message: "Ingrese apellido" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Usuario"
            name="username"
            rules={[{ required: true, message: "Ingrese usuario" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Ingrese Contraseña!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Correo"
            name="email"
            rules={[{ required: true, message: "Ingrese correo" }]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Registrarse
            </Button>
            <a href="/" style={{ marginLeft: "15px" }}>
              Atras
            </a>
          </Form.Item>
        </Form>
      </Card>
    </Content>
  );
};

export default Register;
