import React from "react";
import Header from "../molecules/Header";
import OrderTable from "../molecules/OrderTable";

const Orders = ({ setSidebarOpen, setRightSidebarOpen }) => {
  return (
    <main className="dashboard-main">
      <Header
        setSidebarOpen={setSidebarOpen}
        setRightSidebarOpen={setRightSidebarOpen}
      />

      <section className="dashboard-content">
        <OrderTable />
      </section>
    </main>
  );
};

export default Orders;
