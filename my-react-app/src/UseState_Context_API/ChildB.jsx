import { useContext, useState } from "react";
import {SampleContext} from './SampleContext';

function ChildB(){
    const {count,dispatch}=useContext(SampleContext)
    return (<>
        <button onClick={()=>dispatch({type:"increase"})}>Increase Count by One : current Count is :{count}</button>
    </>)
}

export default ChildB;