import {Address} from "./Address";
function User(id,name, username, email, address) {
    return (
        <div>
            <h2>{name}, id: {id}</h2>
            <div>username: {username}<br/>email: {email}<br/></div>
            <Address.../>
        </div>
    );
}

export default User;