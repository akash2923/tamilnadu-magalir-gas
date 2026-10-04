 import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loginType, setLoginType] = useState("phone");
  const [phone, setPhone] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");

  const sendOtp = () => {
    setError("");

    if (loginType === "phone" && phone.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (loginType === "aadhaar" && aadhaar.length !== 12) {
      setError("Please enter a valid 12-digit Aadhaar number.");
      return;
    }

    setOtpSent(true);
  };

  const login = () => {
    if (otp !== "123456") {
      setError("Invalid OTP. Use 123456 for this prototype.");
      return;
    }

    navigate("/home");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="logo-section">
          <div className="logo-circle">TN</div>

          <h1>Magalir Gas</h1>

          <p>
            Tamil Nadu LPG Booking Portal
          </p>
        </div>

        <div className="login-tabs">

          <button
            className={loginType === "phone" ? "active" : ""}
            onClick={() => {
              setLoginType("phone");
              setError("");
            }}
          >
            Phone Number
          </button>

          <button
            className={loginType === "aadhaar" ? "active" : ""}
            onClick={() => {
              setLoginType("aadhaar");
              setError("");
            }}
          >
            Aadhaar
          </button>

        </div>

        {loginType === "phone" ? (

          <div className="form-group">

            <label>Mobile Number</label>

            <input
              type="text"
              placeholder="Enter 10-digit mobile number"
              maxLength="10"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, ""))
              }
            />

          </div>

        ) : (

          <div className="form-group">

            <label>Aadhaar Number</label>

            <input
              type="password"
              placeholder="Enter 12-digit Aadhaar number"
              maxLength="12"
              value={aadhaar}
              onChange={(e) =>
                setAadhaar(e.target.value.replace(/\D/g, ""))
              }
            />

          </div>

        )}

        {!otpSent ? (

          <button
            className="primary-button"
            onClick={sendOtp}
          >
            Send OTP
          </button>

        ) : (

          <>
            <div className="otp-info">
              Demo OTP: <strong>123456</strong>
            </div>

            <div className="form-group">

              <label>Enter OTP</label>

              <input
                type="text"
                placeholder="Enter 6-digit OTP"
                maxLength="6"
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, ""))
                }
              />

            </div>

            <button
              className="primary-button"
              onClick={login}
            >
              Login
            </button>
          </>

        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <p className="demo-text">
          This is a frontend prototype. No real authentication is performed.
        </p>

      </div>

    </div>
  );
}

export default Login;