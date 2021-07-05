import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = ({ loggedIn, setLoggedIn, setUser, user }) => {

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
      <NavLink className="nav-item" activeClassName="active-item" to="/new">log a workout</NavLink>
      <NavLink className="nav-item" activeClassName="active-item" to="/profile">profile</NavLink>
      <div className="logout">
        <p>not {user.name}?</p>
        <button onClick={handleLogoutClick}><Link to="/">logout</Link></button>
      </div>
      
    </div>

      
  );
}

export default NavBar;