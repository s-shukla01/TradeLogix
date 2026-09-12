import React from "react";

const Stats = () => {
  return (
    <section className="tl-home-stats">
      <div className="tl-home-container">
        <div className="tl-home-stats-grid">

          <div className="tl-home-stats-content">
            <span className="tl-home-eyebrow">TRADE WITH CONFIDENCE</span>

            <h2>
              Your portfolio.
              <span> Your rules.</span>
            </h2>

            <p>
              TradeLogix gives you a complete view of your investments,
              positions and market movements from one intelligent
              workspace.
            </p>

            <div className="tl-home-stat-list">
              <div className="tl-home-stat-item">
                <strong>Real-time</strong>
                <span>Market updates</span>
              </div>

              <div className="tl-home-stat-item">
                <strong>Smart</strong>
                <span>Portfolio insights</span>
              </div>

              <div className="tl-home-stat-item">
                <strong>Secure</strong>
                <span>Trading experience</span>
              </div>
            </div>
          </div>

          <div className="tl-home-stats-visual">
            <div className="tl-home-stat-panel">

              <div className="tl-home-stat-panel-header">
                <div>
                  <span>Portfolio overview</span>
                  <strong>₹1,24,850</strong>
                </div>

                <span className="tl-home-positive">
                  +13.68%
                </span>
              </div>

              <div className="tl-home-progress-row">
                <div>
                  <span>Equity</span>
                  <strong>₹82,450</strong>
                </div>

                <div className="tl-home-progress">
                  <i style={{ width: "76%" }}></i>
                </div>
              </div>

              <div className="tl-home-progress-row">
                <div>
                  <span>Mutual Funds</span>
                  <strong>₹28,200</strong>
                </div>

                <div className="tl-home-progress">
                  <i style={{ width: "52%" }}></i>
                </div>
              </div>

              <div className="tl-home-progress-row">
                <div>
                  <span>Cash</span>
                  <strong>₹14,200</strong>
                </div>

                <div className="tl-home-progress">
                  <i style={{ width: "30%" }}></i>
                </div>
              </div>

              <div className="tl-home-mini-chart">
                <span>09:15</span>
                <span>11:00</span>
                <span>13:00</span>
                <span>15:30</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;