import React from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";


ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);


/* =========================================================
   TRADELOGIX — DOUGHNUT CHART
   ========================================================= */

const options = {

  responsive: true,

  maintainAspectRatio: false,

  cutout: "72%",

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
        size: 10,
        weight: "600",
      },

      bodyFont: {
        size: 10,
      },

      padding: 9,

      cornerRadius: 8,

      displayColors: true,

      boxWidth: 8,
      boxHeight: 8,

      callbacks: {

        label: function (context) {

          const value =
            Number(context.raw) || 0;

          return ` ${value.toLocaleString(
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

  animation: {

    animateRotate: true,

    animateScale: true,

    duration: 700,

  },

};


export function DoughnutChart({ data }) {

  const chartData = {

    ...data,

    datasets: data?.datasets?.map(
      (dataset) => ({

        ...dataset,

        backgroundColor:
          dataset.backgroundColor || [
            "#2878e8",
            "#10a968",
            "#f59e0b",
            "#8b5cf6",
            "#ef4444",
            "#06b6d4",
          ],

        borderColor: "#ffffff",

        borderWidth: 3,

        hoverBorderWidth: 3,

        hoverOffset: 5,

      })
    ),

  };


  return (

    <div
      className="tradelogix-doughnut-chart"
      style={{
        position: "relative",
        width: "100%",
        height: "240px",
      }}
    >

      <Doughnut
        data={chartData}
        options={options}
      />

    </div>

  );

}