import { useState } from "react";
import { Route, Routes } from "react-router-dom"; 
import "./Dashboard.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import NewsAnalytics from "./NewsAnalytics";
import Report from "./Report";
import Payout from "./Payout";
import Export from "./Export";

function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news-analytics" element={<NewsAnalytics />} />
          <Route path="/report" element={<Report />} />
          <Route path="/payout" element={<Payout />} />
          <Route path="/export" element={<Export />} />
        </Routes>
      </main>
    </div>
  );
}

export default Dashboard;
