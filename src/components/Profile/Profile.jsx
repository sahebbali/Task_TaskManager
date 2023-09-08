import React, {  useRef } from "react";

import {
  ErrorToast,
  getBase64,
  IsEmail,
  IsEmpty,
  IsMobile,
} from "../../helper/FormHelper";
import { useNavigate } from "react-router-dom";
import { getUserDetails } from "../../helper/SessionHelper";

const Profile = () => {
  let emailRef,
    firstNameRef,
    lastNameRef,
    mobileRef,
    passwordRef = useRef();

  const { Name, email, bio } = getUserDetails();
  const photo = getUserDetails()
    ? getUserDetails()["photo"]
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHozIxtgJx0gbDdzgKy7hcRkDoP7houIjY65EDeY&s";

  const UpdateMyProfile = () => {
    let email = emailRef.value;
    let fastName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let mobile = mobileRef.value;
    let password = passwordRef.value;
    let photo = userImgView.src;

    if (IsEmail(email)) {
      ErrorToast("Valid Email Address Required !");
    } else if (IsEmpty(fastName)) {
      ErrorToast("First Name Required !");
    } else if (IsEmpty(lastName)) {
      ErrorToast("Last Name Required !");
    } else if (!IsMobile(mobile)) {
      ErrorToast("Valid Mobile  Required !");
    } else if (IsEmpty(password)) {
      ErrorToast("Password Required !");
    } else {
      // ProfileUpdateRequest(email,fastName,lastName,mobile,password,photo).then((result)=>{
      //     if(result===true){
      //         navigate("/")
      //     }
      // })
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="container-fluid flex">
                <div className="d-flex">
                  <div>
                    <img className="icon-nav-img-lg" src={photo} alt=" user" />
                  </div>
                  <div className="col-4 p-2">
                    <label> Bio</label>
                    <input
                      key={Date.now()}
                      readOnly={true}
                      ref={(input) => (emailRef = input)}
                      value={bio}
                      placeholder="User Email"
                      className="form-control animated fadeInUp"
                      type="text"
                    />
                  </div>
                </div>

                <hr />
                <div className="row">
                  <div className="col-4 p-2">
                    <label>Email Address</label>
                    <input
                      key={Date.now()}
                      readOnly={true}
                      ref={(input) => (emailRef = input)}
                      value={email}
                      placeholder="User Email"
                      className="form-control animated fadeInUp"
                      type="email"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>Name</label>
                    <input
                      key={Date.now()}
                      ref={(input) => (firstNameRef = input)}
                      value={Name}
                      placeholder="Your Name"
                      className="form-control animated fadeInUp"
                      type="text"
                    />
                  </div>

                  {/* <div className="col-4 p-2">
                    <label>Mobile</label>
                    <input
                      key={Date.now()}
                      ref={(input) => (mobileRef = input)}
                      value={mobile}
                      placeholder="Mobile"
                      className="form-control animated fadeInUp"
                      type="mobile"
                    />
                  </div> */}

                  <div className="col-4 p-2">
                    {/* <button
                      onClick={UpdateMyProfile}
                      className="btn w-100 float-end btn-primary animated fadeInUp"
                    >
                      Update
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
