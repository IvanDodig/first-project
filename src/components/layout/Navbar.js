import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
         <h3 className="navbar-text">Users list</h3>
         <div className="links navbar-text float-right">
            <Link to="/">Users</Link>
            <Link to="/photos/1">Photos</Link>
            <Link to="/posts">Posts</Link>
         </div>
      </nav>
   );
};

export default Navbar;
