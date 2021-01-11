import React from "react";
import { Button, Layout } from "antd";
import "./styles.css";
import { Footer, PageContent } from "components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "redux/user/userActions";
import logo from "assets/logo.png";

const { Header } = Layout;

const MainLayout = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Layout className={"site-layout"}>
      <Header className="header">
        <div className="logo">
          <img src={logo} alt="logo" height="50px" />
          <h1>Wispro Test</h1>
        </div>
        <Button
          className="logout"
          onClick={() => {
            dispatch(logout());
            history.push("/");
          }}
        >
          Cerrar Sesión
        </Button>
      </Header>
      <PageContent className={"pageContent"}>{props.children}</PageContent>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
