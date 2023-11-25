import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Container from "../../../../../Component/Container";
import TourAbout from "./TourAbout";
import TourPlan from "./TourPlan";
import TourGuides from "../../TourGuides/TourGuides";
import BookingForm from "./BookingForm";

const PackageDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  console.log(id);
  const { data: packageDetails } = useQuery({
    queryKey: ["packageDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/packages/${id}`);
      return res.data;
    },
  });

  return (
    <div>
      {packageDetails?.map((item) => (
        <div key={item._id}>
          <Container>
            {/* Tour About Section */}
            <div className="my-10">
            <TourAbout item={item}></TourAbout>
            </div>
            {/* Tour plan */}
            <div className="my-10">
            <TourPlan item={item}></TourPlan>
            </div>
            {/* Tour Guides */}
            <div  className="my-10">
            <h1 className="border-b-4 border-orange-400 w-fit my-5 text-5xl font-Rancho font-semibold ">
              Tour Guides :
            </h1>
            <TourGuides></TourGuides>
            </div>
            {/* Booking Package Form */}
            <h1 className="border-b-4 border-orange-400 w-fit my-5 text-5xl font-Rancho font-semibold ">
              Booking Package :
            </h1>
            <BookingForm item={item}></BookingForm>
          </Container>
        </div>
      ))}
    </div>
  );
};

export default PackageDetails;
