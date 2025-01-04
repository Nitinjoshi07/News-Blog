import { MdOutlineNewspaper } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill } from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>X</span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/news-analytics">
            <MdOutlineNewspaper className="icon" /> News Analytics
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/payout">
            <BsFillGrid3X3GapFill className="icon" /> Payout
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/export">
            <BsPeopleFill className="icon" /> Export
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/report">
            <BsMenuButtonWideFill className="icon" /> Reports
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
