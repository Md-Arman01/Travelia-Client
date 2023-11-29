import { Outlet } from "react-router-dom";
import Navber from "../Component/Navber";
import Footer from "../Pages/Home/Footer/Footer";


const Layout = () => {

    
 

    return (
        <div>
            <header>
                <Navber></Navber>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
            
        </div>
    );
};

export default Layout;