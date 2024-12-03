import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="bg-slate-300">
      <nav className="flex gap-5 justify-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/Users">Users</NavLink>
      </nav>
    </div>
  );
};

export default Header;
