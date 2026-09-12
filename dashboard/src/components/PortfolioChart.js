import React, { useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";

import "./Charts.css";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
);


const chartPeriods = {
  "1D": {
    labels: ["09:15", "10:00", "11:00", "12:00", "13:00", "14:00", "15:30"],
    values: [118500, 119800, 119200, 121400, 120900, 123100, 124850],
  },

  "1W": {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    values: [118200, 119600, 120850, 122400, 124850],
  },

  "1M": {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    values: [112400, 116800, 121300, 124850],
  },

  "1Y": {
    labels: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"],
    values: [92000, 98500, 104200, 111800, 118600, 124850],
  },
};


const PortfolioChart = ({
  initialPeriod = "1D",
}) => {

  const [period, setPeriod] =
    useState(initialPeriod);


  const currentData =
    chartPeriods[period];


  const firstValue =
    currentData.values[0];

  const lastValue =
    currentData.values[
      currentData.values.length - 1
    ];


  const profit =
    lastValue - firstValue;


  const returnPercentage =
    firstValue !== 0
      ? ((profit / firstValue) * 100)
      : 0;


  const data = {

    labels: currentData.labels,

    datasets: [
      {
        label: "Portfolio Value",

        data: currentData.values,

        fill: true,

        tension: 0.4,

        borderWidth: 2,

        pointRadius: 0,

        pointHoverRadius: 5,

        borderColor: "#2878e8",

        backgroundColor:
          "rgba(40, 120, 232, 0.10)",

        pointBackgroundColor:
          "#2878e8",

        pointBorderColor:
          "#ffffff",

        pointBorderWidth: 2,
      },
    ],
  };


  const options = {

    responsive: true,

    maintainAspectRatio: false,

    interaction: {
      intersect: false,
      mode: "index",
    },

    plugins: {

      legend: {
        display: false,
      },

      tooltip: {

        backgroundColor: "#172033",

        titleColor: "#ffffff",

        bodyColor: "#dce4ef",

        padding: 10,

        cornerRadius: 8,

        displayColors: false,

        callbacks: {

          label: (context) => {

            const value =
              Number(context.raw) || 0;

            return `₹${value.toLocaleString(
              "en-IN"
            )}`;

          },

        },

      },

    },


    scales: {

      x: {

        grid: {
          display: false,
        },

        border: {
          display: false,
        },

        ticks: {

          color: "#8b96a5",

          font: {
            size: 9,
          },

        },

      },


      y: {

        grid: {

          color:
            "rgba(120, 135, 155, 0.10)",

          drawTicks: false,

        },

        border: {
          display: false,
        },

        ticks: {

          color: "#8b96a5",

          padding: 8,

          font: {
            size: 9,
          },

          callback: (value) => {

            if (value >= 100000) {
              return `₹${(
                value / 100000
              ).toFixed(1)}L`;
            }

            return `₹${(
              value / 1000
            ).toFixed(0)}K`;

          },

        },

      },

    },

    animation: {
      duration: 600,
    },

  };


  return (
    <div className="portfolio-chart-card">

      {/* Header */}

      <div className="chart-card-header">

        <div>

          <span className="chart-eyebrow">
            PORTFOLIO
          </span>

          <h3>
            Performance
          </h3>

        </div>


        <div className="chart-periods">

          {Object.keys(chartPeriods).map(
            (item) => (

              <button
                key={item}
                type="button"
                className={
                  period === item
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setPeriod(item)
                }
              >
                {item}
              </button>

            )
          )}

        </div>

      </div>


      {/* Stats */}

      <div className="chart-summary">

        <div>
          <span>
            Current value
          </span>

          <strong>
            ₹{lastValue.toLocaleString("en-IN")}
          </strong>
        </div>


        <div>
          <span>
            Returns
          </span>

          <strong className={
            profit >= 0
              ? "chart-profit"
              : "chart-loss"
          }>
            {profit >= 0 ? "+" : "-"}₹
            {Math.abs(profit).toLocaleString(
              "en-IN"
            )}
          </strong>
        </div>


        <div>
          <span>
            Return %
          </span>

          <strong className={
            returnPercentage >= 0
              ? "chart-profit"
              : "chart-loss"
          }>
            {returnPercentage >= 0
              ? "+"
              : ""}
            {returnPercentage.toFixed(2)}%
          </strong>
        </div>

      </div>


      {/* Chart */}

      <div className="portfolio-chart-wrapper">

        <Line
          data={data}
          options={options}
        />

      </div>

    </div>
  );
};


export default PortfolioChart;