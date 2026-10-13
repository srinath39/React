import { createContext,useState } from "react";
import DashBoard from './DashBoard'
import {UserContext} from './UserContext'

function Main(){
    const details={name:"srinath"}

    return (<>
        <UserContext.Provider value={details}>
            <DashBoard/>
        </UserContext.Provider>
    </>)

}

export default Main;