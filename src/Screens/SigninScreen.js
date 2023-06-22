import React, { useState } from "react";
import Footer from "../Components/AfterLogin/Footer";
import Navbar from "../Components/AfterLogin/Navbar";
import "../Styles/AfterLoginStyles/SigninScreen.css";

function SigninScreen() {
  const [signIn, setSignIn] = useState(true);
  const [signUp, setSignUp] = useState(false);
  const handleSignin = () => {
    setSignUp(true);
    setSignIn(false);
  };
  const handleSignup = () => {
    setSignUp(false);
    setSignIn(true);
  };

  return (
    <div>
      <Navbar />
      {/*  Signin */}
      {signIn && (
        <div className="container" style={{ marginBottom: "3rem" }}>
          <div className="row">
            <div className="col-md-3 col-xs-12 col-sm-12"></div>
            <div className="col-md-6 col-xs-12 col-sm-12 signin-box">
              <div
                className="logo-box"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "2rem",
                }}
              >
                <img
                  src="images/LeetCode_logo_rvs.png"
                  className="logo-img"
                  style={{ width: "6rem" }}
                  alt="logo"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                ></label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Username  or E-mail"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                ></label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Password"
                />
              </div>
              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button" id="btn-signin">
                  Sign In
                </button>
              </div>
              <div className="before-signin-btn">
                <p>Forgot Password?</p>
                <p style={{ cursor: "pointer" }} onClick={handleSignin}>
                  Sign Up
                </p>
              </div>
              <div className="other-signin-method">
                <p style={{ marginBottom: "2rem" }}>or you can sign in with</p>

                <div className="other-signin-method-images">
                  <span className="icon github-icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span className="icon google-icon">
                    <i class="fab fa-google"></i>{" "}
                  </span>
                  <span className="icon facebook-icon">
                    <i class="fab fa-facebook"></i>{" "}
                  </span>
                  <span className="icon spinner-icon">
                    <i class="fas fa-spinner"></i>{" "}
                  </span>
                </div>
              </div>
              <div>
                <p className="texte">
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-xs-12 col-sm-12"></div>
          </div>
        </div>
      )}

      {/* singn Up */}
      {signUp && (
        <div className="container" style={{ marginBottom: "3rem" }}>
          <div className="row">
            <div className="col-md-3 col-xs-12 col-sm-12"></div>
            <div className="col-md-6 col-xs-12 col-sm-12 signin-box">
              <div
                className="logo-box"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "2rem",
                }}
              >
                <img
                  src="images/LeetCode_logo_rvs.png"
                  className="logo-img"
                  style={{ width: "6rem" }}
                  alt="logo"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                ></label>
                <input
                  type="texte"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Username  "
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                ></label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Password"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                ></label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Confirm Password"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                ></label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Username  or E-mail"
                />
              </div>
              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button" id="btn-signin">
                  Sign Up
                </button>
              </div>
              <div className="before-signin-btn">
                <p>Forgot Password?</p>
                <p style={{ cursor: "pointer" }} onClick={handleSignup}>
                  {" "}
                  Sign In
                </p>
              </div>
              <div className="other-signin-method">
                <p style={{ marginBottom: "2rem" }}>or you can sign in with</p>
                <div className="other-signin-method-images">
                  <span className="icon github-icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span className="icon google-icon">
                    <i class="fab fa-google"></i>{" "}
                  </span>
                  <span className="icon facebook-icon">
                    <i class="fab fa-facebook"></i>{" "}
                  </span>
                </div>
              </div>
              <div>
                <p className="texte">
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-xs-12 col-sm-12"></div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default SigninScreen;
