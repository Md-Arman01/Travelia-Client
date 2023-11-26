
import { Outlet } from "react-router-dom";
import Container from "../../Component/Container";
import TouristMenu from "./DashboardMenu/TouristMenu";
import TourGuideMenu from "./DashboardMenu/TourGuideMenu";
import AdminMenu from "./DashboardMenu/AdminMenu";
import useUserInfo from "../../Hooks/useUserInfo";

const Dashboard = () => {
    const [userInfo] = useUserInfo()


  return (
    <div>
      <Container>
        <div className="flex">
          {/* dashboard menu */}
          <div className="w-72 min-h-screen bg-gray-700 flex flex-col items-center gap-3 px-5">
            <h1 className="bg-gradient-to-t from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text text-5xl font-semibold font-Rancho mt-8 mb-3">Travelia</h1>
            <p className="border-b-2 border-white w-full"> </p>
            {
                userInfo?.role === 'Tourist' && <TouristMenu></TouristMenu>
            }
            {
                userInfo?.role === 'Tour Guide' && <TourGuideMenu></TourGuideMenu>
            }
            {
                userInfo?.role === 'Admin' && <AdminMenu></AdminMenu>
            }

          </div>
          {/* dashboard child */}
          <div className="p-10 flex-1">
            <Outlet></Outlet>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
