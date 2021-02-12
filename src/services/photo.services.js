import axios from "axios";

export const photoServices = {
   getPhotos,
};

async function getPhotos() {
   return axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=100")
      .then((res) => res)
      .catch((err) => console.log(err));
}
