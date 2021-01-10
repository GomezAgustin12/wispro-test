import React from "react";
import { Form, Input, Button, Card, Layout } from "antd";
// import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import logo from "assets/logo.png";
import { Link } from "react-router-dom";
// import {
//   fetchUsersRequest,
//   fetchUsersSuccess,
//   fetchUsersFailure,
// } from "../../redux";
// import { login } from "../../api";
import { Loader } from "components";

const { Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
  const onFinish = async (values) => {
    // try {
    //   dispatch(fetchUsersRequest());
    //   const res = await login(values);
    //   dispatch(fetchUsersSuccess(res));
    // } catch (error) {
    //   dispatch(fetchUsersFailure());
    // }
  };

  // const dispatch = useDispatch();
  // const { loading } = useSelector((state) => state.user);
  const loading = false;

  const onFinishFailed = (errorInfo) => {
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
