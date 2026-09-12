import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: "⌂",
    },
    {
      name: "Orders",
      path: "/orders",
      icon: "▤",
    },
    {
      name: "Holdings",
      path: "/holdings",
      icon: "◫",
    },
    {
      name: "Positions",
      path: "/positions",
      icon: "↗",
    },
    {
      name: "Funds",
      path: "/funds",
      icon: "₹",
    },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <aside className="tl-sidebar">
      {/* Brand */}
      <div className="tl-sidebar-brand">
        <Link to="/" className="tl-brand-link">
          <div className="tl-brand-mark">
            TL
          </div>

          <div className="tl-brand-text">
            <span className="tl-brand-name">TradeLogix</span>
            <span className="tl-brand-tagline">
              Trade Smart. Log Success.
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="tl-sidebar-nav">
        <div className="tl-nav-section">
          <span className="tl-nav-section-title">
            MAIN MENU
          </span>

          <div className="tl-nav-list">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`tl-nav-item ${
                  isActive(item.path) ? "active" : ""
                }`}
              >
                <span className="tl-nav-icon">
                  {item.icon}
                </span>

                <span className="tl-nav-label">
                  {item.name}
                </span>

                {isActive(item.path) && (
                  <span className="tl-nav-active-indicator" />
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="tl-nav-section tl-nav-tools">
          <span className="tl-nav-section-title">
            TOOLS
          </span>

          <Link
            to="/"
            className="tl-nav-item"
          >
            <span className="tl-nav-icon">
              ◉
            </span>

            <span className="tl-nav-label">
              Market Watch
            </span>
          </Link>

          <Link
            to="/apps"
            className={`tl-nav-item ${
              location.pathname === "/apps" ? "active" : ""
            }`}
          >
            <span className="tl-nav-icon">
              ▦
            </span>

            <span className="tl-nav-label">
              Apps
            </span>
          </Link>
        </div>
      </nav>

      {/* Bottom section */}
      <div className="tl-sidebar-bottom">
        <div className="tl-sidebar-divider" />

        <Link
          to="/"
          className="tl-sidebar-bottom-item"
        >
          <span className="tl-bottom-icon">
            ⚙
          </span>

          <span>
            Settings
          </span>
        </Link>

        <button
          type="button"
          className="tl-sidebar-bottom-item tl-logout-button"
          onClick={() => {
            console.log("TradeLogix logout clicked");
          }}
        >
          <span className="tl-bottom-icon">
            ↪
          </span>

          <span>
            Logout
          </span>
        </button>

        {/* User Mini Profile */}
        <div className="tl-sidebar-user">
          <div className="tl-sidebar-avatar">
            DS
          </div>

          <div className="tl-sidebar-user-info">
            <strong>
              User Account
            </strong>

            <span>
              Active account
            </span>
          </div>

          <span className="tl-user-status" />
        </div>
      </div>
    </aside>
  );
};

export default Menu;