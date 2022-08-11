import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import Home from "./Home";
import About from "./Misc/About";
import Help from "./Misc/Help";

import Login from "./Auth/Login";
import Register from "./Auth/Register";

import Layout from "./Layout";

const App = () => {
  const dispatch = useDispatch();
  const { handleAuthentication } = useAuthentication(dispatch);
  useEffect(() => {
    handleAuthentication();
  }, []);
  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/help" component={Help} />

      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      
    </Layout>
  );
};

export default App;
