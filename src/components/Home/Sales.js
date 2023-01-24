import React from 'react';

const Sales = () => {
  return (
    <>
      <h3 className="text-center text-5xl font-bold">Sales</h3>
      <section className="flex justify-center p-5">
        <div className="stats shadow">
          <div className="stat place-items-center">
            <div className="stat-title">Products Delivered</div>
            <div className="stat-value">1.3K</div>
            <div className="stat-desc">From January 1st 2022 till now</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Total Sales</div>
            <div className="stat-value text-secondary">4.2 million</div>
            <div className="stat-desc text-secondary">
              ↗︎ Conversion rate (6%)
            </div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Gross Profit</div>
            <div className="stat-value">2.3 million</div>
            <div className="stat-desc"> ↗︎ Operational Cost (14%)</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sales;
