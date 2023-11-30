/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import Container from "../Component/Container";

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Travelia | Blogs</title>
      </Helmet>
      {/* banner */}
      <div
        className="hero h-[300px] md:h-[500px] bg-fixed"
        style={{
          backgroundImage: "url(https://i.ibb.co/bRD6KJk/Screenshot-221.png)",
        }}>
        <div className="hero-overlay bg-opacity-75"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md mb-10">
            <h1 className="font-extrabold text-4xl lg:text-6xl">Blog's</h1>
            <p className="md:w-48 border-4 border-orange-600 mt-1"></p>
          </div>
        </div>
      </div>
      {/* content */}
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 mt-10 md:mt-20 px-5 lg:px-0">
          {/* left side */}
          <div>
            {/* 1st  */}
            <div>
              <img
                className="rounded-md"
                src="https://i.ibb.co/XLzzCt8/Screenshot-222.png"
                alt=""
              />
              <p className="text-sm font-semibold mt-2">November 29, 2023</p>
              <h1 className="text-3xl md:text-4xl font-semibold mt-5">
                Travelia provides good tour guide for traveling
              </h1>
              <p className="text-base text-gray-500 font-sans font-medium mt-3">
                Vulputate odio ut enim blandit. Ornare lectus sit amet est
                placerat in egestas. Aliquam eleifend mi in nulla posuere
                sollicitudin. Purus semper eget duis at tellus at urna
                condimentum. Vitae ultricies leo integer malesuada nunc vel.
                Quam elementum pulvinar etiam non quam lacus suspendisse.
                Volutpat odio facilisis mauris sit. Id nibh tortor id aliquet
                lectus proin nibh. Cras sed felis eget velit aliquet sagittis.
                Sed vulputate odio ut enim.
              </p>
            </div>
            {/* 2nd */}
            <div>
              <h1 className="text-2xl font-semibold mt-10">
                Tellus pellentesque eu tincidunt torto
              </h1>
              <p className="text-base text-gray-500 font-sans font-medium mt-3">
                Sagittis eu volutpat odio facilisis. Est ante in nibh mauris
                cursus mattis molestie. Montes nascetur ridiculus mus mauris
                vitae ultricies leo integer. Adipiscing elit pellentesque
                habitant morbi tristique senectus et netus et. Dolor purus non
                enim praesent elementum facilisis leo. Ultricies integer quis
                auctor elit sed vulputate mi sit. Morbi tristique senectus et
                netus et malesuada. Turpis egestas sed tempus urna et pharetra
                pharetra. Feugiat vivamus at augue eget arcu dictum varius duis.
                Consequat interdum varius sit amet mattis vulputate enim.
                Volutpat est velit egestas dui. Hac habitasse platea dictumst
                vestibulum. Proin libero nunc consequat interdum varius.
                Elementum sagittis vitae et leo duis. Ornare massa eget egestas
                purus viverra. Elementum nibh tellus molestie nunc non.
              </p>
              <div className="flex items-center gap-5 mt-5">
                <img
                  className="rounded-md h-[350px]  object-cover"
                  src="https://i.ibb.co/GxmWXTL/Screenshot-225.png"
                  alt=""
                />
                <img
                  className="rounded-md h-[350px]  object-cover"
                  src="https://i.ibb.co/qCVGZjg/Screenshot-224.png"
                  alt=""
                />
              </div>
              <p className="text-base text-gray-500 font-sans font-medium mt-3">
                Sit amet consectetur adipiscing elit ut aliquam purus. Natoque
                penatibus et magnis dis parturient montes. Congue nisi vitae
                suscipit tellus. Ut sem viverra aliquet eget sit amet tellus.
                Ipsum dolor sit amet consectetur. Fringilla est ullamcorper eget
                nulla facilisi etiam. Fermentum iaculis eu non diam phasellus
                vestibulum. Porttitor lacus luctus accumsan tortor. Euismod nisi
                porta lorem mollis aliquam ut. Pellentesque diam volutpat
                commodo sed egestas egestas fringilla phasellus.
              </p>
            </div>
            {/* 3rd */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-5 mt-10">
              <div className="h-full space-y-6 flex-1">
                <h1 className="text-2xl font-semibold mt-10">
                  Pellentesque eu tincidunt aliquam
                </h1>
                <li className=" text-base text-gray-500 font-sans font-medium mt-3">
                  Turpis egestas integer eet aliquet nibh praesent tristique
                  elit eget gravida cum.
                </li>
                <li className="text-base text-gray-500 font-sans font-medium mt-3">
                  Libero nunc consequat interdum varius sit amet mattis vul diam
                  uer maecenas amditesds.
                </li>
                <li className="text-base text-gray-500 font-sans font-medium mt-3">
                  Tellus molestie nunc non blandit massa enim nec sapien et
                  ligula ullam corper est velit eges
                </li>
                <li className="text-base text-gray-500 font-sans font-medium mt-3">
                  Imperdiet nulla malesuada pellentesque elit.Lobortis mattis
                  aliquam faucibus purus.Interdum varius mattis ate.
                </li>
                <li className="text-base text-gray-500 font-sans font-medium mt-3">
                  Scelerisque eleifend donec pretium vulputate sapien nec
                  sagittis aliquam. Magna etiam tempor orci eu lobo nibh.
                </li>
              </div>
              <div className="flex-1">
                <img
                  className="rounded-md object-cover h-[450px]"
                  src="https://i.ibb.co/RgmTMg6/Screenshot-226.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="shadow-lg rounded-xl p-5 h-fit">
            {/* 1 */}
            <h1 className="text-3xl font-semibold border-b-2 w-fit border-orange-500 mb-8">
              Instagram
            </h1>
            <div className="grid grid-cols-3 gap-5">
              <img
                className="rounded-lg"
                src="https://i.ibb.co/XXGbkQ2/Screenshot-229.png"
                alt=""
              />
              <img
                className="rounded-lg"
                src="https://i.ibb.co/64P74Sr/Screenshot-230.png"
                alt=""
              />
              <img
                className="rounded-lg"
                src="https://i.ibb.co/tB2T3sY/Screenshot-231.png"
                alt=""
              />
              <img
                className="rounded-lg"
                src="https://i.ibb.co/tzbJqQv/Screenshot-232.png"
                alt=""
              />
              <img
                className="rounded-lg"
                src="https://i.ibb.co/vLfqxTS/Screenshot-233.png"
                alt=""
              />
              <img
                className="rounded-lg"
                src="https://i.ibb.co/xS7j4sG/Screenshot-234.png"
                alt=""
              />
            </div>
            {/* 2 */}
            <h1 className="text-3xl font-semibold border-b-2 w-fit border-orange-500 my-8">
              Discount Offer
            </h1>
            <div className=" lg:w-96 mt-5">
              <img src="https://i.ibb.co/GHGCLgT/Screenshot-227.png" alt="" />
              <div>
                <h1 className="text-sm font-medium font-sans mt-2 text-orange-500">
                  May 29, 2023
                </h1>
                <p className="text-xl font-semibold mt-4">
                  Online Booking Offer Travelia Tour Package
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="mt-5">
              <img src="https://i.ibb.co/tBVkvyM/Screenshot-228.png" alt="" />
              <h1 className="text-sm font-medium font-sans mt-2 text-orange-500">
                May 29, 2023
              </h1>
              <p className="text-xl font-semibold mt-4">
                Online Retailers Offer Travelia Tour Package
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blogs;
