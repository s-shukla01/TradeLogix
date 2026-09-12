import React from "react";
import "./support.css";

const topics = [
  "Online Account Opening",
  "Offline Account Opening",
  "Company, Partnership and HUF Account",
  "NRI Account Opening",
  "Charges at TradeLogix",
  "TradeLogix IDFC FIRST Bank 3-in-1 Account",
  "Getting Started",
];

const SupportPage = () => {
  return (
    <main className="support-page">

      {/* Hero */}
      <section className="support-hero">
        <div className="support-container">

          <span className="support-eyebrow">
            SUPPORT PORTAL
          </span>

          <h1>
            How can we <span>help?</span>
          </h1>

          <p>
            Search for an answer or browse help topics to get
            the support you need.
          </p>

          <div className="support-search">
            <span className="support-search-icon">⌕</span>

            <input
              type="text"
              placeholder="Search for a question, topic or keyword..."
            />

            <button type="button">
              Search
            </button>
          </div>

          <div className="support-quick-links">
            <span>Popular:</span>
            <a href="#account">Account opening</a>
            <a href="#trading">Trading</a>
            <a href="#funds">Funds</a>
            <a href="#orders">Orders</a>
          </div>

        </div>
      </section>

      {/* Featured */}
      <section className="support-featured">
        <div className="support-container">

          <div className="support-section-heading">
            <span className="support-eyebrow">
              FEATURED
            </span>

            <h2>
              Popular help topics
            </h2>

            <p>
              Quick answers to some of the most common questions.
            </p>
          </div>

          <div className="support-feature-grid">

            <article className="support-feature-card">
              <span className="support-card-icon">↗</span>

              <h3>Current Takeovers & Delisting</h3>

              <p>
                Learn about current market takeovers,
                delisting updates and important announcements.
              </p>

              <a href="#featured">
                Read article →
              </a>
            </article>

            <article className="support-feature-card">
              <span className="support-card-icon">◷</span>

              <h3>Latest Intraday Leverages</h3>

              <p>
                Understand MIS, CO and other intraday
                trading options available on the platform.
              </p>

              <a href="#featured">
                Read article →
              </a>
            </article>

            <article className="support-feature-card">
              <span className="support-card-icon">?</span>

              <h3>Getting Started</h3>

              <p>
                New to TradeLogix? Find everything you need
                to get started with your trading account.
              </p>

              <a href="#getting-started">
                Learn more →
              </a>
            </article>

          </div>

        </div>
      </section>

      {/* Topics */}
      <section className="support-topics" id="account">
        <div className="support-container">

          <div className="support-topics-header">
            <span className="support-eyebrow">
              HELP CENTER
            </span>

            <h2>
              Browse help topics
            </h2>

            <p>
              Choose a topic to find answers and useful information.
            </p>
          </div>

          <div className="support-topic-grid">

            <div className="support-topic-card">
              <div className="support-topic-icon">
                ◉
              </div>

              <div>
                <h3>Account Opening</h3>

                <p>
                  Everything about opening and managing your
                  TradeLogix account.
                </p>

                <div className="support-topic-links">
                  {topics.map((topic, index) => (
                    <a href={`#topic-${index}`} key={topic}>
                      {topic}
                      <span>→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="support-topic-card">
              <div className="support-topic-icon">
                ₹
              </div>

              <div>
                <h3>Funds & Payments</h3>

                <p>
                  Learn about deposits, withdrawals, margins
                  and fund transfers.
                </p>

                <div className="support-topic-links">
                  <a href="#funds">
                    Add funds
                    <span>→</span>
                  </a>

                  <a href="#funds">
                    Withdraw funds
                    <span>→</span>
                  </a>

                  <a href="#funds">
                    Fund transfer
                    <span>→</span>
                  </a>

                  <a href="#funds">
                    Available margin
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="support-topic-card">
              <div className="support-topic-icon">
                ↗
              </div>

              <div>
                <h3>Trading & Orders</h3>

                <p>
                  Get help with placing orders, positions,
                  holdings and trading.
                </p>

                <div className="support-topic-links">
                  <a href="#orders">
                    Placing an order
                    <span>→</span>
                  </a>

                  <a href="#orders">
                    Order types
                    <span>→</span>
                  </a>

                  <a href="#orders">
                    Positions
                    <span>→</span>
                  </a>

                  <a href="#orders">
                    Holdings
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="support-topic-card">
              <div className="support-topic-icon">
                ⚙
              </div>

              <div>
                <h3>Platform & Tools</h3>

                <p>
                  Guides for using TradeLogix tools,
                  charts and trading features.
                </p>

                <div className="support-topic-links">
                  <a href="#platform">
                    Trading dashboard
                    <span>→</span>
                  </a>

                  <a href="#platform">
                    Charts
                    <span>→</span>
                  </a>

                  <a href="#platform">
                    Watchlist
                    <span>→</span>
                  </a>

                  <a href="#platform">
                    User manual
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Ticket CTA */}
      <section className="support-ticket">
        <div className="support-ticket-box">

          <div>
            <span className="support-eyebrow">
              NEED MORE HELP?
            </span>

            <h2>
              Still can't find an answer?
            </h2>

            <p>
              Create a support ticket and our team will
              help you resolve your issue.
            </p>
          </div>

          <a href="#ticket" className="support-ticket-button">
            Create a ticket →
          </a>

        </div>
      </section>

    </main>
  );
};

export default SupportPage;