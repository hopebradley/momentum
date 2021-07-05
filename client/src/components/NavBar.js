import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ loggedIn }) => {

  function handleLogoutClick() {
    console.log("Logging Out")
    // fetch("/logout", { method: "DELETE" }).then((r) => {
    //   if (r.ok) {
    //     setUser(null);
    //   }
    // });
  }

  function logInOrOut() {
    if (loggedIn) {
      return (
        <NavLink to="/login">Login</NavLink>
      )
    } else {
        return (
          <button onClick={handleLogoutClick}>Logout</button>
        )
      }

  }

  return (
    <div className="navbar">
      <NavLink className="nav-item" activeClassName="active-item" id="main-nav" to="/"exact>HOME</NavLink>
      <NavLink className="nav-item" activeClassName="active-item" to="/new">LOG A WORKOUT</NavLink>
      <NavLink className="nav-item" activeClassName="active-item" to="/profile">PROFILE</NavLink>
      {logInOrOut()}
    </div>

      
  );
}

export default NavBar;