import { Outlet, Link } from "react-router";
import "./Layout.css";

const Layout = () => {
   return (
      <div className="layout">
         <nav>
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/creators">View Creators</Link>
               </li>
               <li>
                  <Link to="/add">Add Creator</Link>
               </li>
            </ul>
         </nav>
         <main>
            <Outlet />
         </main>
      </div>
   )
}

export default Layout