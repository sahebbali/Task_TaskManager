import React, { Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import { getUserDetails } from "../../helper/SessionHelper";
import "../../assets/CSS/bootstrap.css";
import { ErrorToast, IsEmail, IsEmpty } from "../../helper/FormHelper";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  let passRef,
    emailRef = useRef();
  const { email: userEmail, password: userPassword } = getUserDetails()
    ? getUserDetails()
    : "";
  console.log({ userEmail });
  console.log({ userPassword });

  const SubmitLogin = () => {
    let email = emailRef.value;
    let pass = passRef.value;
    if (IsEmail(email)) {
      ErrorToast("Invalid Email Address");
    } else if (IsEmpty(pass)) {
      ErrorToast("Password Required");
    } else {
      if (email === userEmail && pass === userPassword) {
        toast.success("Login successfull");
        window.location.href = "/Create";
      } else {
        toast.error(" Please Give Vaild Email and Password ");
      }
    }
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-90  p-4">
              <div className="card-body">
                <h4>SIGN IN</h4>
                <br />
                <input
                  ref={(input) => (emailRef = input)}
                  placeholder="User Email"
                  className="form-control animated fadeInUp"
                  type="email"
                />
                <br />
                <input
                  ref={(input) => (passRef = input)}
                  placeholder="User Password"
                  className="form-control animated fadeInUp"
                  type="password"
                />
                <br />
                <button
                  onClick={SubmitLogin}
                  className="btn w-100 animated fadeInUp float-end btn-primary"
                >
                  Next
                </button>
                <hr />
                <div className="float-end mt-3">
                  <span>
                    <Link
                      className="text-center ms-3 h6 animated fadeInUp"
                      to="/Registration"
                    >
                      Sign Up{" "}
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </Fragment>
  );
};
export default Login;
