import { Helmet } from "react-helmet-async";
import Container from "../Component/Container";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Travelia | About Us</title>
      </Helmet>
      <div>
        {/* banner */}
        <div
          className="hero md:h-[500px] bg-fixed"
          style={{
            backgroundImage: "url(https://i.ibb.co/TBQGHRd/Screenshot-198.png)",
          }}>
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md mb-10">
              <h1 className="font-extrabold text-6xl">About Us</h1>
              <p className="md:w-48 border-4 border-orange-600 mt-1"></p>
            </div>
          </div>
        </div>
        {/* previous year */}
        <Container>
          <div className="my-20">
            <h1 className="text-center text-5xl font-semibold font-Rancho border-y-4 mx-auto border-dashed w-fit py-3">
              Previous Years Development
            </h1>
            <p className="md:w-[550px] py-5 mx-auto text-center text-base text-gray-600 font-sans font-medium">
              Maecenas at quam egestas, vestibulum odio id, consequat ex. Duis
              facilisis conv allis nisl nec tempor. Donec consectetur dapibus
              ultricies. Fusce luctus lobo.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-7xl font-sans font-black bg-gradient-to-t from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">
                40K
              </h1>
              <p className="text-lg w-24 font-sans font-medium text-black pt-2">
                Happy Clients
              </p>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-7xl font-sans font-black bg-gradient-to-t from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">
                4.50
              </h1>
              <p className="text-lg w-24 font-sans font-medium text-black pt-2">
                Customer Ratings
              </p>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-7xl font-sans font-black bg-gradient-to-t from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">
                18K
              </h1>
              <p className="text-lg w-24 font-sans font-medium text-black pt-2">
                Business Category
              </p>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-7xl font-sans font-black bg-gradient-to-t from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">
                20K
              </h1>
              <p className="text-lg w-24 font-sans font-medium text-black pt-2">
                Countries
              </p>
            </div>
          </div>
        </Container>
        {/* our Team */}
        <Container>
          <div className="my-20">
            <h1 className="text-center text-5xl font-semibold font-Rancho border-y-4 mx-auto border-dashed w-fit py-3">
              Get to know our team
            </h1>
            <p className="md:w-[550px] py-5 mx-auto text-center text-base text-gray-600 font-sans font-medium">
              Caecenas at quam egestas, vestibulum odio id, coonv allis nisl nec
              tempor. Donec consectetur dape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1 */}
            <div className="relative grid h-[32rem] w-full  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/0C0FTgY/Screenshot-202.png')] object-cover bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
              </div>
              <div className="relative p-6 px-6 py-14 md:px-12">
                <h2 className="mb-1 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                  Jhonson
                </h2>
                <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                  CEO
                </h5>
              </div>
            </div>
            {/* 2 */}
            <div className="relative grid h-[32rem] w-full  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/68QpPm2/Screenshot-204.png')] object-cover bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
              </div>
              <div className="relative p-6 px-6 py-14 md:px-12">
                <h2 className="mb-1 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                  Mila Rodriguez
                </h2>
                <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                  Manager
                </h5>
              </div>
            </div>
            {/* 3 */}
            <div className="relative grid h-[32rem] w-full  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/JcThbKd/Screenshot-206.png')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
              </div>
              <div className="relative p-6 px-6 py-14 md:px-12">
                <h2 className="mb-1 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                  Richard
                </h2>
                <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                  Director
                </h5>
              </div>
            </div>
            {/* 4 */}
            <div className="relative grid h-[32rem] w-full  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/WFFcpQv/Screenshot-208.png')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
              </div>
              <div className="relative p-6 px-6 py-14 md:px-12">
                <h2 className="mb-1 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                  Christina
                </h2>
                <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                  Customer Support
                </h5>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
