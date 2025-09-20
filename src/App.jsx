import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard";

function App() {
  const theme = useSelector((state) => state.app.theme);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
  }, [theme]);

  return <Dashboard />;
}

export default App;
