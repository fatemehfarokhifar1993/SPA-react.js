import { NavLink } from "react-router-dom";
const SideBar = (props) => {
  return (
    <aside>
      <ul className="sideBar">
        <li>
          <NavLink
            to="/profile/dashboard"
            className={(navDta) => (navDta.isActive ? "activeLink" : "")}
          >
            dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/downloads"
            className={(navDta) => (navDta.isActive ? "activeLink" : "")}
          >
            downloads
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
