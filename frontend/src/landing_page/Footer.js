import React from "react";
import { Link } from "react-router-dom";
import "./navbar-footer.css";

const Footer = () => {
  return (
    <footer className="tl-footer">

      <div className="tl-footer-container">

        <div className="tl-footer-main">

          {/* BRAND */}
          <div className="tl-footer-brand">

            <Link to="/" className="tl-footer-brand-logo">
              <span className="tl-footer-brand-mark">T</span>
              <span className="tl-footer-brand-name">
                TradeLogix
              </span>
            </Link>

            <p className="tl-footer-description">
              A modern trading platform designed to make investing
              simple, transparent and accessible.
            </p>

          </div>

          {/* COMPANY */}
          <div className="tl-footer-column">
            <h4>Company</h4>

            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <a href="#careers">Careers</a>
              </li>

              <li>
                <a href="#press">Press & media</a>
              </li>

              <li>
                <a href="#tech">TradeLogix.tech</a>
              </li>
            </ul>
          </div>

          {/* PROGRAMMES */}
          <div className="tl-footer-column">
            <h4>Programmes</h4>

            <ul>
              <li>
                <a href="#referral">Referral programme</a>
              </li>

              <li>
                <a href="#community">Community</a>
              </li>

              <li>
                <a href="#csr">TradeLogix cares</a>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="tl-footer-column">
            <h4>Support</h4>

            <ul>
              <li>
                <Link to="/support">Support</Link>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>

              <li>
                <a href="#portal">Support portal</a>
              </li>

              <li>
                <a href="#charges">List of charges</a>
              </li>
            </ul>
          </div>

          {/* ACCOUNT */}
          <div className="tl-footer-column">
            <h4>Account</h4>

            <ul>
              <li>
                <Link to="/signup">Open an account</Link>
              </li>

              <li>
                <a href="#fund-transfer">Fund transfer</a>
              </li>

              <li>
                <a href="#challenge">60 day challenge</a>
              </li>

              <li>
                <a href="#downloads">Downloads & resources</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="tl-footer-divider"></div>

        <div className="tl-footer-bottom">

          <p className="tl-footer-copyright">
            © {new Date().getFullYear()} TradeLogix. All rights reserved.
          </p>

          <ul className="tl-footer-socials">
            <li>
              <a href="#linkedin">LinkedIn</a>
            </li>

            <li>
              <a href="#instagram">Instagram</a>
            </li>

            <li>
              <a href="#github">GitHub</a>
            </li>

            <li>
              <a href="#x">X</a>
            </li>
          </ul>

        </div>

        <div className="tl-footer-legal">

          <p>
            TradeLogix is a technology platform created for educational
            and demonstration purposes.
          </p>

          <p>
            Investments in securities market are subject to market risks.
            Read all related documents carefully before investing.
          </p>

          <p>
            Please ensure that you understand the risks associated with
            trading and investing before making any financial decision.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;