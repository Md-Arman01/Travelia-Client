import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Container from "../../../../../Component/Container";
import TourAbout from "./TourAbout";
import TourPlan from "./TourPlan";
import TourGuides from "../../TourGuides/TourGuides";
import BookingForm from "./BookingForm";
import Gallery from "./Gallery";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Travelia | Package_{id}</title>
      </Helmet>
      {packageDetails?.map((item) => (
        <div key={item._id}>
          <Container>
            {/* gallery */}
            <div className="p-1">
              <Gallery></Gallery>
            </div>

            {/* Tour About Section */}
            <div className="my-10 px-5 lg:px-0">
              <TourAbout item={item}></TourAbout>
            </div>
            {/* Tour plan */}
            <div className="my-10  px-5 lg:px-0">
              <TourPlan item={item}></TourPlan>
            </div>
            {/* Tour Guides */}
            <div className="my-10  px-5 lg:px-0">
              <h1 className="border-b-4 border-orange-400 w-fit my-5 text-5xl font-Rancho font-semibold ">
                Tour Guides :
              </h1>
              <TourGuides></TourGuides>
            </div>
            {/* Booking Package Form */}
            <div  className=" px-5 lg:px-0">
              <h1 className="border-b-4 border-orange-400 w-fit my-5 text-4xl lg:text-5xl font-Rancho font-semibold ">
                Booking Package :
              </h1>
              <BookingForm item={item}></BookingForm>
            </div>
          </Container>
        </div>
      ))}
    </div>
  );
};

export default PackageDetails;
