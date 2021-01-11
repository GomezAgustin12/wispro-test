import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login, Register, Home, Layout } from "views";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { fetchOneUserRedux } from "redux/user/userActions";

const Routes = () => {
  const { isLogin } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (token === null) return;
      const { id } = jwt_decode(token);
      dispatch(fetchOneUserRedux(id));
    } catch (error) {
      console.error("Routes error", error);
    }
  }, []);

  return (
    <Router>
      <>
        {!isLogin ? (
          <>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
          </>
        ) : (
          <Layout>
            <Route exact path="/" component={Home} />
          </Layout>
        )}
      </>
    </Router>
  );
};

export default Routes;
