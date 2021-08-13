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
     <nav className="navbar is-success is-spaced" role="navigation" aria-label="main navigation">
       <div className="navbar-brand">
            <NavLink className="main-nav" activeClassName="active-item" to="/"exact>MOMENTUM</NavLink>
       </div>
       <div className="navbar-menu">
         <div className="navbar-start">
            <NavLink className="nav-item" activeClassName="active-item" to="/community">community</NavLink>
            <NavLink className="nav-item" activeClassName="active-item" to="/new-workout">log a workout</NavLink>
            <NavLink className="nav-item" activeClassName="active-item" to="/profile">profile</NavLink>
         </div>
         <div className="navbar-end">
           <div className="navbar-item">
             <div className="buttons">
               <div className="logout-question">
                   <p>not {user.name}?</p>
               </div>
               <button className="button is-danger is-light is-outlined" onClick={handleLogoutClick}>
                 logout
               </button>
             </div>
           </div>
         </div>
       </div>
     </nav>
  );
}

export default NavBar;