import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://miro.medium.com/max/800/1*TTOJz35-lJmjWGj59786GA.png"
          alt="Discord Logo"
        />
      </div>
      <Button onClick={signIn}>Sign in</Button>
    </div>
  );
}

export default Login;
