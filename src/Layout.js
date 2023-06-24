import { Outlet, Link, useLocation } from "react-router-dom";

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

const activeLinkStyle = {
  ...linkStyle,
  color: "yellow",
};

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <nav className="position-fixed bg-dark top-0 z-0">
        <ul
          className="m-3"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            width: "100vw",
            color: "white",
            listStyle: "none"
          }}
        >
          <li>
            <Link to="/" style={location.pathname === "/" ? activeLinkStyle : linkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/nine" style={location.pathname === "/nine" ? activeLinkStyle : linkStyle}>
              Handson 9
            </Link>
          </li>
          <li>
            <Link to="/ten" style={location.pathname === "/ten" ? activeLinkStyle : linkStyle}>
              Handson 10
            </Link>
          </li>
          <li>
            <Link
              to="/eleven"
              style={location.pathname === "/eleven" ? activeLinkStyle : linkStyle}
            >
              Handson 11
            </Link>
          </li>
          <li>
            <Link
              to="/twelve"
              style={location.pathname === "/twelve" ? activeLinkStyle : linkStyle}
            >
              Handson 12
            </Link>
          </li>
          <li>
            <Link
              to="/thirteen"
              style={location.pathname === "/thirteen" ? activeLinkStyle : linkStyle}
            >
              Handson 13
            </Link>
          </li>
          <li>
            <Link
              to="/fourteen"
              style={location.pathname === "/fourteen" ? activeLinkStyle : linkStyle}
            >
              Handson 14
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
