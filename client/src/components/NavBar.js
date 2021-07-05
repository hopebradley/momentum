import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

//   function handleLogoutClick() {
//     fetch("/logout", { method: "DELETE" }).then((r) => {
//       if (r.ok) {
//         setUser(null);
//       }
//     });
//   }

  return (
    <div className="navbar">
    <NavLink className="nav-item" activeClassName="active-item" id="main-nav" to="/"exact>HOME</NavLink>
    <NavLink className="nav-item" activeClassName="active-item" to="/new">LOG A WORKOUT</NavLink>
    <NavLink className="nav-item" activeClassName="active-item" to="/me">PROFILE</NavLink>
    {/* <NavLink className="nav-item small-nav" activeClassName="active-item" to="/add-animal">ADD ANIMAL</NavLink>
    <NavLink className="nav-item small-nav" activeClassName="active-item" to="/add-habitat">ADD HABITAT</NavLink> */}
  </div>

      
  );
}

export default NavBar;