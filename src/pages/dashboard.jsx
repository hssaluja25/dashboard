import React from "react";
import Header from "../molecules/Header";
import Kpis from "../molecules/Kpis";
import Projections from "../molecules/Projections";
import RevenueChart from "../molecules/RevenueChart";
import RevenueByLocation from "../molecules/RevenueByLocation";
import TopSellingProducts from "../molecules/TopSellingProducts";
import DonutChart from "../molecules/DonutChart";

const Dashboard = ({ setRightSidebarOpen, setSidebarOpen }) => {
  return (
    <main className="dashboard-main">
      <Header
        setSidebarOpen={setSidebarOpen}
        setRightSidebarOpen={setRightSidebarOpen}
      />

      <section className="dashboard-content">
        <p>eCommerce</p>
        <div className="dashboard-split">
          <div className="split-col">
            <Kpis />
          </div>
          <div className="split-col">
            <Projections />
          </div>
        </div>
        <div className="dashboard-row charts-row">
          <div className="row-col">
            <RevenueChart />
          </div>
          <div className="row-col">
            <RevenueByLocation />
          </div>
        </div>
        <div className="dashboard-row charts-row">
          <div className="row-col">
            <TopSellingProducts />
          </div>
          <div className="row-col">
            <DonutChart />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
