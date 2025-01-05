import { MdOutlineNewspaper } from "react-icons/md";
import { FaCalculator } from "react-icons/fa6";
import { TbMessageReport } from "react-icons/tb";
import { SiGooglenews } from "react-icons/si";
import { FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";
import {  BsGrid1X2Fill } from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <SiGooglenews className="icon_header" /> NEWS
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>X</span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/dashboard">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/dashboard/news-analytics">
            <MdOutlineNewspaper className="icon" /> News
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/dashboard/payout">
            <FaCalculator className="icon" /> Payout
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/dashboard/export">
            <FaFilter className="icon" /> Filter
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/dashboard/report">
            <TbMessageReport className="icon" /> Feedback
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
