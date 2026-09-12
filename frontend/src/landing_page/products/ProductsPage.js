// import React from "react";

// import Hero from "./Hero";
// import LeftSection from "./LeftSection";
// import RightSection from "./RightSection";
// import Universe from "./Universe";

// import Navbar from "../Navbar";
// import Footer from "../Footer";

// function PricingPage() {
//   return (
//     <>
//       <Hero />
//       <LeftSection
//         imageURL="media/images/kite.png"
//         productName="Kite"
//         productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
//         tryDemo=""
//         learnMore=""
//         googlePlay=""
//         appStore=""
//       />
//       <RightSection
//         imageURL="media/images/console.png"
//         productName="Console"
//         productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
//         learnMore=""
//       />
//       <LeftSection
//         imageURL="media/images/coin.png"
//         productName="Coin"
//         productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
//         tryDemo=""
//         learnMore=""
//         googlePlay=""
//         appStore=""
//       />
//       <RightSection
//         imageURL="media/images/kiteconnect.png"
//         productName="Kite Connect API"
//         productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
//         learnMore=""
//       />
//       <LeftSection
//         imageURL="media/images/varsity.png"
//         productName="Varsity mobile"
//         productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
//         tryDemo=""
//         learnMore=""
//         googlePlay=""
//         appStore=""
//       />
//       <p className="text-center mt-5 mb-5">
//         Want to know more about our technology stack? Check out the Zerodha.tech
//         blog.
//       </p>
//       <Universe />
//     </>
//   );
// }

// export default PricingPage;


import React from "react";
import { Link } from "react-router-dom";
import "./products.css";

const products = [
  {
    name: "Kite",
    tag: "TRADING PLATFORM",
    description:
      "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant interface, and powerful order tools.",
    image: "/media/kite.png",
    actions: ["Try Kite", "Learn More"],
  },
  {
    name: "Console",
    tag: "PORTFOLIO & REPORTING",
    description:
      "The central dashboard for your TradeLogix account. Gain insights into your trades, investments, holdings and portfolio performance.",
    image: "/media/console.png",
    actions: ["Explore Console", "Learn More"],
  },
  {
    name: "Coin",
    tag: "MUTUAL FUNDS",
    description:
      "Invest in direct mutual funds with a clean and transparent experience. Track your investments and build your long-term portfolio.",
    image: "/media/coin.png",
    actions: ["Explore Coin", "Learn More"],
  },
  {
    name: "TradeLogix Connect API",
    tag: "DEVELOPER PLATFORM",
    description:
      "Build powerful trading platforms and experiences using simple APIs. Create applications and connect them with the TradeLogix ecosystem.",
    image: "/media/kite-connect.png",
    actions: ["View API", "Learn More"],
  },
  {
    name: "Varsity",
    tag: "LEARNING",
    description:
      "An easy-to-understand collection of stock market lessons with practical explanations, illustrations and bite-sized learning modules.",
    image: "/media/varsity.png",
    actions: ["Start Learning", "Learn More"],
  },
  {
    name: "TradingView",
    tag: "MARKET ANALYTICS",
    description:
      "Explore market data, charts and insights through an intuitive interface designed to help investors make informed decisions.",
    image: "/media/tradingview.png",
    actions: ["Explore", "Learn More"],
  },
];

const ProductsPage = () => {
  return (
    <main className="products-page">

      {/* Hero */}
      <section className="products-hero">
        <div className="products-container">

          <span className="products-eyebrow">
            TRADELOGIX PLATFORM
          </span>

          <h1>
            Technology built for
            <span> modern investors.</span>
          </h1>

          <p>
            Powerful trading, investing and learning tools designed
            to make your financial journey simpler.
          </p>

        </div>
      </section>

      {/* Products */}
      <section className="products-section">
        <div className="products-container">

          <div className="products-section-heading">
            <span className="products-eyebrow">
              OUR PRODUCTS
            </span>

            <h2>
              Everything you need
              <br />
              <span>in one ecosystem.</span>
            </h2>

            <p>
              From active trading to long-term investing, TradeLogix
              gives you the tools to understand and manage your money.
            </p>
          </div>

          <div className="products-grid">

            {products.map((product, index) => (
              <article
                className={`product-card ${
                  index === 0 ? "product-card-featured" : ""
                }`}
                key={product.name}
              >

                <div className="product-card-content">

                  <div className="product-card-top">
                    <span className="product-number">
                      0{index + 1}
                    </span>

                    <span className="product-tag">
                      {product.tag}
                    </span>
                  </div>

                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <div className="product-actions">

                    <Link
                      to="/signup"
                      className="product-primary-link"
                    >
                      {product.actions[0]}
                      <span>→</span>
                    </Link>

                    <Link
                      to="/signup"
                      className="product-secondary-link"
                    >
                      {product.actions[1]}
                    </Link>

                  </div>

                </div>

                <div className="product-visual">

                  <div className="product-browser">

                    <div className="browser-top">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="browser-content">

                      <div className="browser-sidebar">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                      </div>

                      <div className="browser-main">

                        <div className="browser-heading"></div>

                        <div className="browser-stats">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>

                        <div className="browser-chart">
                          <div></div>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* Universe */}
      <section className="products-universe">

        <div className="products-container">

          <div className="universe-content">

            <span className="products-eyebrow">
              THE TRADELOGIX UNIVERSE
            </span>

            <h2>
              One ecosystem.
              <br />
              <span>Many possibilities.</span>
            </h2>

            <p>
              Extend your trading and investment experience with
              powerful tools, educational resources and modern
              financial technology.
            </p>

            <Link to="/signup" className="universe-button">
              Join TradeLogix →
            </Link>

          </div>

          <div className="universe-orbit">

            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="orbit-center">
              TL
            </div>

            <div className="orbit-node node-one">
              Trading
            </div>

            <div className="orbit-node node-two">
              Investing
            </div>

            <div className="orbit-node node-three">
              Learning
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="products-cta">

        <div className="products-container">

          <span className="products-eyebrow">
            GET STARTED
          </span>

          <h2>
            Ready to invest
            <span> smarter?</span>
          </h2>

          <p>
            Create your TradeLogix account and experience
            a simpler way to access the markets.
          </p>

          <Link to="/signup" className="products-cta-button">
            Open an account →
          </Link>

        </div>

      </section>

    </main>
  );
};

export default ProductsPage;