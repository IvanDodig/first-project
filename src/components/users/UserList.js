import User from "./User";
import { userServices } from "../../services/user.services";
import { useEffect, useState } from "react";

const UserList = () => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      userServices
         .getUsers()
         .then((res) => {
            if (res.status === 200) {
               setUsers(res.data);
            }
         })
         .catch((err) => console.log(err));
   }, []);

   const deleteUser = (id) => {
      const newUsers = users.filter((user) => user.id !== id);
      setUsers(newUsers);
   };

   return (
      <div className="user-list mx-5">
         <table className="table">
            <thead>
               <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Website</th>
               </tr>
            </thead>
            <tbody>
               {users.length === 0 ? (
                  <>Ucitavanje</>
               ) : (
                  users.map((user) => (
                     <User key={user.id} user={user} deleteUser={deleteUser} />
                  ))
               )}
            </tbody>
         </table>
      </div>
   );
};

export default UserList;
