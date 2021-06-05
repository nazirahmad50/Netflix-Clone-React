import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";
function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
      </div>
      <button className="loginScreen__button" onClick={() => setSignIn(true)}>
        Sign In
      </button>

      <div className="loginScreen__gradient" />

      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited Films, TV programs and more.</h1>
            <h2>Watch anywhere and cancel anytime</h2>
            <h2>ready to watch create your email</h2>

            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginScreen__getStarted"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
