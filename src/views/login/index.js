import React from "react";
import { Form, Input, Button, Card, Layout, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import logo from "assets/logo.png";
import { Link } from "react-router-dom";
import { Loader } from "components";
import { loginRedux } from "redux/user/userActions";
import "./styles.css";

const { Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  const onFinish = async (values) => {
    try {
      dispatch(loginRedux(values));
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    notification.error({ message: "Usuario o contraseña incorrecta" });
    console.log("Failed:", errorInfo);
  };

  return (
    <Content className="login-page-container">
      {loading && <Loader />}

      <Card bordered={false} className="login-form-container">
        <div className="login-logo">
          <img src={logo} alt="logo" width="250px" />
        </div>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Usuario"
            name="username"
            rules={[
              { required: true, message: "Por favor ingrese su usuario!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              { required: true, message: "Por favor ingrese su contraseña!" },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Ingresar
            </Button>
            <div className="to-register">
              <Link to="/register">Registrarme</Link>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </Content>
  );
};

export default Login;
