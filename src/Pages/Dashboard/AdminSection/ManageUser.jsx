import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();

  const { data: allUsers } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res?.data;
    },
  });
  console.log(allUsers);

  return (
    <>
      <div>
        <h1 className="text-center my-10 text-5xl font-semibold font-Rancho">
          Manage User
        </h1>
      </div>
      <div className="bg-[#F6F6F6] p-20 rounded-xl">
        <div>
          <div className="flex justify-between">
            <h1 className="text-4xl  font-semibold">
              Total Users: {allUsers?.length}
            </h1>
          </div>
          {/*  */}
          <div>
            <div className="overflow-x-auto">
              <table className="table w-full my-10">
                {/* head */}
                <thead>
                  <tr>
                    <th className="text-lg text-black">Image</th>
                    <th className="text-lg text-black">Name</th>
                    <th className="text-lg text-black">Email</th>
                    <th className="text-lg text-black">Role</th>
                    <th className="text-lg text-black">Make Guide</th>
                    <th className="text-lg text-black">Make Admin</th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers?.map((user) => (
                    <tr key={user._id}>
                      <th>
                        <div className="avatar">
                          <div className="w-14 h-14 object-cover rounded-xl">
                            <img src={user?.user_image} />
                          </div>
                        </div>
                      </th>
                      <td className="text-gray-500">{user?.user_name}</td>
                      <td className="text-gray-500">{user?.user_email}</td>
                      <td className="text-gray-500 ">{user?.role}</td>
                      <th>
                        <button
                          className={`mx-auto block select-none rounded-lg bg-green-500 hover:rounded-3xl py-2 px-3 normal-case text-center align-middle font-sans text-base font-semibold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                          type="button"
                          data-ripple-light="true">
                          Guide
                        </button>
                      </th>
                      <th>
                        <button
                          className={`mx-auto block select-none rounded-lg bg-green-500 hover:rounded-3xl py-2 px-3 normal-case text-center align-middle font-sans text-base font-semibold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                          type="button"
                          data-ripple-light="true">
                          Admin
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUser;
