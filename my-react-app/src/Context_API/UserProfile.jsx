import { useContext, useState } from "react";
import {UserContext} from './UserContext'


function UserProfile(){
    const details=useContext(UserContext)
    return (
        <>
            <p>Hello, {details.name}</p>
        </>
    )
}

export default UserProfile;