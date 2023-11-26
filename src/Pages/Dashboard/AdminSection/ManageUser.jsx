import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();

  const { data: allUsers , refetch} = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res?.data;
    },
  });

  const handleMakeGuide = (id)=>{
    const update ={
        role: 'Tour Guide'
    }
    axiosSecure.put(`/users/${id}`, update)
    .then(res => {
        console.log(res.data)
        if(res?.data.role === 'Tour Guide'){
            refetch()
        }
    })
  }
  const handleMakeAdmin = (id)=>{
    const update ={
        role: 'Admin'
    }
    axiosSecure.put(`/users/${id}`, update)
    .then(res => {
        console.log(res.data)
        if(res?.data.role === 'Admin'){
            refetch()
        }
    })
  }




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
                        {
                            user?.role === 'Tourist'?
                            <button
                          onClick={()=>handleMakeGuide(user?._id)}
                          className="mx-auto block select-none rounded-lg bg-green-500 hover:rounded-3xl py-2 px-5 normal-case text-center align-middle font-sans text-base font-semibold  text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true">
                          Guide
                        </button>
                        :
                        <button
                          onClick={()=>handleMakeGuide(user?._id)}
                          disabled
                          className="mx-auto block select-none rounded-lg bg-green-500 hover:rounded-3xl py-2 px-5 normal-case text-center align-middle font-sans text-base font-semibold  text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true">
                          Guide
                        </button>
                        }
                        
                      </th>
                      <th>
                        {
                            user?.role === 'Tourist'?
                            <button
                            onClick={()=>handleMakeAdmin(user?._id)}
                          className="mx-auto block select-none rounded-lg bg-green-500 hover:rounded-3xl py-2 px-5 normal-case text-center align-middle font-sans text-base font-semibold  text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true">
                          Admin
                        </button>
                        :
                        <button
                          className="mx-auto block select-none rounded-lg bg-green-500 hover:rounded-3xl py-2 px-5 normal-case text-center align-middle font-sans text-base font-semibold  text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          onClick={()=>handleMakeAdmin(user?._id)}
                          disabled
                          data-ripple-light="true">
                          Admin
                        </button>

                        }
                        
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
