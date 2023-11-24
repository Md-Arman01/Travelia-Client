import { Outlet } from "react-router-dom";
import Navber from "../Component/Navber";


const Layout = () => {
    return (
        <div>
            <header>
                <Navber></Navber>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                
            </footer>
        </div>
    );
};

export default Layout;