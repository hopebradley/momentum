import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

//   function handleLogoutClick() {
//     fetch("/logout", { method: "DELETE" }).then((r) => {
//       if (r.ok) {
//         setUser(null);
//       }
//     });
//   }

  return (
      <div>
        {/* <Link to="/">Momentum</Link> */}
        <button as={Link} to="/new">New Recipe</button>
        <button>Logout</button>
      </div>

      
  );
}

export default NavBar;