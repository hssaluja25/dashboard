export const mockData = {
  kpis: {
    customers: 3781,
    customersChangePct: 11.01,
    orders: 1219,
    ordersChangePct: -0.03,
    revenueTotal: 695,
    revenueChangePct: 15.03,
    growthPct: 30.1,
    growthChangePct: 6.08,
  },

  revenues: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Actuals",
        data: [8, 17, 15, 10, 16, 23],
        borderColor: "#A9CCE3",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Forecast (Solid)",
        data: [12, 8, 9, 15, null, null],
        borderColor: "#17202A",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Forecast (Dashed)",
        data: [null, null, null, 15, 19, 20],
        borderColor: "#17202A",
        borderDash: [5, 5],
        tension: 0.4,
        fill: false,
      },
    ],
  },

  monthly: [
    {
      month: "Jan",
      revenue: 12000000,
      projection: 15000000,
    },
    {
      month: "Feb",
      revenue: 18000000,
      projection: 20000000,
    },
    {
      month: "Mar",
      revenue: 16000000,
      projection: 17000000,
    },
    {
      month: "Apr",
      revenue: 22000000,
      projection: 25000000,
    },
    {
      month: "May",
      revenue: 14000000,
      projection: 16000000,
    },
    {
      month: "Jun",
      revenue: 21000000,
      projection: 23000000,
    },
  ],

  topProducts: [
    {
      name: "ASOS Ridley High Waist",
      price: 79.49,
      quantity: 82,
      amount: 6518.18,
    },
    {
      name: "Marco Lightweight Shirt",
      price: 128.5,
      quantity: 37,
      amount: 4754.5,
    },
    { name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
    { name: "Lightweight Jacket", price: 20.0, quantity: 184, amount: 3680.0 },
    { name: "Marco Shoes", price: 79.49, quantity: 24, amount: 1907.76 },
  ],

  revenueByLocation: [
    { name: "New York", revenue: 72000, left: "15%", top: "36%" },
    { name: "San Francisco", revenue: 39000, left: "28%", top: "42%" },
    { name: "Sydney", revenue: 25000, left: "84%", top: "77%" },
    { name: "Singapore", revenue: 61000, left: "73%", top: "58%" },
  ],

  salesChannels: [
    { channel: "Direct", amount: 300.56 },
    { channel: "Affiliate", amount: 135.18 },
    { channel: "Sponsored", amount: 154.02 },
    { channel: "E-mail", amount: 48.96 },
  ],
};
