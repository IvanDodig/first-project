import {FaTrash} from "react-icons/fa"

const User = ({user, deleteUser}) => {

    return ( 
        <tr>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
            <td onClick={()=>deleteUser(user.id)} style= {{background: 'red', cursor:"pointer"}} > <FaTrash/></td>
        </tr>
     );
}
 
export default User;