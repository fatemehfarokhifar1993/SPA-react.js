import { NavLink } from "react-router-dom";
//import { useParams } from "react-router-dom";
const items = [
  { name: "Home", to: "/", exact: true },
  { name: "About Us", to: "/about-us" },
  { name: "Profile", to: "/profile" },
  { name: "Blogs", to: "/blogs" },
];
const Navigation = (props) => {
  // const params = useParams();
  return (
    <nav className="responsive">
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={(navDta) => (navDta.isActive ? "activeLink" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
