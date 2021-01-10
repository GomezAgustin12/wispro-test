import React, { useState } from "react";
import { Form, Input, Button, Card, Layout } from "antd";
import logo from "assets/logo.png";
import { useSelector } from "react-redux";
// import { postStudent, postUser } from "../../api";
import { Loader } from "components";
import Axios from "axios";
import "./styles.css";

const { Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Register = () => {
  const [foto, setFoto] = useState();
  const [form] = Form.useForm();
  console.log("Entre");

  const onFinish = async (values) => {
    // try {
    //   const { user } = await postUser({
    //     nombre: values.name,
    //     apellido: values.lastName,
    //     username: values.username,
    //     email: values.email,
    //     password: values.password,
    //     Provincia: values.Provincia,
    //     fotoPerfil: null,
    //     AppRole: "student",
    //   });
    //   form.resetFields();
    //   notification.success({ message: "Usuario registrado" });
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  const { loading } = useSelector((state) => state.user);

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
            name="lastName"
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
