class SessionHelper {
  setUserDetails(UserDetails) {
    if (UserDetails) {
      localStorage.setItem("UserDetails", JSON.stringify(UserDetails));
    }
  }
  getUserDetails() {
    return JSON.parse(localStorage.getItem("UserDetails"));
  }

  getTaskDetails() {
    return JSON.parse(localStorage.getItem("myData")) || [];
  }

  setEmail(Email) {
    localStorage.setItem("Email", Email);
  }
  getEmail() {
    return localStorage.getItem("Email");
  }

  setOTP(OTP) {
    localStorage.setItem("OTP", OTP);
  }
  getOTP() {
    return localStorage.getItem("OTP");
  }

  removeSessions = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
}
export const {
  setEmail,
  getEmail,
  setOTP,
  getOTP,
  setToken,
  getToken,
  setUserDetails,
  getUserDetails,
  getTaskDetails,
  removeSessions,
} = new SessionHelper();
