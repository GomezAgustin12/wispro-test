import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login, Register, UserManagement, Dashboard } from "views";

const Routes = () => {
  const isLogin = false;
  return (
    <Router>
      <>
        {!isLogin ? (
          <>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
          </>
        ) : (
          <>
            <Route exact path="/" component={UserManagement} />
            <Route exact path="/dashboard" component={Dashboard} />
          </>
        )}
      </>
    </Router>
  );
};

export default Routes;
