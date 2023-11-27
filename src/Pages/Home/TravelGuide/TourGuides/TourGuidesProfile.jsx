import { useParams } from "react-router-dom";
import Container from "../../../../Component/Container";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Rating from "react-rating";
import useAuth from "../../../../Hooks/useAuth";
import { useRef } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const TourGuidesProfile = () => {
  const star = useRef();
  const { user } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  // guide
  const {data: singleUserInfo} = useQuery({
      queryKey:['singleUserInfo'],
      queryFn: async()=>{
        const res = await axiosSecure.get(`/users2/${id}`)
        return res?.data
      }
    })
  const [cardInfo] = singleUserInfo || [];
  console.log(cardInfo)

  // all comments
  const { data: tourGuideComments, refetch } = useQuery({
    queryKey: ["tourGuideComments", cardInfo?.user_email],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/comments/${cardInfo?.user_email}`
      );
      return res?.data;
    },
  });


  // add comment
  const handleComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    const rating = star.current.state.value || 1;

    const commentInfo = {
      user_email: user?.email,
      user_image: user?.photoURL,
      tour_guide_email: cardInfo?.user_email,
      comment: comment,
      rating: rating,
    };

    axiosSecure.post("/comments", commentInfo).then((res) => {
      if (res?.status === 200) {
        refetch();
      }
    });

    form.reset();
  };

  return (
    <Container>
      <div className="my-10">
        <h1 className="border-b-4 border-orange-400 w-fit mx-auto text-5xl font-semibold font-Rancho bg-gradient-to-t from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">
          Tour Guide Profile
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="relative flex flex-col text-gray-700 h-fit bg-white shadow-md  rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl bg-clip-border">
            <img
              className="h-full w-full object-cover"
              src={cardInfo?.user_image}
              alt="profile-picture"
            />
          </div>
          <div className="px-5 mt-5 text-center">
            <h4 className="block  text-4xl font-Rancho antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {cardInfo?.user_name}
            </h4>
          </div>
          <div className="p-5 space-y-1">
            <h1 className="text-base font-semibold text-gray-500">
              Skill: {cardInfo?.skills}
            </h1>
            <h1 className="text-base font-semibold text-gray-500">
              Work Experience: {cardInfo?.works_experience} years
            </h1>
            <h1 className="text-base font-semibold text-gray-500">
              Education: {cardInfo?.education}
            </h1>
            <h1 className="text-base font-semibold text-gray-500">
              Email: {cardInfo?.user_email}
            </h1>
            <h1 className="text-base font-semibold text-gray-500">
              Contact No: {cardInfo?.phone_number}
            </h1>
            <Rating
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512">
                  <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                </svg>
              }
              fullSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512">
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
              }
              initialRating={4.5}
              readonly
            />
          </div>
        </div>
        <div className="border-2 rounded-2xl p-5">
          <div className="rounded-xl shadow-xl p-5">
            <div>
              <h1 className="text-2xl font-semibold mb-5">Comments</h1>
            </div>
            <div className="flex items-center gap-5">
              <div className="avatar">
                <div className="w-14 h-14 rounded-full">
                  <img src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/B6Y4mgL/user.png'} />
                </div>
              </div>
              <div className="flex-1">
                <form onSubmit={handleComment}>
                  <div className="flex items-center gap-5">
                    <div className="flex-1">
                      <div className="relative h-11 w-full mb-2">
                        <input
                          name="comment"
                          required
                          className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder=" "
                        />
                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Add a comment....
                        </label>
                      </div>
                      <div>
                        <Rating
                          emptySymbol={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 576 512">
                              <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                            </svg>
                          }
                          fullSymbol={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 576 512">
                              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                          }
                          ref={star}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="hover:rounded-3xl block w-20 select-none rounded-lg bg-gradient-to-tr from-[#FFA828] to-[#FF4804] py-2 px-6 text-center align-middle font-Rancho text-xl  text-white shadow-md shadow-[#FFA828]/20 transition-all hover:shadow-lg hover:shadow-[#FFA828]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      data-ripple-light="true">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-10">
            {tourGuideComments?.map((comments) => (
              <div key={comments?._id}>
                <div className="flex gap-3 mb-3">
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full">
                      <img src={comments.user_image} />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-xs font-semibold mb-1">{comments?.user_email}</h1>
                    <div>
                      <Rating
                        emptySymbol={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 576 512">
                            <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                          </svg>
                        }
                        fullSymbol={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 576 512">
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>
                        }
                        initialRating={comments?.rating}
                        readonly
                      />
                    </div>
                    <h1 className="text-base font-medium text-gray-500">{comments?.comment}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TourGuidesProfile;
