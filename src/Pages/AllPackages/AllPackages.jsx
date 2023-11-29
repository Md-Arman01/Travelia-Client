import { Helmet } from "react-helmet-async";
import Container from "../../Component/Container";
import useAllPackages from "../../Hooks/useAllPackages";
import PackagesCard from "../Home/TravelGuide/OurPackages/PackagesCard";

const AllPackages = () => {
    const [packages] = useAllPackages()
    console.log(packages)


  return (
    <div  className="my-10">
      <Helmet>
        <title>Travelia | AllPackage</title>
      </Helmet>
      <Container>
        <div>
          <h1 className="text-center my-10 text-5xl font-semibold font-Rancho border-y-4 mx-auto border-dashed w-fit py-3">
            All Packages
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                packages?.map(packageInfo => <PackagesCard key={packageInfo?._id} packageInfo={packageInfo}></PackagesCard>)
            }
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllPackages;
