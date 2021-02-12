import axios from "axios";

export const userServices = {
   getUsers,
};

async function getUsers() {
   return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res)
      .catch((err) => console.log(err));
}
