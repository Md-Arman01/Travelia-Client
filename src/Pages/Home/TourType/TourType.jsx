import { Link } from "react-router-dom";

const TourType = () => {
  return (
    <div className="px-5 lg:px-0 mt-5 md:my-20">
      <div
        className="hero bg-fixed"
        style={{
          backgroundImage: "url(https://i.ibb.co/27rwCNd/Screenshot-186.png)",
        }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content  md:h-[400px]">
          <div className="">
            <p className="font-Lora font-semibold text-lg">
              --- Find a tour by ---
            </p>
            <h1 className="mb-10 text-5xl font-Rancho font-semibold">
              Tour Type
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-5">
              <Link to="/tourType/Hiking">
                <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-full  w-36 h-36 ">
                  <img
                    src="https://i.ibb.co/MsmDq99/icons8-school-bag-48.png"
                    alt=""
                  />
                  <h1 className="w-24 uppercase font-semibold mt-2">Hiking</h1>
                </div>
              </Link>
              <Link to="/tourType/Walking">
                <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-full  w-36 h-36 ">
                  <img
                    src="https://i.ibb.co/ZzMLjcc/icons8-foot-50.png"
                    alt=""
                  />
                  <h1 className="w-24 uppercase font-semibold mt-2">Walking</h1>
                </div>
              </Link>
              <Link to="/tourType/Air Rides">
                <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-full  w-36 h-36 ">
                  <img
                    src="https://i.ibb.co/LPpLdZ9/icons8-hot-air-balloon-50.png"
                    alt=""
                  />
                  <h1 className="w-24 uppercase font-semibold mt-2">
                    Air Rides
                  </h1>
                </div>
              </Link>
              <Link to="/tourType/Wildlife">
                <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-full  w-36 h-36 ">
                  <img
                    src="https://i.ibb.co/C9J7z5p/icons8-wildlife-animals-50.png"
                    alt=""
                  />
                  <h1 className="w-24 uppercase font-semibold mt-2">
                    Wildlife
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourType;
