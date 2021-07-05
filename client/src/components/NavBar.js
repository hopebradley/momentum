import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = ({ loggedIn, setLoggedIn, setUser, user }) => {

  function handleLogoutClick() {
    console.log("Logging Out")
    fetch("/logout", { method: "DELETE" }).then((r) => {
      console.log(r)
      if (r.ok) {
        setLoggedIn(false);
        setUser(null);
      }
    });
  }

  return (
    <div className="navbar">
      <NavLink className="nav-item" activeClassName="active-item" id="main-nav" to="/"exact>MOMENTUM</NavLink>
      <NavLink className="nav-item" activeClassName="active-item" to="/community">community</NavLink>
      <NavLink className="nav-item" activeClassName="active-item" to="/new">log a workout</NavLink>
      <NavLink className="nav-item" activeClassName="active-item" to="/profile">profile</NavLink>
      <div className="logout">
        {/* <p>not {user.name.toLowerCase()}?</p> */}
        <Link to="/"><button onClick={handleLogoutClick}>logout</button></Link>
      </div>
      
    </div>

      
  );
}

export default NavBar;