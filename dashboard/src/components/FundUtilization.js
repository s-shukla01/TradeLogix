import React from "react";

import "./Charts.css";


const FundUtilization = ({
  available = 4043.10,
  used = 3757.30,
}) => {

  const total =
    Number(available) + Number(used);


  const usedPercentage =
    total > 0
      ? (Number(used) / total) * 100
      : 0;


  const availablePercentage =
    total > 0
      ? (Number(available) / total) * 100
      : 0;


  const formatCurrency = (value) => {

    return `₹${Number(value).toLocaleString(
      "en-IN",
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    )}`;

  };


  return (
    <div className="fund-utilization-card">

      {/* Header */}

      <div className="chart-card-header">

        <div>

          <span className="chart-eyebrow">
            CAPITAL
          </span>

          <h3>
            Fund Utilization
          </h3>

        </div>

      </div>


      {/* Main */}

      <div className="fund-utilization-content">

        {/* Circle */}

        <div
          className="fund-utilization-ring"
          style={{
            background: `conic-gradient(
              #2878e8 0deg
              ${usedPercentage * 3.6}deg,
              #e8edf3 ${usedPercentage * 3.6}deg
              360deg
            )`,
          }}
        >

          <div className="fund-utilization-inner">

            <strong>
              {usedPercentage.toFixed(0)}%
            </strong>

            <span>
              Used
            </span>

          </div>

        </div>


        {/* Legend */}

        <div className="fund-utilization-details">

          <div className="fund-detail-item">

            <span className="fund-detail-dot used" />

            <div>

              <span>
                Used Margin
              </span>

              <strong>
                {formatCurrency(used)}
              </strong>

            </div>

          </div>


          <div className="fund-detail-item">

            <span className="fund-detail-dot available" />

            <div>

              <span>
                Available
              </span>

              <strong>
                {formatCurrency(available)}
              </strong>

            </div>

          </div>


          <div className="fund-total">

            <span>
              Total Capital
            </span>

            <strong>
              {formatCurrency(total)}
            </strong>

          </div>

        </div>

      </div>


      {/* Progress */}

      <div className="fund-progress">

        <div className="fund-progress-label">

          <span>
            Capital utilization
          </span>

          <strong>
            {usedPercentage.toFixed(1)}%
          </strong>

        </div>


        <div className="fund-progress-track">

          <div
            className="fund-progress-fill"
            style={{
              width: `${usedPercentage}%`,
            }}
          />

        </div>

      </div>


      {/* Footer */}

      <div className="fund-utilization-note">

        <span>
          ●
        </span>

        {availablePercentage.toFixed(1)}% of
        your capital is currently available.

      </div>

    </div>
  );
};


export default FundUtilization;