import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Signup Data:", formData);

    // Backend signup API yahan connect kar sakte ho
    navigate("/login");
  };

  return (
    <div className="signup-page">
      <div className="signup-wrapper">

        {/* LEFT SECTION */}
        <section className="signup-info">

          <div className="signup-brand">
            <div className="signup-brand-icon">T</div>
            <span>TradeLogix</span>
          </div>

          <div className="signup-info-content">

            <span className="signup-label">
              START YOUR JOURNEY
            </span>

            <h1>
              Build your
              <br />
              investing
              <br />
              <span>future.</span>
            </h1>

            <p>
              Join TradeLogix and get a simple, powerful platform
              designed to help you understand markets and manage
              your investments with confidence.
            </p>

            <div className="signup-benefits">

              <div className="signup-benefit">
                <div className="benefit-icon">✓</div>
                <div>
                  <strong>Simple investing</strong>
                  <span>Clean and intuitive experience</span>
                </div>
              </div>

              <div className="signup-benefit">
                <div className="benefit-icon">✓</div>
                <div>
                  <strong>Powerful tools</strong>
                  <span>Everything you need to trade smarter</span>
                </div>
              </div>

              <div className="signup-benefit">
                <div className="benefit-icon">✓</div>
                <div>
                  <strong>Transparent experience</strong>
                  <span>Clear information at every step</span>
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* RIGHT SECTION */}
        <section className="signup-form-section">

          <div className="signup-card">

            <div className="signup-card-header">
              <h2>Create your account</h2>

              <p>
                Start your journey with TradeLogix today.
              </p>
            </div>

            <form onSubmit={handleSubmit}>

              {/* NAME */}
              <div className="signup-field">
                <label htmlFor="name">
                  Full name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="signup-field">
                <label htmlFor="email">
                  Email address
                </label>

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

              {/* PASSWORD */}
              <div className="signup-field">

                <label htmlFor="password">
                  Password
                </label>

                <div className="signup-password-input">

                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength={6}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>
              </div>

              {/* CONFIRM PASSWORD */}
              <div className="signup-field">

                <label htmlFor="confirmPassword">
                  Confirm password
                </label>

                <div className="signup-password-input">

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    minLength={6}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>

                </div>
              </div>

              {/* TERMS */}
              <label className="signup-terms">
                <input type="checkbox" required />

                <span>
                  I agree to the{" "}
                  <a href="/terms">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>

              {/* SUBMIT */}
              <button
                type="submit"
                className="signup-button"
              >
                Create account
                <span>→</span>
              </button>

            </form>

            <div className="signup-divider">
              <span>or</span>
            </div>

            <button
              type="button"
              className="signup-google"
            >
              <span>G</span>
              Continue with Google
            </button>

            <p className="login-link">
              Already have an account?{" "}
              <Link to="/login">
                Login
              </Link>
            </p>

          </div>

        </section>

      </div>
    </div>
  );
};

export default Signup;