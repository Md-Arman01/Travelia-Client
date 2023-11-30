import { Link } from "react-router-dom";
import useAllPackages from "../../../../Hooks/useAllPackages";
import PackagesCard from "./PackagesCard";

const Packages = () => {
  const [packages] = useAllPackages();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {packages?.slice(0, 4)?.map((packageInfo) => (
          <PackagesCard
            key={packageInfo._id}
            packageInfo={packageInfo}></PackagesCard>
        ))}
      </div>
      <Link to="/allPackages">
        <button
          className={`mx-auto block select-none rounded-lg mt-10 bg-gradient-to-tr from-[#FFA828] to-[#FF4804] bg-clip-border hover:rounded-3xl py-3.5 px-7 text-center align-middle font-sans text-base font-semibold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
          type="button"
          data-ripple-light="true">
          All Package
        </button>
      </Link>
    </div>
  );
};

export default Packages;
