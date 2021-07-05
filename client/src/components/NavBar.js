import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = ({ loggedIn, setLoggedIn, setUser }) => {

  function handleLogoutClick() {
    console.log("Logging Out")
    fetch("/logout", { method: "DELETE" }).then((r) => {
      console.log(r)
      if (r.ok) {
        setUser(null);
        setLoggedIn(false);
      }
    });
  }

  return (
    <div className="navbar">
      <NavLink className="nav-item" activeClassName="active-item" id="main-nav" to="/"exact>MOMENTUM</NavLink>
      <NavLink className="nav-item" activeClassName="active-item" to="/new">LOG A WORKOUT</NavLink>
      <NavLink className="nav-item" activeClassName="active-item" to="/profile">PROFILE</NavLink>
      <button className="logout" onClick={handleLogoutClick}><Link to="/">Logout</Link></button>
    </div>

      
  );
}

export default NavBar;