import { useState } from "react";
import MiddleCompChildA from "./MiddleCompChildA";
import MiddleCompChildB from "./MiddleCompChildB";
import { SampleContext } from './SampleContext';

function Parent() {
    const [count,setCount]=useState(0);
    return (<>
        <SampleContext.Provider value={{count,setCount}}>
            <MiddleCompChildA />
            <MiddleCompChildB />
        </SampleContext.Provider>
    </>)
}

export default Parent;