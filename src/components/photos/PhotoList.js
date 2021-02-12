import Photo from "./Photo";
import { photoServices } from "../../services/photo.services";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pagination from "../main/Pagination";

const PhotoList = () => {
   const [photos, setPhotos] = useState([]);
   const { page } = useParams();
   const lastItem = page * 9;

   useEffect(() => {
      photoServices
         .getPhotos()
         .then((res) => {
            if (res.status === 200) {
               setPhotos(res.data);
            }
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <div className="photo-list">
         <h1>Photo list</h1>
         <div className="photo-grid">
            {photos.slice(lastItem - 9, lastItem).map((photo) => (
               <Photo key={photo.id} photo={photo} />
            ))}
         </div>
         {photos.length > 0 && (
            <Pagination
               url={"/photos"}
               pageNum={parseInt(page)}
               itemsNum={photos.length}
            />
         )}
      </div>
   );
};

export default PhotoList;
