import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    // Redirect to deployed Dashboard
    window.location.href = "https://tradelogix-2.onrender.com/";
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">

        {/* Left Side */}
        <div className="login-info">
          <div className="login-brand">
            <div className="login-brand-icon">T</div>
            <span>TradeLogix</span>
          </div>

          <div className="login-info-content">
            <span className="login-label">WELCOME BACK</span>

            <h1>
              Invest smarter.
              <br />
              Trade <span>better.</span>
            </h1>

            <p>
              Access your portfolio, track market movements and manage
              your investments from one powerful platform.
            </p>

            <div className="login-stats">
              <div>
                <strong>₹1.24L</strong>
                <span>Portfolio value</span>
              </div>

              <div>
                <strong>+3.56%</strong>
                <span>Today's return</span>
              </div>
            </div>
          </div>
        </div>

        {/* Login Card */}
        <div className="login-form-section">
          <div className="login-card">

            <div className="login-card-header">
              <h2>Welcome back</h2>
              <p>Login to continue to your TradeLogix account.</p>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="login-field">
                <label htmlFor="email">Email address</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="login-field">
                <div className="password-label">
                  <label htmlFor="password">Password</label>

                  <Link to="/forgot-password">
                    Forgot password?
                  </Link>
                </div>

                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <button type="submit" className="login-button">
                Login
                <span>→</span>
              </button>

            </form>

            <div className="login-divider">
              <span>or</span>
            </div>

            <button
              type="button"
              className="google-login"
            >
              <span className="google-icon">G</span>
              Continue with Google
            </button>

            <p className="signup-text">
              Don't have an account?{" "}
              <Link to="/signup">Create an account</Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;