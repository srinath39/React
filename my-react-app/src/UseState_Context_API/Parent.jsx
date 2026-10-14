import { useReducer,useState } from "react";
import MiddleCompChildA from "./MiddleCompChildA";
import MiddleCompChildB from "./MiddleCompChildB";
import { SampleContext } from './SampleContext';

const reducer=(count,action)=>{
    switch(action.type){
        case "increase":
            return count+1
        case "decrease":
            return count-1
        case "reset":
            return 0
        default:
            return count
    }
} 

function Parent() {
    const [count,dispatch]=useReducer(reducer,0);
    return (<>
        <SampleContext.Provider value={{count,dispatch}}>
            <MiddleCompChildA />
            <MiddleCompChildB />
        </SampleContext.Provider>
    </>)
}

export default Parent;