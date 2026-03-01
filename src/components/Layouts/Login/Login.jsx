import React from "react";
import { Helmet } from "react-helmet-async";

const Login = () => {
  return (
    <div>
      <Helmet>
        {" "}
        <title>Login | Firebase</title>
      </Helmet>
      <button>Login with Google</button>
    </div>
  );
};

export default Login;
