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

  monthly: [
    {
      month: "Jan",
      revenue: 12000000,
      previousRevenue: 10000000,
      projection: 15000000,
      customers: 600,
      orders: 200,
    },
    {
      month: "Feb",
      revenue: 18000000,
      previousRevenue: 17000000,
      projection: 20000000,
      customers: 730,
      orders: 250,
    },
    {
      month: "Mar",
      revenue: 16000000,
      previousRevenue: 14000000,
      projection: 17000000,
      customers: 680,
      orders: 230,
    },
    {
      month: "Apr",
      revenue: 22000000,
      previousRevenue: 10000000,
      projection: 25000000,
      customers: 750,
      orders: 260,
    },
    {
      month: "May",
      revenue: 14000000,
      previousRevenue: 20000000,
      projection: 16000000,
      customers: 700,
      orders: 230,
    },
    {
      month: "Jun",
      revenue: 21000000,
      previousRevenue: 19000000,
      projection: 23000000,
      customers: 721,
      orders: 246,
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
    { name: "New York", revenue: 72000, lat: 40.7128, lon: -74.006 },
    { name: "San Francisco", revenue: 39000, lat: 37.7749, lon: -122.4194 },
    { name: "Sydney", revenue: 25000, lat: -33.8688, lon: 151.2093 },
    { name: "Singapore", revenue: 61000, lat: 1.3521, lon: 103.8198 },
  ],

  salesChannels: [
    { channel: "Direct", amount: 300.56 },
    { channel: "Affiliate", amount: 135.18 },
    { channel: "Sponsored", amount: 154.02 },
    { channel: "E-mail", amount: 48.96 },
  ],
};
