import { Outlet } from "react-router-dom";
import Navber from "../Component/Navber";
import Footer from "../Pages/Home/Footer/Footer";
import GotoTop from "../Component/GotoTop";
import { Helmet } from "react-helmet-async";

const Layout = () => {
  return (
    <div className="relative">
        <Helmet>
            <title>Travelia</title>
        </Helmet>
      <header>
        <Navber></Navber>
      </header>
      <main className="mt-[103px] min-h-[730px]">
        <Outlet></Outlet>
      </main>
      <div className="flex z-50 fixed right-12 bottom-10">
        <GotoTop></GotoTop>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
