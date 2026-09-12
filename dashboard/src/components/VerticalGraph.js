import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


/* =========================================================
   TRADELOGIX — VERTICAL BAR CHART OPTIONS
   ========================================================= */

export const options = {

  responsive: true,

  maintainAspectRatio: false,

  interaction: {
    intersect: false,
    mode: "index",
  },

  layout: {
    padding: {
      top: 8,
      right: 8,
      bottom: 8,
      left: 8,
    },
  },

  plugins: {

    legend: {
      display: false,
    },

    title: {
      display: false,
    },

    tooltip: {

      enabled: true,

      backgroundColor: "#172033",

      titleColor: "#ffffff",
      bodyColor: "#dce4ef",

      titleFont: {
        size: 11,
        weight: "600",
      },

      bodyFont: {
        size: 10,
      },

      padding: 10,

      cornerRadius: 8,

      displayColors: false,

      callbacks: {

        label: function (context) {

          const value =
            Number(context.raw) || 0;

          return `₹${value.toLocaleString(
            "en-IN",
            {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }
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

        color: "#8995a6",

        font: {
          size: 9,
          weight: "500",
        },

        maxRotation: 0,

        autoSkip: true,

        maxTicksLimit: 8,

      },

    },


    y: {

      beginAtZero: true,

      grid: {

        color: "rgba(120, 135, 155, 0.10)",

        drawTicks: false,

      },

      border: {
        display: false,
      },

      ticks: {

        color: "#8995a6",

        font: {
          size: 9,
        },

        padding: 8,

        callback: function (value) {

          if (value >= 100000) {
            return `₹${(
              value / 100000
            ).toFixed(1)}L`;
          }

          if (value >= 1000) {
            return `₹${(
              value / 1000
            ).toFixed(1)}K`;
          }

          return `₹${value}`;

        },

      },

    },

  },

  animation: {

    duration: 700,

    easing: "easeOutQuart",

  },

};


export function VerticalGraph({ data }) {

  const chartData = {

    ...data,

    datasets: data?.datasets?.map(
      (dataset) => ({

        ...dataset,

        backgroundColor:
          dataset.backgroundColor ||
          "#2878e8",

        borderColor:
          dataset.borderColor ||
          "#2878e8",

        borderWidth: 0,

        borderRadius: 5,

        borderSkipped: false,

        barPercentage: 0.62,

        categoryPercentage: 0.72,

        hoverBackgroundColor:
          "#1767d6",

      })
    ),

  };


  return (

    <div
      className="tradelogix-bar-chart"
      style={{
        position: "relative",
        width: "100%",
        height: "300px",
      }}
    >

      <Bar
        options={options}
        data={chartData}
      />

    </div>

  );

}