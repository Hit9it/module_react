import Address from "../address/address";
import Company from "../company/company";

export default function User({id,name,username,email, phone,website,company, address}) {
    return(
        <div>
            id:{id}<br/>name: {name}<br/>username: {username}<br/>email: {email}<br/>phone: {phone}<br/>website: {website}<br/>
            <Company{...company}/>
            <Address{...address}/>
        </div>
    );}