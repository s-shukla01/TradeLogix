import React from "react";
import nithinImage from "./n.jpg";

function Team() {
  return (
    <section className="about-team">
      <div className="about-container">

        <div className="about-team-header">
          <div className="about-section-label">
            OUR TEAM
          </div>

          <h2 className="about-section-title">
            People behind
            <br />
            <span>TradeLogix.</span>
          </h2>
        </div>

        <div className="about-team-profile">

          {/* LEFT - SMALL IMAGE */}
          <div className="about-team-person">
            <img
              src={nithinImage}
              alt="Nithin Kamath"
              className="about-team-photo"
            />

            <h3>Nithin Kamath</h3>

            <p className="about-team-role">
              Founder, CEO
            </p>
          </div>

          {/* RIGHT - CONTENT */}
          <div className="about-team-content">

            <p>
              Nithin bootstrapped and founded Zerodha in 2010
              to overcome the hurdles he faced during his
              decade-long stint as a trader.
            </p>

            <p>
              Today, Zerodha has changed the landscape of the
              Indian broking industry.
            </p>

            <p>
              He is a member of the SEBI Secondary Market
              Advisory Committee (SMAC) and the Market Data
              Advisory Committee (MDAC).
            </p>

            <p>
              Playing basketball is his zen.
            </p>

            <p className="about-team-links">
              Connect on{" "}
              <a href="#">Homepage</a>
              {" / "}
              <a href="#">TradingQnA</a>
              {" / "}
              <a href="#">Twitter</a>
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Team;