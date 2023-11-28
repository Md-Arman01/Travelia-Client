import { useQuery } from "@tanstack/react-query";
import PhotoAlbum from "react-photo-album";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";


const Gallery = () => {
    const axiosPublic = useAxiosPublic()
    const {data: galleryImage} = useQuery({
        queryKey: ['galleryImage'],
        queryFn: async()=>{
            const res = await axiosPublic('/gallery')
            return res?.data
        }
    })
    return (
        <div className="mt-16">
            <PhotoAlbum layout="rows" photos={galleryImage} />
        </div>
    );
};

export default Gallery;