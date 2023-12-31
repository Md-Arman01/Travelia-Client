import { useParams } from "react-router-dom";
import Container from "../../../Component/Container";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import PackagesCard from "../TravelGuide/OurPackages/PackagesCard";
import { Helmet } from "react-helmet-async";

const TourTypeDetails = () => {
  const { type } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: tourType } = useQuery({
    queryKey: ["tourType"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/packages2/${type}`);
      return res?.data;
    },
  });
  console.log(tourType);

  return (
    <div>
      <Helmet>
        <title>Travelia | TourType | Details</title>
      </Helmet>
      <Container>
        <div className="pt-5">
          <h1 className="text-center my-10 text-5xl font-semibold font-Rancho border-y-4 mx-auto border-dashed w-fit py-3">
            Our Packages
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 lg:px-0">
          {tourType?.map((packageInfo) => (
            <PackagesCard
              key={packageInfo?._id}
              packageInfo={packageInfo}></PackagesCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TourTypeDetails;
